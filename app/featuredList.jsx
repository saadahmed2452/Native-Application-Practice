import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Switch,
} from "react-native";
import { useRouter } from "expo-router";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import SearchBar from "./components/search";
export default function FeaturedList() {
  const router = useRouter();
  const [isGridView, setIsGridView] = useState(true);

  const estates = [
    {
      id: "1",
      image: {
        uri: "https://tse1.mm.bing.net/th/id/OIP.o4Tc7JGTQFPuAnygjT8e0gHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      name: "Modern Villa",
      rating: 4.5,
      location: "LA, California",
      price: "$1,200,000",
    },
    {
      id: "2",
      image: {
        uri: "https://th.bing.com/th/id/OIP.HdCPwI7oW3N-O68LaHR9sgHaEK?w=301&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      },
      name: "City Apartment",
      rating: 4.8,
      location: "NY, USA",
      price: "$850,000",
    },
    {
      id: "3",
      image: {
        uri: "https://tse2.mm.bing.net/th/id/OIP.T32x1XrKWzqZvjlf9WJsEQHaF6?rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      name: "City",
      rating: 4.8,
      location: "NY, Britain",
      price: "$850,000",
    },
    {
      id: "4",
      image: {
        uri: "https://tse2.mm.bing.net/th/id/OIP.uDTygh6OxEQvTPzTbu_5TAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      name: "Fort",
      rating: 4.8,
      location: "NY, USA",
      price: "$850,000",
    },
    // add more as needed
  ];

  const renderCard = ({ item }) => (
    <View style={[styles.card, !isGridView && { width: "100%" }]}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
        <TouchableOpacity style={styles.favoriteIcon}>
          <FontAwesome5 name="heart" size={20} color="red" />
        </TouchableOpacity>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.ratingContainer}>
          <FontAwesome5 name="star" size={16} color="#f4d03f" />
          <Text style={styles.rating}>{item.rating}</Text>
        </View>
        <View style={styles.locationContainer}>
          <FontAwesome5 name="map-marker-alt" size={14} color="#777" />
          <Text style={styles.location}>{item.location}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <FontAwesome5 name="arrow-left" size={20} />
        </TouchableOpacity>
        <View style={styles.pins}>
          <FontAwesome5
            name="thumbtack"
            size={18}
            style={{ marginHorizontal: 10 }}
          />
          <FontAwesome5 name="thumbtack" size={18} />
        </View>
      </View>

      {/* Hero Image Section */}
      <View style={styles.heroSection}>
        <Image
          source={{
            uri: "https://th.bing.com/th/id/OIP.Jx4f7Fs1xCcZh6smOghjAwHaE6?w=279&h=186&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
          }}
          style={styles.mainImage}
        />
        <View style={styles.sideImages}>
          <Image
            source={{
              uri: "https://th.bing.com/th/id/OIP.6oC1GQYRh1gfxsYdkijUBQHaEB?w=275&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            }}
            style={styles.smallImage}
          />
          <Image
            source={{
              uri: "https://th.bing.com/th/id/OIP.GkZkoy7ijdZkbCMaMdYgYwHaE9?w=223&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            }}
            style={styles.smallImage}
          />
        </View>
      </View>

      {/* Title & Subtitle */}
      <View style={styles.titleSection}>
        <Text style={styles.title}>Featured Estates</Text>
        <Text style={styles.subtitle}>Explore our curated top listings</Text>
      </View>

      {/* Search */}
      <SearchBar />

      {/* Toggle & Count Row */}
      {/* Toggle & Count Row */}
      <View style={styles.toggleRow}>
        <Text style={{ fontSize: 16, fontWeight: "600" }}>70 estates</Text>
        <View style={styles.toggleContainer}>
          <TouchableOpacity onPress={() => setIsGridView(false)}>
            <FontAwesome5
              name="list"
              size={18}
              color={!isGridView ? "#4caf50" : "#777"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsGridView(true)}
            style={{ marginLeft: 12 }}
          >
            <FontAwesome5
              name="th-large"
              size={18}
              color={isGridView ? "#4caf50" : "#777"}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Card List */}
      <FlatList
        data={estates}
        key={isGridView ? "g" : "l"} // To force layout switch
        numColumns={isGridView ? 2 : 1}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 80 }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    marginTop: 25,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  pins: {
    flexDirection: "row",
  },
  heroSection: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  mainImage: {
    width: "75%",
    height: 160,
    borderRadius: 12,
  },
  sideImages: {
    width: "25%",
    justifyContent: "space-between",
    marginLeft: 8,
  },
  smallImage: {
    height: 76,
    borderRadius: 12,
    width: "100%",
  },
  titleSection: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },
  toggleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginVertical: 12,
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12, // works in newer versions
  },

  card: {
    margin: 4,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 8,
    width: "48%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    overflow: "hidden",
  },
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
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  rating: {
    fontSize: 14,
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
