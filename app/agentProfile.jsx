// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   FlatList,
//   Switch,
// } from 'react-native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import { useRouter, useSearchParams } from 'expo-router'; // or react-navigation hooks

// // You can replace this with your actual listings data
// const dummyListings = [
//   {
//     id: '1',
//     image: { uri: 'https://tse1.mm.bing.net/th/id/OIP.o4Tc7JGTQFPuAnygjT8e0gHaFj?rs=1&pid=ImgDetMain&o=7&rm=3' },
//     name: 'Modern Villa',
//     rating: 4.5,
//     location: 'LA, California',
//     price: '$1,200,000',
//   },
//   {
//     id: '2',
//     image: { uri: 'https://th.bing.com/th/id/OIP.HdCPwI7oW3N-O68LaHR9sgHaEK?w=301&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
//     name: 'City Apartment',
//     rating: 4.8,
//     location: 'NY, USA',
//     price: '$850,000',
//   },
// ];

// export default function AgentProfile() {
//   const router = useRouter();
//   const params = useSearchParams();
//   const agent = JSON.parse(params.agent);
//   const rank = params.rank;

//   const [isGridView, setIsGridView] = useState(true);

//   const renderListingCard = ({ item }) => (
//     <View style={[styles.card, !isGridView && { width: '100%' }]}>
//       <View style={styles.imageContainer}>
//         <Image source={item.image} style={styles.image} />
//         <TouchableOpacity style={styles.favoriteIcon}>
//           <FontAwesome5 name="heart" size={20} color="red" />
//         </TouchableOpacity>
//         <Text style={styles.price}>{item.price}</Text>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.name}>{item.name}</Text>
//         <View style={styles.ratingContainer}>
//           <FontAwesome5 name="star" size={16} color="#f4d03f" />
//           <Text style={styles.rating}>{item.rating}</Text>
//         </View>
//         <View style={styles.locationContainer}>
//           <FontAwesome5 name="map-marker-alt" size={14} color="#777" />
//           <Text style={styles.location}>{item.location}</Text>
//         </View>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => router.back()}>
//           <FontAwesome5 name="arrow-left" size={20} />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Profile</Text>
//         <TouchableOpacity style={styles.uploadButton}>
//           <FontAwesome5 name="upload" size={20} color="#fff" />
//         </TouchableOpacity>
//       </View>

//       {/* Profile Info */}
//       <View style={styles.profileSection}>
//         <View style={styles.profileImageContainer}>
//           <Image source={agent.profileImage} style={styles.profileImage} />
//           <View style={styles.rankBadge}>
//             <Text style={styles.rankText}>#{rank}</Text>
//           </View>
//         </View>
//         <Text style={styles.agentName}>{agent.name}</Text>
//         <Text style={styles.agentEmail}>{agent.email || 'agent@example.com'}</Text>
//       </View>

//       {/* Stats Row */}
//       <View style={styles.statsRow}>
//         <View style={styles.statContainer}>
//           <Text style={styles.statNumber}>5.0</Text>
//           <View style={{ flexDirection: 'row', marginTop: 4 }}>
//             {[...Array(5)].map((_, i) => (
//               <FontAwesome5 key={i} name="star" size={16} color="#f4d03f" />
//             ))}
//           </View>
//           <Text style={styles.statLabel}>Rating</Text>
//         </View>
//         <View style={styles.statContainer}>
//           <Text style={styles.statNumber}>234</Text>
//           <Text style={styles.statLabel}>Reviews</Text>
//         </View>
//         <View style={styles.statContainer}>
//           <Text style={styles.statNumber}>120</Text>
//           <Text style={styles.statLabel}>Sold</Text>
//         </View>
//       </View>

//       {/* Listings header and toggle */}
//       <View style={styles.listingsHeader}>
//         <Text style={styles.listingsTitle}>Listings Sold</Text>
//         <View style={styles.toggleContainer}>
//           <FontAwesome5 name="list" size={18} />
//           <Switch value={isGridView} onValueChange={setIsGridView} />
//           <FontAwesome5 name="th-large" size={18} />
//         </View>
//       </View>

//       {/* Listings cards */}
//       <FlatList
//         data={dummyListings}
//         key={isGridView ? 'g' : 'l'}
//         numColumns={isGridView ? 2 : 1}
//         renderItem={renderListingCard}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 40 }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff' },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 16,
//     alignItems: 'center',
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: '600',
//   },
//   uploadButton: {
//     backgroundColor: '#007bff',
//     padding: 8,
//     borderRadius: 8,
//   },
//   profileSection: {
//     alignItems: 'center',
//     marginVertical: 16,
//   },
//   profileImageContainer: {
//     position: 'relative',
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//   },
//   rankBadge: {
//     position: 'absolute',
//     bottom: 4,
//     right: 4,
//     backgroundColor: 'rgba(0,0,0,0.7)',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 20,
//   },
//   rankText: {
//     color: '#fff',
//     fontWeight: '700',
//     fontSize: 14,
//   },
//   agentName: {
//     fontSize: 22,
//     fontWeight: '700',
//     marginTop: 8,
//   },
//   agentEmail: {
//     fontSize: 14,
//     color: '#777',
//     marginTop: 4,
//   },
//   statsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingHorizontal: 24,
//     marginVertical: 16,
//   },
//   statContainer: {
//     alignItems: 'center',
//   },
//   statNumber: {
//     fontSize: 20,
//     fontWeight: '700',
//   },
//   statLabel: {
//     fontSize: 14,
//     color: '#777',
//     marginTop: 4,
//   },
//   listingsHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 16,
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   listingsTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//   },
//   toggleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//   },
//   card: {
//     margin: 4,
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 8,
//     width: '48%',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//     overflow: 'hidden',
//   },
//   imageContainer: {
//     width: '100%',
//     height: 140,
//     position: 'relative',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 8,
//   },
//   favoriteIcon: {
//     position: 'absolute',
//     top: 8,
//     right: 8,
//     backgroundColor: 'rgba(255, 255, 255, 0.7)',
//     borderRadius: 12,
//     padding: 4,
//   },
//   price: {
//     position: 'absolute',
//     bottom: 8,
//     right: 8,
//     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     color: '#fff',
//     padding: 4,
//     borderRadius: 8,
//     fontWeight: '600',
//   },
//   textContainer: {
//     marginTop: 8,
//     width: '100%',
//     alignItems: 'flex-start',
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 4,
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 4,
//   },
//   rating: {
//     fontSize: 14,
//     marginLeft: 4,
//   },
//   locationContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   location: {
//     color: '#777',
//     fontSize: 14,
//     marginLeft: 4,
//   },
// });



