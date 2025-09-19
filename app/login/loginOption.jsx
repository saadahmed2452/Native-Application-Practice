import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Feather,FontAwesome5 } from "@expo/vector-icons";

export default function LoginOption() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.imagesRow}>
        <Image
          source={{ uri: "https://tse1.mm.bing.net/th/id/OIP.kINwqVgvCEYzGUOcI2RKCgHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" }}
          style={styles.imageBox}
        />
        <Image
          source={{ uri: "https://media.istockphoto.com/id/2175973016/photo/modern-luxury-home-exterior-at-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=B2e-gEujpM7UNHX3uMHqvyh_bHC5sHFYfxf0ldEc6R0=" }}
          style={styles.imageBox}
        />
      </View>
      <View style={styles.imagesRow}>
        <Image
          source={{ uri: "https://tse3.mm.bing.net/th/id/OIP.sezhK1qbFEsjF2Jwy8f46AHaE8?r=0&pid=ImgDet&w=178&h=118&c=7&dpr=1.5&o=7&rm=3" }}
          style={styles.imageBox}
        />
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1565402170291-8491f14678db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D" }}
          style={styles.imageBox}
        />
      </View>

      <Text style={styles.heading}>Ready to explore?</Text>

      <TouchableOpacity
        style={styles.emailBtn}
        onPress={() => router.push("/login/loginForm")}
      >
        <Feather
          name="mail"
          size={24}
          color="#fff"
          style={{ marginRight: 10 }}
        />
        <Text style={styles.emailBtnText}>Continue with Email</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>────────── or ──────────</Text>

      <View style={styles.socialRow}>
        <TouchableOpacity
          style={[styles.socialBtn, { backgroundColor: "#DB4437" }]}
        >
          <FontAwesome5 name="google" size={24} color="#fff" />
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.socialBtn, { backgroundColor: "#4267B2" }]}
        >
          <FontAwesome5 name="facebook" size={24} color="#fff" />
          <Text style={styles.socialText}>Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerRow}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/login/signUpForm")}>
          <Text style={[styles.footerText, { color: "#4267B2" }]}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: "center" },
  imagesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    gap:10,
    marginTop:30
  },
  imageBox: { width: 170, height: 170, borderRadius: 10 },
  heading: { fontSize: 24, fontWeight: "bold", marginVertical: 20 },
  emailBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E90FF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 10,
  },
  emailBtnText: { color: "#fff", fontSize: 16 },
  orText: { marginVertical: 10, color: "#888" },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 40,
  },
  socialBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  socialText: { color: "#fff", fontSize: 16, marginLeft: 8 },
  footerRow: { flexDirection: "row", marginTop: 20 },
  footerText: { fontSize: 14, color: "#444" },
});
