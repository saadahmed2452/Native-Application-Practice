import { View, Text, Image, FlatList, StyleSheet } from "react-native";

const AGENTS = [
  {
    name: "John Doe",
    image: {
      uri: "https://tse1.mm.bing.net/th/id/OIP.8Npqq8wBiZOf30ZKejQphgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  },
  {
    name: "Sarah Smith",
    image: {
      uri: "https://media.istockphoto.com/photos/real-estate-agent-picture-id532575612?k=6&m=532575612&s=612x612&w=0&h=QXnRQUwSNxD_oHOy8BqI_oI2UUhZNPWz7HIcEe-0ynE=",
    },
  },
  {
    name: "Michael Lee",
    image: {
      uri: "https://tse4.mm.bing.net/th/id/OIP.mQFIIOJcO0wD-vN-kOHV3gHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  },
  {
    name: "Emma Brown",
    image: {
      uri: "https://tse1.mm.bing.net/th/id/OIP.ODZRNYAKtvTj7PXjBX37kAHaEw?pid=ImgDet&w=178&h=114&c=7&dpr=1.5&o=7&rm=3",
    },
  },
  // More agents here
];

export default function TopEstateAgents() {
  return (
    <FlatList
      data={AGENTS}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <View style={styles.agentCard}>
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.agentImage} />
          </View>
          <Text style={styles.agentName}>{item.name}</Text>
        </View>
      )}
      contentContainerStyle={{ paddingHorizontal: 16 }}
    />
  );
}

const styles = StyleSheet.create({
  agentCard: {
    // marginRight: 16,
    alignItems: "center",
    justifyContent: "center", // Center the content
    height: 180, // Adjusted height to add space
    width: 140, // Fixed width for consistency
  },
  imageContainer: {
    padding: 4,
    backgroundColor: "#fff", // White background for the image container
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5, // Android shadow
  },
  agentImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2, // Adds a border around the image
    borderColor: "#ddd", // Light border for better separation
  },
  agentName: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "500",
    color: "#333", // Darker text color for better contrast
    textAlign: "center",
  },
});
