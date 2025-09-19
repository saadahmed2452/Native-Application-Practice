// import { useRouter } from 'expo-router';
// import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// const agents = [
//   {
//     id: '1',
//     name: 'John Doe',
//     profileImage: { uri: 'https://randomuser.me/api/portraits/men/32.jpg' },
//     rating: 5,
//     sold: '240',
//   },
//   {
//     id: '2',
//     name: 'Jane Smith',
//     profileImage: { uri: 'https://randomuser.me/api/portraits/women/44.jpg' },
//     rating: 5,
//     sold: '241',
//   },
//   {
//     id: '3',
//     name: 'Jane Smith',
//     profileImage: { uri: 'https://randomuser.me/api/portraits/women/44.jpg' },
//     rating: 5,
//     sold: '244',
//   },
//   {
//     id: '4',
//     name: 'Jane Smith',
//     profileImage: { uri: 'https://randomuser.me/api/portraits/women/44.jpg' },
//     rating: 5,
//     sold: 'No sold',
//   },
//   {
//     id: '5',
//     name: 'Jane Smith',
//     profileImage: { uri: 'https://randomuser.me/api/portraits/women/44.jpg' },
//     rating: 5,
//     sold: 'No sold',
//   },
//   {
//     id: '6',
//     name: 'Jane Smith',
//     profileImage: { uri: 'https://randomuser.me/api/portraits/women/44.jpg' },
//     rating: 5,
//     sold: 'No sold',
//   },
//   // add more agents if needed
// ];

// export default function TopAgentsScreen({ item, index }) {


//     const router = useRouter();
//   const renderItem = ({ item, index }) => (
     
//     <TouchableOpacity style={styles.card} onPress={()=>{
//         router.push({
//   pathname: '/AgentProfile',
//   params: {
//     agent: JSON.stringify(agentObject),
//     rank: '1',
//   }
// });

//     }} >
//       <View style={styles.numberBadge}>
//         <Text style={styles.numberText}>#{index + 1}</Text>
//       </View>
//       <Image source={item.profileImage} style={styles.profileImage} />
//       <Text style={styles.agentName}>{item.name}</Text>
//       <View style={styles.infoRow}>
//         <View style={styles.rating}>
//           <FontAwesome5 name="star" size={16} color="#f4d03f" />
//           <Text style={styles.ratingText}>{item.rating}</Text>
//         </View>
//         <View style={styles.soldInfo}>
//           <FontAwesome5 name="house-user" size={16} color="#777" />
//           <Text style={styles.soldText}>{item.sold}</Text>
//         </View>
//       </View>
//     </TouchableOpacity>

//   );

//   return (
//     <View style={styles.container}>
//       {/* Heading */}
//       <View style={styles.headingRow}>
//         <Text style={styles.sectionTitle}>Top Estate Agent</Text>
//       </View>
//       <Text>Find the best Recommendations place to live</Text>

//       {/* Agents List */}
//       <FlatList
//         data={agents}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         numColumns={2}
//         contentContainerStyle={styles.listContent}
//         columnWrapperStyle={{ justifyContent: 'space-between' }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   headingRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 16,
//   },
//   sectionTitle: {
//     fontSize: 22,
//     fontWeight: '700',
//   },
//   listContent: {
//     paddingBottom: 40,
//   },
//   card: {
//     flex: 1,
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 16,
//     marginHorizontal: 8,
//     marginBottom: 16,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//     position: 'relative',
//   },
//   numberBadge: {
//     position: 'absolute',
//     top: 12,
//     left: 12,
//     backgroundColor: 'rgba(0,0,0,0.6)',
//     paddingHorizontal: 10,
//     paddingVertical: 6,
//     borderRadius: 20,
//     zIndex: 10,
//   },
//   numberText: {
//     color: '#fff',
//     fontWeight: '700',
//     fontSize: 16,
//   },
//   profileImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     marginTop: 30, // to push it below numberBadge
//     marginBottom: 12,
//   },
//   agentName: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 12,
//     textAlign: 'center',
//   },
//   infoRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '80%',
//     gap:8,
//   },
//   rating: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   ratingText: {
//     marginLeft: 6,
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   soldInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   soldText: {
//     marginLeft: 6,
//     fontSize: 14,
//     color: '#777',
//   },
// });

import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useRouter } from 'expo-router';

const agents = [
  {
    id: '1',
    name: 'John Doe',
    profileImage: { uri: 'https://randomuser.me/api/portraits/men/32.jpg' },
    rating: 5,
    sold: '240',
    email: 'john.doe@example.com',
  },
  {
    id: '2',
    name: 'Jane Smith',
    profileImage: { uri: 'https://randomuser.me/api/portraits/women/44.jpg' },
    rating: 5,
    sold: '241',
    email: 'jane.smith@example.com',
  },
  {
    id: '3',
    name: 'Sam Wilson',
    profileImage: { uri: 'https://tse4.mm.bing.net/th/id/OIP.LijvvnDN918zAaWWjuaBQQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3' },
    rating: 5,
    sold: '241',
    email: 'jane.smith@example.com',
  },
  {
    id: '4',
    name: 'Harry Perks',
    profileImage: { uri: 'https://tse3.mm.bing.net/th/id/OIP.nT0M_0X8Di_pb4r9GSxHKwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3' },
    rating: 5,
    sold: '241',
    email: 'jane.smith@example.com',
  },
  {
    id: '5',
    name: 'Kyle Ster',
    profileImage: { uri: 'https://th.bing.com/th/id/OIP.Xdm3uO9FIN2W1RNmij8Z2QHaE8?w=281&h=188&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
    rating: 5,
    sold: '241',
    email: 'jane.smith@example.com',
  },
  {
    id: '6',
    name: 'Emily Hood',
    profileImage: { uri: 'https://th.bing.com/th/id/OIP.kEpoF8VB5cKSE3xR-hMPegHaE8?w=244&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
    rating: 5,
    sold: '241',
    email: 'jane.smith@example.com',
  },
  // Add more agents as needed
];

export default function TopAgentsScreen() {
  const router = useRouter();

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        console.log("Navigating with agent:", item);
        router.push({
          pathname: '/agentProfile',
          params: {
            agent: JSON.stringify(item),
            rank: (index + 1).toString(),
          },
        });
      }}
    >
      <View style={styles.numberBadge}>
        <Text style={styles.numberText}>#{index + 1}</Text>
      </View>
      <Image source={item.profileImage} style={styles.profileImage} />
      <Text style={styles.agentName}>{item.name}</Text>
      <View style={styles.infoRow}>
        <View style={styles.rating}>
          <FontAwesome5 name="star" size={16} color="#f4d03f" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
        <View style={styles.soldInfo}>
          <FontAwesome5 name="house-user" size={16} color="#777" />
          <Text style={styles.soldText}>{item.sold}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headingRow}>
        <Text style={styles.sectionTitle}>Top Estate Agents</Text>
      </View>
      <Text style={{ marginBottom: 16 }}>Find the best recommendations on places to live</Text>

      <FlatList
        data={agents}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    marginTop:25
  },
  headingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
  },
  listContent: {
    paddingBottom: 40,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 8,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    position: 'relative',
  },
  numberBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    zIndex: 10,
  },
  numberText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 30,
    marginBottom: 12,
  },
  agentName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    textAlign: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    gap: 8,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '600',
  },
  soldInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  soldText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#777',
  },
});




