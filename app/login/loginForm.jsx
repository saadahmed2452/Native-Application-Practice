import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // const handleLogin = () => {
  //   if (email && password) {
  //     Alert.alert("Login Success", `Welcome back, ${email}`);
  //     router.push("../(tabs)");
  //   } else {
  //     Alert.alert("Error", "Please enter both email and password");
  //   }
  // };

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email Required"),
    password: Yup.string().min(6, "Too Short").required("Password is required"),
  });

  return (
    <View style={styles.container}>
      {/* Top Image Cover */}
      <View style={styles.imageCover}>
        <Image
          source={{
            uri: "https://www.creativefabrica.com/wp-content/uploads/2020/03/14/Vector-Background-building-of-city-tower-Graphics-3644714-1.jpg",
          }} // Replace with your own image URL
          style={styles.backgroundImage}
        />
      </View>

      <Text style={styles.heading}>Let's Sign In</Text>
      <Text style={styles.subtitle}>Enter your details to continue</Text>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log("Form values:", values);
          Alert.alert("Login Success", `Welcome back, ${values.email}`);
          router.push("../(tabs)");
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            {/* Email Input */}
            <View style={styles.inputContainer}>
              <FontAwesome5
                name="envelope"
                size={20}
                color="gray"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                keyboardType="email-address"
                placeholderTextColor="gray"
                autoCapitalize="none"
              />
            </View>
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}

            {/* Password Input */}
            <View style={styles.inputContainer}>
              <FontAwesome5
                name="lock"
                size={20}
                color="gray"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                secureTextEntry={!showPassword}
                placeholderTextColor="gray"
              />
            </View>
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            {/* Submit Button */}
            <Pressable onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
          </>
        )}
      </Formik>

      {/* Forgot Password Link */}
      <View style={styles.forshow}>
        <TouchableOpacity
          onPress={() =>
            Alert.alert("Reset Password", "Link to reset password")
          }
        >
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
        <Pressable
          onPress={() => setShowPassword(!showPassword)}
          style={styles.showPasswordButton}
        >
          <Text style={styles.showPasswordText}>
            {showPassword ? "Hide Password" : "Show Password"}
          </Text>
        </Pressable>
      </View>

      {/* Login Button */}
      <View style={styles.bottom}>
        <Text style={styles.orText}>─────────────── or ───────────────</Text>

        {/* Social Buttons */}
        <View style={styles.socialRow}>
          <TouchableOpacity
            style={[styles.socialBtn, { backgroundColor: "#DB4437" }]}
          >
            <FontAwesome5 name="google" size={24} color="#fff" />
            {/* <Text style={styles.socialText}>Google</Text> */}
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.socialBtn, { backgroundColor: "#4267B2" }]}
          >
            <FontAwesome5 name="facebook" size={24} color="#fff" />

            {/* <Text style={styles.socialText}>Facebook</Text> */}
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer with Register Link */}
      <View style={styles.footerRow}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => router.replace("/login/signUpForm")}>
          <Text style={[styles.footerText, { color: "#4267B2" }]}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  imageCover: {
    height: "25%", // Top 1/4 of the screen
    width: "100%",
    marginBottom: 20,
    marginTop: 20,
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
    resizeMode: "cover",
  },
  heading: { fontSize: 24, fontWeight: "bold", marginVertical: 20 },
  subtitle: { fontSize: 16, color: "#888", marginBottom: 30 },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    width: "100%",
    borderColor: "gray",
  },
  icon: {
    marginLeft: 15,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 0,
  },
  forshow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "98%",
  },
  showPasswordButton: {
    paddingRight: 0,
  },
  showPasswordText: {
    fontSize: 14,
    color: "#4267B2",
    marginBottom: 20,
  },
  forgotText: { fontSize: 14, color: "#4267B2", marginBottom: 20 },
  bottom: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#1E90FF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16 },
  orText: { marginVertical: 10, marginLeft: 15, color: "#888" },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-center",
    width: "100%",
    gap: 4,
    marginLeft: 16,
  },
  socialBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 70,
    borderRadius: 30,
  },
  socialText: { color: "#fff", fontSize: 16, marginLeft: 8 },
  footerRow: { flexDirection: "row", marginTop: 20, justifyContent: "center" },
  footerText: { fontSize: 14, color: "#444", bottom: 50 },

  error: {
    fontSize: 12,
    color: "red",
  },
});

export default LoginForm;
