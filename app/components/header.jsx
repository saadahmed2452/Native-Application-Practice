import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function Header({
  place = "Karnataka, India",
  onProfilePress,
  onNotifPress,
  onLocationPress,
}) {
  return (
    <View style={styles.row}>
      {/* Left Section: Location */}
      <TouchableOpacity style={styles.left} onPress={onLocationPress}>
        <View style={styles.locationContainer}>
          <Icon name="location-outline" size={20} color="white" />
          <Text style={styles.placeText}>{place}</Text>
          <Icon name="chevron-down-outline" size={18} color="#fff" />
        </View>
      </TouchableOpacity>

      {/* Right Section: Notifications and Profile */}
      <View style={styles.right}>
        <TouchableOpacity onPress={onNotifPress}>
          <Icon
            name="notifications-outline"
            size={24}
            style={styles.iconGap}
            color="#000"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onProfilePress}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg",
            }}
            style={styles.profile}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black", // Light gray background
    borderRadius: 50,
    paddingHorizontal: 12,
    color: "white",
    paddingVertical: 8,
  },
  placeText: {
    marginHorizontal: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "white", // Dark text color
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconGap: {
    marginRight: 16,
  },
  profile: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
});
