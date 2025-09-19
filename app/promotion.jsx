import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Or FontAwesome etc.
import  SaleCard  from './components/saleCard'; // Assuming you have this component
import { useLocalSearchParams } from 'expo-router';

export default function Promotion () {

  const {headline} = useLocalSearchParams();



  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="cloud-upload-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Sale Card */}
      <SaleCard
        image={{ uri: 'https://tse4.mm.bing.net/th/id/OIP.qgvipURLtVbjej-lfIvXHQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3' }
        
      }
      headline={headline}
      />

      {/* Title */}
      <Text style={styles.title}>Limited time halloween sale is coming back!</Text>

      {/* Calendar & Date */}
      <View style={styles.dateRow}>
        <Icon name="calendar-outline" size={18} color="#555" />
        <Text style={styles.dateText}>Oct 31, 2025</Text>
      </View>

      {/* Coupon Section */}
      <View style={styles.couponContainer}>
        <View style={styles.couponLeft}>
          <Text style={styles.couponLabel}>COUPON</Text>
        </View>
        <View style={styles.couponRight}>
          <Text style={styles.couponCode}>HALLOWEEN40</Text>
          <Text style={styles.couponSubtitle}>Use this to get 40% off on your transaction.</Text>
        </View>
      </View>

      {/* Lorem Ipsum Content */}
      <Text style={styles.loremText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
      </Text>

      {/* Explore More Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Explore More</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  dateText: {
    marginLeft: 8,
    color: '#555',
  },
  couponContainer: {
    flexDirection: 'row',
    backgroundColor: '#e6f7e6',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  couponLeft: {
    backgroundColor: '#b2fab4',
    padding: 8,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  couponLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  couponRight: {
    flex: 1,
  },
  couponCode: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#1b5e20',
  },
  couponSubtitle: {
    fontSize: 12,
    color: '#555',
  },
  loremText: {
    fontSize: 14,
    color: '#444',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4caf50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