import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Switch,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useRouter, useLocalSearchParams } from 'expo-router';
import * as ExpoRouter from 'expo-router';

const dummyListings = [
  {
    id: '1',
    image: { uri: 'https://tse1.mm.bing.net/th/id/OIP.o4Tc7JGTQFPuAnygjT8e0gHaFj?rs=1&pid=ImgDetMain&o=7&rm=3' },
    name: 'Modern Villa',
    rating: 4.5,
    location: 'LA, California',
    price: '$1,200,000',
  },
  {
    id: '2',
    image: { uri: 'https://th.bing.com/th/id/OIP.HdCPwI7oW3N-O68LaHR9sgHaEK?w=301&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
    name: 'City Apartment',
    rating: 4.8,
    location: 'NY, USA',
    price: '$850,000',
  },
];

export default function AgentProfile() {
  const router = useRouter();
const params = useLocalSearchParams();

  console.log(ExpoRouter);

  // Defensive parsing (in case params.agent is missing)
  let agent = null;
  try {
    agent = JSON.parse(params.agent);
  } catch (error) {
  console.error("Failed to parse agent params:", error);
  console.log("Raw params.agent value:", params.agent);
}
  const rank = params.rank || 'N/A';

  const [isGridView, setIsGridView] = useState(true);

  const renderListingCard = ({ item }) => (
    <View style={[styles.card, !isGridView && { width: '100%' }]}>
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

  if (!agent) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', marginTop: 20 }}>Agent data not found.</Text>
        <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 20 }}>
          <Text style={{ color: 'blue', textAlign: 'center' }}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <FontAwesome5 name="arrow-left" size={20} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity style={styles.uploadButton}>
          <FontAwesome5 name="upload" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Profile Info */}
      <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
          <Image source={agent.profileImage} style={styles.profileImage} />
          <View style={styles.rankBadge}>
            <Text style={styles.rankText}>#{rank}</Text>
          </View>
        </View>
        <Text style={styles.agentName}>{agent.name}</Text>
        <Text style={styles.agentEmail}>{agent.email || 'agent@example.com'}</Text>
      </View>

      {/* Stats Row */}
      <View style={styles.statsRow}>
        <View style={styles.statContainer}>
          <Text style={styles.statNumber}>5.0</Text>
          <View style={{ flexDirection: 'row', marginTop: 4 }}>
            {[...Array(5)].map((_, i) => (
              <FontAwesome5 key={i} name="star" size={16} color="#f4d03f" />
            ))}
          </View>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
        <View style={styles.statContainer}>
          <Text style={styles.statNumber}>234</Text>
          <Text style={styles.statLabel}>Reviews</Text>
        </View>
        <View style={styles.statContainer}>
          <Text style={styles.statNumber}>{agent.sold || 0}</Text>
          <Text style={styles.statLabel}>Sold</Text>
        </View>
      </View>

      {/* Listings header and toggle */}
      <View style={styles.listingsHeader}>
        <Text style={styles.listingsTitle}>Listings Sold</Text>
        <View style={styles.toggleContainer}>
          <FontAwesome5 name="list" size={18} />
          <Switch value={isGridView} onValueChange={setIsGridView} />
          <FontAwesome5 name="th-large" size={18} />
        </View>
      </View>

      {/* Listings cards */}
      <FlatList
        data={dummyListings}
        key={isGridView ? 'g' : 'l'}
        numColumns={isGridView ? 2 : 1}
        renderItem={renderListingCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 40 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  uploadButton: {
    backgroundColor: '#007bff',
    padding: 8,
    borderRadius: 8,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 16,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  rankBadge: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
  },
  rankText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
  agentName: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 8,
  },
  agentEmail: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 24,
    marginVertical: 16,
  },
  statContainer: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '700',
  },
  statLabel: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  listingsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 8,
  },
  listingsTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  card: {
    margin: 4,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 8,
    width: '48%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: 140,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 12,
    padding: 4,
  },
  price: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: '#fff',
    padding: 4,
    borderRadius: 8,
    fontWeight: '600',
  },
  textContainer: {
    marginTop: 8,
    width: '100%',
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  rating: {
    fontSize: 14,
    marginLeft: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    color: '#777',
    fontSize: 14,
    marginLeft: 4,
  },
});



