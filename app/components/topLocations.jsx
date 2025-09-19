import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const AGENTS = [
  { 
    name: "Bali", 
        image: { uri: 'https://th.bing.com/th/id/OIP.XXz9-hdyzhveUaD3tGsaAwHaE8?w=225&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' }

  },
  { 
    name: "Jakarta", 
        image: { uri: 'https://tse4.mm.bing.net/th/id/OIP.GhtwiL2dZvvLSFaVdV1GKgHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3' }

  },
  { 
    name: "Hartland", 
        image: { uri: 'https://cdn.topluxuryproperty.com/gallery/location_advantage_of_sobha_hartland_estate_638745317850430162_820465_.webp' }

  },
  // More agents here
];

export default function TopLocations() {
  return (
    <FlatList
      data={AGENTS}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.name}
      renderItem={({ item }) => (
        <View style={styles.agentCard}>
          <Image source={item.image} style={styles.agentImage} />
          <Text style={styles.agentName}>{item.name}</Text>
        </View>
      )}
      contentContainerStyle={{ paddingHorizontal: 16 }}
    />
  );
}

const styles = StyleSheet.create({
  agentCard: {
    alignItems: 'center',
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 2,
    backgroundColor: 'gray',
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: "flex-start", // Align items to the left
    height: 80, // Set a consistent height for the card
    width: 150, // Set a fixed width to prevent it from expanding too much
  },
  agentImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft:10,
    marginRight: 12, // Space between image and text
  },
  agentName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff', // White text for better visibility
    textAlign: 'center',
  },
});
