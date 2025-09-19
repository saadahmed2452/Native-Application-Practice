import { useRouter } from 'expo-router';
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SaleCard({ image, isFavorite = true, onPress, headline }) {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <ImageBackground
        source={image}
        style={styles.container}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.overlay} />

        {/* Favorite Icon */}
        {isFavorite && (
          <View style={styles.favoriteIcon}>
            <Icon name="heart" size={20} color="gray" />
          </View>
        )}

        <View style={styles.content}>
          <View>
            <Text style={styles.title}>{headline}</Text>
            <Text style={styles.title}>Mega Sale!</Text>
            <Text style={styles.subtitle}>
              All discounts up to <Text style={styles.highlight}>60%</Text>
            </Text>
          </View>

          <TouchableOpacity
            style={styles.arrowBtn}
            // If you want the arrow to navigate too, add router.push here.
          >
            <Icon name="arrow-forward-circle" size={34} color="#fff" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    width: 340,
    height: 180,
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: 'hidden',
    marginVertical: 10,
    backgroundColor: '#000',
    marginTop:15,
  },
  imageStyle: {
    image: {
  width: "100%",
  height: 150,
  borderRadius: 10,
  resizeMode: "cover", // ensures proper scaling
}
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  favoriteIcon: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 20,
    padding: 6,
    zIndex: 10,
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#ddd',
    marginTop: 8,
    fontSize: 14,
  },
  highlight: {
    color: '#ffd700',
    fontWeight: '700',
  },
  arrowBtn: {
    alignSelf: 'flex-end',
    marginTop: 12,
  },
});
