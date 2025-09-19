import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const { height } = Dimensions.get("window");

export default function TourTemplate({
  title,
  subtitle,
  imageUri,
  nextScreen,
  showBack = false,
}) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Top Row: Logo and Skip */}
      <View style={styles.topRow}>
        <Image
          source={{
            uri: "https://th.bing.com/th/id/OIP.9jkzoUUjViaPUzYMODVO0AAAAA?w=214&h=214&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
          }}
          style={styles.logo}
        />
        <TouchableOpacity onPress={() => router.replace("/login/loginForm")}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Heading and Subheading */}
      <View style={styles.textSection}>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.subheading}>{subtitle}</Text>
      </View>

      {/* Bottom Image with Button */}
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: imageUri }}
          style={styles.bottomImage}
          resizeMode="cover"
        />

        {/* Centered Button */}
        <View style={styles.navRow}>
          {showBack && (
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backButton}
            >
              <Ionicons name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => router.replace(nextScreen)}
            style={styles.nextButton}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", gap: 8 },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 60,
    alignItems: "center",
  },
  logo: { width: 50, height: 50, borderRadius: 8 },
  skip: {
    backgroundColor: "#000000aa",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    color: "white",
  },
  textSection: {
    paddingHorizontal: 20,
    marginTop: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subheading: {
    fontSize: 16,
    color: "#666",
    marginTop: 15,
  },
  imageWrapper: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    padding: 10,
  },
  bottomImage: {
    width: "100%",
    borderRadius: 30,
    height: height * 0.67,
  },
  navRow: {
    position: "absolute",
    bottom: 80, // move up from the image bottom
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  nextButton: {
    backgroundColor: "#ffffffcc",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  nextButtonText: {
    color: "#000",

    fontSize: 16,
    fontWeight: "bold",
  },
  backButton: {
    backgroundColor: "#555",
    padding: 15,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
