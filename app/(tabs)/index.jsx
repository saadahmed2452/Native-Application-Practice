import { View, Text, ScrollView, StyleSheet } from "react-native";
import Header from "../components/header";
import SearchBar from "../components/search";
import CategorySlider from "../components/categorySlide";
import SaleCard from "../components/saleCard";
import { useState } from "react";
import { FeaturedEstateList } from "../components/featuredEsCard";
import TopEstateAgents from "../components/topEsAgents";
import NearbyEstates from "../components/nearByEstates";
import TopLocations from "../components/topLocations";
import { useRouter } from "expo-router";

const HomePage = () => {
  const [category, setCategory] = useState("All");

  const router = useRouter();

  // Estate data for featured listings
  const estates = [
    {
      id: "1",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.qQmRhIVyYAOncVqOgD-1MQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "Luxury Villa",
      rating: 4.5,
      location: "California, USA",
      price: "$1,500,000",
      type: "House",
    },
    {
      id: "2",
      image:
        "https://th.bing.com/th/id/OIP.aRQ29BViUEIadz43_YcHMwHaH9?w=152&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      title: "Modern Apartment",
      rating: 4.7,
      location: "New York, USA",
      price: "$850,000",
      type: "Apartment",
    },
    {
      id: "3",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.C4A6hEQoIKensaoyz4brbQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "Beachside Condo",
      rating: 4.3,
      location: "Miami, USA",
      price: "$900,000",
      type: "Condo",
    },
  ];

  return (
    <ScrollView style={{ flex: 1, marginTop: 20 }}>
      <Header />
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={styles.greeting}>Hey, John</Text>
        <Text style={styles.subheading}>Let's start exploring</Text>
      </View>

      <SearchBar />

      <CategorySlider selected={category} onSelect={setCategory} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        <SaleCard
          image={{
            uri: "https://tse4.mm.bing.net/th/id/OIP.qgvipURLtVbjej-lfIvXHQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
          }}
          // headline={estates[0].title}
          headline="🎃 Halloween"
          onPress={() =>
            router.push({
              pathname: "/promotion",
              params: {
                headline: "🎃 Halloween",
              },
            })
          }
        />
        <SaleCard
          image={{
            uri: "https://assets.entrepreneur.com/content/3x2/2000/20150622231001-for-sale-real-estate-home-house.jpeg",
          }}
          headline={"Diwali"}
          onPress={() => router.push("/promotion")}
        />
      </ScrollView>

      <View style={{ marginTop: 0, justifyContent: "center" }}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, margin: 16, fontWeight: "bold" }}>
            Featured Estates
          </Text>
          <Text
            style={{ fontSize: 16, margin: 16 }}
            onPress={() => {
              router.push("/featuredList");
            }}
          >
            View all
          </Text>
        </View>

        <FeaturedEstateList estates={estates} />
      </View>
      <View style={styles.headingRow}>
        <Text style={styles.sectionTitle}>Top Location</Text>
        <Text
          style={{ fontSize: 15 }}
          onPress={() => {
            router.push("/topLocations");
          }}
        >
          explore
        </Text>
      </View>
      <TopLocations />
      <View style={styles.headingRow}>
        <Text style={styles.sectionTitle}>Top Estate Agent</Text>
        <Text
          style={{ fontSize: 15 }}
          onPress={() => {
            router.push("/agentsScreen");
          }}
        >
          explore
        </Text>
      </View>

      <TopEstateAgents />
      <View style={styles.headingRow}>
        <Text style={styles.sectionTitle}>Nearby Estates</Text>
        <Text style={{ fontSize: 15 }}>explore</Text>
      </View>

      <NearbyEstates />
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  greeting: { fontSize: 24, fontWeight: "700", marginTop: 16 },
  subheading: { fontSize: 16, color: "#777", marginTop: 4 },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    alignItems: "center",
  },
  sectionTitle: { fontSize: 18, fontWeight: "600" },
  sectionLink: { color: "#4e8cff", fontWeight: "500" },
  headingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    alignItems: "center",
    // marginTop:2
  },
});
