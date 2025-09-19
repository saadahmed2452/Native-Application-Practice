import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // To use FontAwesome icons

const ESTATES = [
  {
    name: "Beach House",
    rating: 4.8,
    location: "Miami",
    price: "220$/month",
    image: {
      uri: "https://tse3.mm.bing.net/th/id/OIP.6bU6CnXW0VebMDKo_e5KrgHaEF?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  },
  {
    name: "Mountain View",
    rating: 4.6,
    location: "Colorado",
    price: "200$/month",
    image: {
      uri: "https://tse4.mm.bing.net/th/id/OIP.qmxcYrmw8D8tnzWAzuVgUwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  },
  {
    name: "City Loft",
    rating: 4.7,
    location: "New York",
    price: "300$/month",
    image: {
      uri: "https://www.luxuryestates.ae/galimg/06012021064539mansion-contemporary%20(1).jpg",
    },
  },
  {
    name: "Lakefront Villa",
    rating: 4.9,
    location: "California",
    price: "350$/month",
    image: {
      uri: "https://img.jamesedition.com/listing_images/2021/09/01/11/41/34/b3f87892-508f-4d7b-91b0-150c6dadd5ab/je/1040x620xc.jpg",
    },
  },
];

export default function NearbyEstates() {
  return (
    <FlatList
      data={ESTATES}
      numColumns={2} // This ensures two cards in each row
      showsVerticalScrollIndicator={false} // Hide the vertical scroll indicator
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <View style={styles.card}>
          {/* Image with Favorite Icon and Price */}
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
            <TouchableOpacity style={styles.favoriteIcon}>
              <FontAwesome5 name="heart" size={20} color="red" />
            </TouchableOpacity>
            <Text style={styles.price}>{item.price}</Text>
          </View>

          {/* Estate Name and Rating */}
          <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.ratingContainer}>
              <FontAwesome5 name="star" size={16} color="#f4d03f" />
              <Text style={styles.rating}>{item.rating}</Text>
            </View>
            {/* Location */}
            <View style={styles.locationContainer}>
              <FontAwesome5 name="map-marker-alt" size={14} color="#777" />
              <Text style={styles.location}>{item.location}</Text>
            </View>
          </View>
        </View>
      )}
      contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8 }} // Added padding for better spacing
    />
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 4, // Space between each card vertically
    // marginright:10,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 8,
    width: "48%", // Each card takes up 48% of the screen width (2 cards per row)
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    overflow: "hidden", // To prevent any overflow from the card
  },
  imageContainer: {
    width: "100%", // Image should take up the full width of the card
    height: 140, // Set fixed height for the image
    position: "relative", // To position the icons over the image
  },
  image: {
    width: "100%", // Ensure image fills the container
    height: "100%", // Ensure image height is 100% of the container
    borderRadius: 8, // Rounded corners
  },
  favoriteIcon: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 12,
    padding: 4,
  },
  price: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "#fff",
    padding: 4,
    borderRadius: 8,
    fontWeight: "600",
  },
  textContainer: {
    marginTop: 8,
    width: "100%",
    alignItems: "flex-start",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4, // Space between name and rating
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4, // Space between rating and location
  },
  rating: {
    fontSize: 14,
    color: "#000",
    marginLeft: 4,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    color: "#777",
    fontSize: 14,
    marginLeft: 4,
  },
});
