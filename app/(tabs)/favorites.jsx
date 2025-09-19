import React, { useState } from "react";
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
    price: "$ 220/month",
    image: {
      uri: "https://tse3.mm.bing.net/th/id/OIP.6bU6CnXW0VebMDKo_e5KrgHaEF?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  },
  {
    name: "Mountain View",
    rating: 4.6,
    location: "Colorado",
    price: "$ 200/month",
    image: {
      uri: "https://tse4.mm.bing.net/th/id/OIP.qmxcYrmw8D8tnzWAzuVgUwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  },
  {
    name: "City Loft",
    rating: 4.7,
    location: "New York",
    price: "$ 300/month",
    image: {
      uri: "https://www.luxuryestates.ae/galimg/06012021064539mansion-contemporary%20(1).jpg",
    },
  },
  {
    name: "Lakefront Villa",
    rating: 4.9,
    location: "California",
    price: "$ 350/month",
    image: {
      uri: "https://img.jamesedition.com/listing_images/2021/09/01/11/41/34/b3f87892-508f-4d7b-91b0-150c6dadd5ab/je/1040x620xc.jpg",
    },
  },
];

const Favorites = () => {
  const [isGridView, setIsGridView] = useState(true);

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Favorite</Text>
        <TouchableOpacity style={styles.deleteIcon}>
          <FontAwesome5 name="trash-alt" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Toggle & Count Section */}
      <View style={styles.subHeader}>
        <Text style={styles.estateCount}>{ESTATES.length} Estates</Text>
        <View style={styles.toggleIcons}>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              isGridView && styles.activeToggleButton,
            ]}
            onPress={() => setIsGridView(true)}
          >
            <FontAwesome5 name="th-large" size={16} color={isGridView ? "#fff" : "#555"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              !isGridView && styles.activeToggleButton,
            ]}
            onPress={() => setIsGridView(false)}
          >
            <FontAwesome5 name="list" size={16} color={!isGridView ? "#fff" : "#555"} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Estates Section */}
      <FlatList
        data={ESTATES}
        numColumns={isGridView ? 2 : 1}
        key={isGridView ? "g" : "l"} // Forces re-render when view mode changes
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.name}
       renderItem={({ item }) => (
  <View style={[styles.card, { flexDirection: isGridView ? 'column' : 'row', width: isGridView ? '48%' : '100%' }]}>
    
    {/* Left: Image (in list view, half-width) */}
    <View style={[styles.imageContainer, { width: isGridView ? '100%' : '50%', height: isGridView ? 140 : 120 }]}>
      <Image source={item.image} style={styles.image} />
      <TouchableOpacity style={styles.favoriteIcon}>
        <FontAwesome5 name="heart" size={20} color="red" />
      </TouchableOpacity>
      {isGridView && (
        <Text style={styles.price}>{item.price}</Text>
      )}
    </View>

    {/* Right: Text details */}
    <View style={[styles.textContainer, { flex: 1, paddingLeft: isGridView ? 0 : 12, justifyContent: 'center' }]}>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.ratingContainer}>
        <FontAwesome5 name="star" size={16} color="#f4d03f" />
        <Text style={styles.rating}>{item.rating}</Text>
      </View>
      <View style={styles.locationContainer}>
        <FontAwesome5 name="map-marker-alt" size={14} color="#777" />
        <Text style={styles.location}>{item.location}</Text>
      </View>
      {!isGridView && (
        <Text style={styles.listPrice}>{item.price}</Text>
      )}
    </View>
  </View>
)}

        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    paddingTop: 20,
  },

  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#f4f4f4",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    flex: 1,
  },
  deleteIcon: {
    padding: 12,
    backgroundColor: "#ccc",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },

  // Sub Header
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  estateCount: {
    fontSize: 16,
    color: "#555",
  },

  // Toggle Buttons
  toggleIcons: {
    flexDirection: "row",
    backgroundColor: "#e0e0e0", // subtle light gray
    borderRadius: 30,
    padding: 4,
    gap:4,
  },
  toggleButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  activeToggleButton: {
    backgroundColor: "#000",
  },

  // Toggle Button Text (optional styling if you're using Text inside)
  toggleText: {
    color: "#333",
    fontSize: 14,
    fontWeight: "500",
  },
  activeToggleText: {
    color: "#fff",
  },

  // Card
  card: {
    margin: 8,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    overflow: "hidden",
  },
  listPrice: {
  marginTop: 6,
  fontWeight: "600",
  color: "#000",
  backgroundColor: "#f1f1f1",
  paddingVertical: 4,
  paddingHorizontal: 8,
  borderRadius: 6,
  alignSelf: "flex-start",
  fontSize: 13,
},


  // Image inside card
  imageContainer: {
    width: "100%",
    height: 140,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },

  // Icons on Image
  favoriteIcon: {
    position: "absolute",
    top: 8,
    left: 8,
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
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    fontWeight: "600",
    fontSize: 13,
  },

  // Text section under image
  textContainer: {
    marginTop: 8,
    width: "100%",
    alignItems: "flex-start",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    color: "#222",
  },

  // Rating
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  rating: {
    fontSize: 14,
    color: "#000",
    marginLeft: 4,
  },

  // Location
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



export default Favorites;
