import { useLocalSearchParams, useRouter } from "expo-router";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function OTPVerificationScreen() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(60); // Countdown timer for OTP expiration
  const [timerActive, setTimerActive] = useState(true);
  const { email } = useLocalSearchParams(); // GET EMAIL PARAM
  const router = useRouter();

  useEffect(() => {
    if (timerActive && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval); // Cleanup interval on unmount
    } else {
      setTimerActive(false); // Stop the timer when it reaches 0
    }
  }, [timer, timerActive]);

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  const handleVerifyOtp = () => {
    const enteredOtp = otp.join(""); // Combine the OTP fields
    if (enteredOtp === "1234") {
      // Simulate OTP check (replace with actual verification)
      alert("OTP Verified!"); // Navigate to the next screen or success message
      // Navigate to the next screen after OTP verification
      router.replace("./loginForm");
      //   navigation.push("HomeScreen"); // or wherever you want to go
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleResendOtp = () => {
    setTimer(60); // Reset timer
    setTimerActive(true); // Start the timer again
    alert("OTP has been resent to your email."); // Simulate resending OTP
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Code</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Enter the 4-digit code sent to the{" "}
        <Text style={styles.email}>{email}</Text> {/* SHOW EMAIL */}
      </Text>

      {/* OTP Input Fields */}
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleOtpChange(text, index)}
          />
        ))}
      </View>

      {/* Timer */}
      <Text style={styles.timer}>
        {timerActive
          ? `Time left: ${timer}s`
          : "Time expired. Please resend the OTP."}
      </Text>

      {/* Resend OTP Link */}
      {timer === 0 && (
        <TouchableOpacity onPress={handleResendOtp}>
          <Text style={styles.resendText}>Didn't receive the OTP? Resend</Text>
        </TouchableOpacity>
      )}

      {/* Verify Button */}
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyOtp}>
        <Text style={styles.verifyButtonText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "flex-start", // Align left
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#888",
    marginBottom: 30,
    textAlign: "center",
  },
  email: {
    fontWeight: "bold",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    textAlign: "center",
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  timer: {
    fontSize: 14,
    color: "#888",
    marginBottom: 20,
  },
  resendText: {
    color: "#1E90FF",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  verifyButton: {
    backgroundColor: "#1E90FF",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: "center",
  },
  verifyButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
