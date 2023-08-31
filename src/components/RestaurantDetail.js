import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const formatCurrency = (amount) => {
  const currencyFormatter = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
  });
  return currencyFormatter.format(amount);
};

const RestaurantDetail = ({ navigation, route }) => { // Added 'navigation' prop
  const { id, name, description, image, price, address, website, phonenumber } = route.params.restaurant;

  const handleWebsitePress = () => {
    if (website) {
      Linking.openURL(website);
    }
  };

  const handlePhoneNumberPress = () => {
    if (phonenumber) {
      Linking.openURL(`tel:${phonenumber}`);
    }
  };

  const handleBookButtonPress = () => {
    navigation.navigate('Reservation', {
      restaurantImage: image,
      restaurantName: name,
      restaurant: route.params.restaurant, // Pass the restaurant object
    });
  };
  
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.details}>Price Range: {formatCurrency(price)}</Text>
      <Text style={styles.details}>Address: {address}</Text>
      <TouchableOpacity onPress={handleWebsitePress}>
        <Text style={styles.link}>Website: {website}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePhoneNumberPress}>
        <Text style={styles.link}>Phone: {phonenumber}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleBookButtonPress} style={styles.bookButton}>
        <Text style={styles.buttonText}>Book Reservation</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    marginBottom: 8,
    textAlign: 'center',
  },
  details: {
    marginBottom: 4,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 8,
  },
  bookButton: {
    backgroundColor: 'green',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RestaurantDetail;
