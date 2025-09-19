// import { View, Text, ImageBackground, Button, StyleSheet, Image, Pressable, TouchableOpacity } from "react-native";

// const index = () => {
//   return (
//     <>
//       <View style={styles.container}>
//         <ImageBackground
//           source={{
//             uri: "https://tse4.mm.bing.net/th/id/OIP.4cSV0znuJUhf4D0ZMfiNOQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
//           }}
//           style={styles.BgImage}
//         >
//           <Image source={{uri: "https://th.bing.com/th/id/OIP.9jkzoUUjViaPUzYMODVO0AAAAA?w=214&h=214&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"}} style={{width: 100, height:100, borderRadius:20 , marginBottom: 10}}/>
//           <Text style={styles.text}>Rise</Text>
//           <Text style={styles.text}>Real Estate</Text>
//           <TouchableOpacity title="Lets Start" onPress={() => alert("Button pressed!")} style={styles.button}>Lets Start</TouchableOpacity>

//         </ImageBackground>
//       </View>
//     </>
//   );
// };

// export default index;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   BgImage: {
//     display: "flex",
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     width: "100%",
//     height: "100%",
//   },
//   text: {
//     fontSize: 30,
//     color: "white",
//     marginBottom: 10,
//   },
//   button:{
//     marginTop:400,
//     backgroundColor:'white'

//   }
// });

import { useRouter } from "expo-router";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const Index = ({ navigation }) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://tse4.mm.bing.net/th/id/OIP.4cSV0znuJUhf4D0ZMfiNOQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        }}
        style={styles.BgImage}
        resizeMode="cover"
      >
        <Image
          source={{
            uri: "https://th.bing.com/th/id/OIP.9jkzoUUjViaPUzYMODVO0AAAAA?w=214&h=214&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
          }}
          style={styles.logo}
        />
        <Text style={styles.text}>Rise</Text>
        <Text style={styles.text}>Real Estate</Text>

        {/* Bottom Section */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            onPress={() => router.replace("/(onBoarding)")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Let's Start</Text>
          </TouchableOpacity>
          <Text style={styles.footerText}>Made with ❤️ — v1.0</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  BgImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 30,
    color: "white",
    marginBottom: 10,
    fontWeight: "bold",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#ffffffcc",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    elevation: 5, // For shadow on Android
    shadowColor: "#000", // For shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  footerText: {
    marginTop: 10,
    fontSize: 14,
    color: "#eee",
    fontStyle: "italic",
  },
});
