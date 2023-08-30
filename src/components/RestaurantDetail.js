import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RestaurantDetail = ({ route }) => {
  const { id, name, description, image, price, address, website, phonenumber } = route.params.restaurant;

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.details}>Price Range: {price}</Text>
      <Text style={styles.details}>Address: {address}</Text>
      <Text style={styles.details}>Website: {website}</Text>
      <Text style={styles.details}>Phone: {phonenumber}</Text>
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
});

export default RestaurantDetail;
