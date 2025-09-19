import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";

const locations = [
  {
    id: "1",
    name: "New York",
    image: {
      uri: "https://th.bing.com/th/id/OIP.o2XujM63ZFSO7W0EelC7NAHaEK?w=308&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    },
  },
  {
    id: "2",
    name: "Paris",
    image: {
      uri: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    },
  },
  {
    id: "3",
    name: "Tokyo",
    image: { uri: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c" },
  },
  {
    id: "4",
    name: "Dubai Hills",
    image: {
      uri: "https://th.bing.com/th/id/OIP.IKQ51L6RGXfecLuunRDDVQHaEK?w=264&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    },
  },
  {
    id: "5",
    name: "Malibu",
    image: {
      uri: "https://th.bing.com/th/id/OIP.TYQccy0zax_fX0Z08y2hkAHaE8?w=223&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    },
  },
  {
    id: "6",
    name: "Hudson Valley",
    image: {
      uri: "https://th.bing.com/th/id/OIP.u-Hy6g8-yP3osgxKXwHIygHaFj?w=225&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    },
  },
  {
    id: "7",
    name: "Britain",
    image: {
      uri: "https://tse2.mm.bing.net/th/id/OIP.T32x1XrKWzqZvjlf9WJsEQHaF6?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  },
  {
    id: "8",
    name: "Tokyo",
    image: { uri: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c" },
  },
];

export default function TopLocationsScreen() {
  const renderItem = ({ item, index }) => (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.numberOverlay}>
          <Text style={styles.numberText}>#{index + 1}</Text>
        </View>
      </View>
      <Text style={styles.locationName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Title and Subtitle */}
      <View style={styles.header}>
        <Text style={styles.title}>Top Locations</Text>
        <Text style={styles.subtitle}>Explore</Text>
      </View>

      {/* Cards row with 2 cards per row */}
      <FlatList
        data={locations}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    marginTop: 25,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 16,
    color: "#777",
    marginTop: 4,
  },
  listContent: {
    paddingBottom: 40,
  },
  card: {
    flex: 1,
    marginBottom: 16,
    marginHorizontal: 8,
    alignItems: "center",
  },
  imageWrapper: {
    width: "100%",
    aspectRatio: 1.2, // height based on width, adjust as needed
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  numberOverlay: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  numberText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },
  locationName: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
