import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useRouter } from "expo-router";

export default function SignUpForm() {
  const router = useRouter({});
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }
    router.push({
      pathname: "./otpScreen",
      params: { email },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create Your Account</Text>
      <Text style={styles.subheading}>
        Please fill in the details below to get started
      </Text>

      {/* Full Name Input */}
      <View style={styles.inputContainer}>
        <FontAwesome5 name="user" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
          placeholderTextColor="gray"
        />
      </View>

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
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="gray"
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <FontAwesome5 name="lock" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          placeholderTextColor="gray"
        />
      </View>

      {/* Terms of Service */}
      <View style={styles.termsRow}>
        <TouchableOpacity>
          <Text style={styles.termsText}>Terms of Service</Text>
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

      {/* Sign Up Button */}
      <Button title="Register" onPress={handleSignUp} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subheading: {
    fontSize: 16,
    color: "#888",
    marginBottom: 30,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  icon: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  showPasswordButton: {
    // paddingRight: 15,
  },
  showPasswordText: {
    fontSize: 14,
    color: "#4267B2",
    textAlign: "center",
  },
  termsRow: {
    marginVertical: 15,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  termsText: {
    fontSize: 14,
    color: "#4267B2",
    textAlign: "center",
  },
});
