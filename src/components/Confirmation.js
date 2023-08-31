import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Confirmation = ({ route }) => {
  const { restaurantImage, restaurantName, date, time, guests, specialRequest } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reservation Confirmation</Text>
      <Text>Your reservation has been confirmed!</Text>
       <Text style={styles.header}>{restaurantName}</Text>
      <Image source={restaurantImage} style={styles.image} resizeMode="cover" />
      <Text>Date: {date}</Text>
      <Text>Time: {time}</Text>
      <Text>Guests: {guests}</Text>
      <Text>specialRequest: {specialRequest}</Text>
      <Text>Thank you for choosing us!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    borderRadius: 10,
  },
});

export default Confirmation;
