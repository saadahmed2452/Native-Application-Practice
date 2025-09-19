import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const ESTATES = [
  {
    name: "Beach House",
    rating: 4.8,
    location: "Miami",
    price: "$220/month",
    image: {
      uri: "https://tse3.mm.bing.net/th/id/OIP.6bU6CnXW0VebMDKo_e5KrgHaEF?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  },
  {
    name: "Mountain View",
    rating: 4.6,
    location: "Colorado",
    price: "$200/month",
    image: {
      uri: "https://tse4.mm.bing.net/th/id/OIP.qmxcYrmw8D8tnzWAzuVgUwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  },
  {
    name: "City Loft",
    rating: 4.7,
    location: "New York",
    price: "$300/month",
    image: {
      uri: "https://www.luxuryestates.ae/galimg/06012021064539mansion-contemporary%20(1).jpg",
    },
  },
  {
    name: "Lakefront Villa",
    rating: 4.9,
    location: "California",
    price: "$350/month",
    image: {
      uri: "https://img.jamesedition.com/listing_images/2021/09/01/11/41/34/b3f87892-508f-4d7b-91b0-150c6dadd5ab/je/1040x620xc.jpg",
    },
  },
];

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
        <TouchableOpacity style={styles.settingsIcon}>
          <FontAwesome5 name="cog" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Profile */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=12" }}
          style={styles.profilePic}
        />
        <TouchableOpacity style={styles.editIcon}>
          <FontAwesome5 name="pen" size={10} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john@example.com</Text>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>30</Text>
          <Text style={styles.statLabel}>Listings</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Sold</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>28</Text>
          <Text style={styles.statLabel}>Reviews</Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <Text style={[styles.tabItem, styles.activeTab]}>Transaction</Text>
        <Text style={styles.tabItem}>Listings</Text>
        <Text style={styles.tabItem}>Sold</Text>
      </View>
      <View style={styles.transactionHeader}>
        <Text style={styles.transactionCount}>4 Transactions</Text>
        <View style={styles.transactionIconWrapper}>
          <FontAwesome5 name="th-large" size={16} color="black" />
        </View>
      </View>

      {/* Estate Cards: 2 per row */}
      <FlatList
        data={ESTATES}
        keyExtractor={(item) => item.name}
        numColumns={2}
        contentContainerStyle={styles.cardList}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <View style={styles.row}>
                <FontAwesome5 name="star" size={14} color="#f4d03f" />
                <Text style={styles.rating}>{item.rating}</Text>
              </View>
              <View style={styles.row}>
                <FontAwesome5 name="map-marker-alt" size={14} color="#777" />
                <Text style={styles.location}>{item.location}</Text>
              </View>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    paddingTop: 40,
  },

  // Header
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  settingsIcon: {
    position: "absolute",
    right: 16,
    backgroundColor: "#777",
    padding: 10,
    borderRadius: 20,
  },

  // Profile Section
  profileSection: {
    alignItems: "center",
    marginVertical: 20,
  },
  profilePic: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  editIcon: {
    position: "absolute",
    right: 150,
    bottom: 60,
    backgroundColor: "#003366",
    padding: 6,
    borderRadius: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 8,
  },
  email: {
    fontSize: 14,
    color: "#666",
  },

  transactionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    // backgroundColor: "#f9f9f9",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    marginHorizontal: 16,
    borderRadius: 10,
    marginBottom: 10,
  },

  transactionCount: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },

  transactionIconWrapper: {
    backgroundColor: "#e0e0e0",
    padding: 8,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  // Stats Section
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 12,
    paddingHorizontal: 5,
    gap: 2,
  },
  statBox: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 16,
    borderRadius: 20,
    height: 100,
    width: 100,
    justifyContent: "center",
    marginHorizontal: 8,
    backgroundColor: "#fff",
  },
  statNumber: {
    fontSize: 16,
    fontWeight: "700",
  },
  statLabel: {
    fontSize: 13,
    color: "#777",
  },

  // Tabs
  tabs: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginHorizontal: 15,
    marginTop: 10,
    backgroundColor: "#ddd",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  tabItem: {
    fontSize: 16,
    color: "#666",
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  activeTab: {
    color: "#000",
    fontWeight: "bold",
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },

  // Card List
  cardList: {
    marginTop: 10,
    paddingHorizontal: 12,
    paddingBottom: 50,
  },
  card: {
    width: "48%",
    margin: "1%",
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 120,
  },
  cardText: {
    padding: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    color: "#222",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
    color: "#000",
  },
  location: {
    marginLeft: 4,
    fontSize: 14,
    color: "#555",
  },
  price: {
    marginTop: 4,
    fontWeight: "bold",
    backgroundColor: "#eee",
    paddingVertical: 2,
    paddingHorizontal: 6,
    alignSelf: "flex-start",
    borderRadius: 6,
    color: "#000",
    fontSize: 13,
  },
});

export default Profile;
