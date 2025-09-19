import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Platform,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import axios from "axios";
import Icon from "react-native-vector-icons/Ionicons";

export default function Search({ place = "Karnataka, India", onProfilePress, onNotifPress, onLocationPress }) {
  const [location, setLocation] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Default to San Francisco coordinates
  const defaultRegion = {
    latitude: 37.7749,
    longitude: -122.4194,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  // Set up Google API Key
  const GOOGLE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY; // Replace this with your actual Google API key

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        setIsLoading(false);
        return;
      }

      try {
        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
        setSelectedLocation({
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
          title: "Your Location",
        });
      } catch (error) {
        console.error("Error getting location:", error);
        setErrorMsg("Couldn't get current location");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  // Search location with Google Places API
  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
          searchQuery
        )}&key=${GOOGLE_API_KEY}`
      );

      if (response.data.predictions.length > 0) {
        const placeId = response.data.predictions[0].place_id;

        // Fetch detailed info about the selected place
        const detailsResponse = await axios.get(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${GOOGLE_API_KEY}`
        );

        const { lat, lng } = detailsResponse.data.result.geometry.location;
        const newLocation = {
          latitude: lat,
          longitude: lng,
          title: detailsResponse.data.result.formatted_address,
        };
        setSelectedLocation(newLocation);
      } else {
        setErrorMsg("No results found");
      }
    } catch (error) {
      console.error("Search error:", error);
      setErrorMsg("Failed to search location");
    }
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (errorMsg) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{errorMsg}</Text>
      </View>
    );
  }

  return (
  <View style={styles.container}>
    {/* Location Section */}
    <View style={styles.locationRow}>
      {/* Left: Location with Down Arrow */}
      <TouchableOpacity style={styles.left} onPress={onLocationPress}>
        <View style={styles.locationContainer}>
          <Icon name="location-outline" size={20} color="white" />
          <Text style={styles.placeText}>
            {selectedLocation ? selectedLocation.title : place}  {/* Dynamically update place name */}
          </Text>
          <Icon name="chevron-down-outline" size={18} color="white" />
        </View>
      </TouchableOpacity>

      {/* Right: Navigation icons */}
      <View style={styles.right}>
        <Icon name="chevron-back-outline" size={24} color="#000" />
        <Icon name="chevron-forward-outline" size={24} color="#000" />
      </View>
    </View>

    {/* Custom Search Bar */}
    <View style={styles.searchContainer}>
      <TouchableOpacity onPress={() => handleSearch()}>
        <Icon name="search-outline" size={24} color="#000" />
      </TouchableOpacity>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for places..."
        returnKeyType="search"
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch}
      />
      <TouchableOpacity onPress={() => alert('Mic Clicked')}>
        <Icon name="mic-outline" size={24} color="#000" />
      </TouchableOpacity>
    </View>

    {/* Map View */}
    <MapView
      style={styles.map}
      region={{
        latitude: selectedLocation ? selectedLocation.latitude : defaultRegion.latitude,
        longitude: selectedLocation ? selectedLocation.longitude : defaultRegion.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {/* Marker for selected location */}
      {selectedLocation && (
        <Marker
          coordinate={{
            latitude: selectedLocation.latitude,
            longitude: selectedLocation.longitude,
          }}
          title={selectedLocation.title}
        />
      )}
    </MapView>
  </View>
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  locationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    position: "absolute",
    top: Platform.select({ ios: 50, android: 40 }),
    left: 0,
    right: 0,
    zIndex: 1,
    // backgroundColor: "white",
    elevation: 5,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black", // Dark background for location section
    borderRadius: 50,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  placeText: {
    marginHorizontal: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "white", // White text color
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchContainer: {
    position: "absolute",
    top: Platform.select({ ios: 140, android: 120 }), // Adjusted to be lower
    left: 20,
    right: 20,
    zIndex: 2,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: "#ddd",
    // borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
    padding: 20,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
// import { View, Text } from 'react-native'
// import React from 'react'

// const search = () => {
//   return (
//     <View>
//       <Text>search</Text>
//     </View>
//   )
// }

// export default search