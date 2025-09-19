import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function FeaturedEstateCard({
  image,
  title,
  rating,
  location,
  price,
  type,
  onFavoritePress,
}) {
  return (
    <View style={styles.card}>
      {/* Left half: Image */}
      <View style={styles.imageContainer}>
        {/* Dynamically passing image URL */}
        <Image source={{ uri: image }} style={styles.image} />
        {/* Favorite Icon in the top-left */}
        <TouchableOpacity style={styles.favoriteBtn} onPress={onFavoritePress}>
          <Icon name="heart-outline" size={24} color="#ff1e1e" />
        </TouchableOpacity>
        {/* Type in the bottom-left */}
        <View style={styles.typeContainer}>
          <Text style={styles.type}>{type}</Text>
        </View>
      </View>

      {/* Right half: Details */}
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.row}>
          <Icon name="star" size={16} color="#f4d03f" />
          <Text style={styles.rating}>{rating}</Text>
        </View>

        {/* Location and Price */}
        <View style={styles.locationRow}>
          <Icon name="location-outline" size={16} color="#777" />
          <Text style={styles.location}>{location}</Text>
        </View>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
}

export function FeaturedEstateList({ estates }) {
  return (
    <FlatList
      data={estates}
      renderItem={({ item }) => (
        <FeaturedEstateCard
          image={item.image} /* Dynamic Image URL */
          title={item.title}
          rating={item.rating}
          location={item.location}
          price={item.price}
          type={item.type}
          onFavoritePress={() =>
            console.log("Favorite Pressed for:", item.title)
          } /* Handle favorite toggle */
        />
      )}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 10,
    marginRight: 16, // Spacing between cards
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: 300, // Fixed width for each card
  },
  imageContainer: {
    width: "50%",
    position: "relative", // To position the icons within the image container
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    objectFit: "cover", // Ensures image is resized properly
  },
  favoriteBtn: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 20,
    padding: 5,
  },
  typeContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    backgroundColor: "#4e8cff",
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 8,
  },
  type: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  details: {
    marginLeft: 10,
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  rating: {
    fontSize: 14,
    marginLeft: 5,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  location: {
    color: "#777",
    fontSize: 14,
    marginLeft: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 5,
  },
  scrollContainer: {
    paddingLeft: 16,
    paddingVertical: 10,
  },
});
