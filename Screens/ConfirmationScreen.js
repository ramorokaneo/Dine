import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ConfirmationScreen = ({ route }) => {
  const { reservationData } = route.params || {}; // Use a default empty object if route.params is undefined
  const navigation = useNavigation();

  // Handle confirmation action
  const confirmReservation = () => {
    if (reservationData) {
      // You can pass the data as a parameter to UserProfileScreen
      writeData();
      navigation.navigate('UserProfile', { reservationData });

      navigation.navigate('Admin', { reservationData });
    }
  };

  const writeData = () => {
    // Implement any data writing logic if needed.
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Reservation Confirmation</Text>
      {reservationData && (
        <View>
          <Image source={reservationData.restaurant.image} style={styles.image} />
          <Text>Restaurant: {reservationData.restaurant.name}</Text>
          <Text>Name: {reservationData.name}</Text>
          <Text>Number of Guests: {reservationData.guests}</Text>
          <Text>Date: {reservationData.date.toDateString()}</Text>
          <Text>Time: {reservationData.time.toLocaleTimeString()}</Text>
          <Text style={styles.confirmationMessage}>Confirmation Message: Your reservation has been confirmed!</Text>
          <TouchableOpacity>
          <Button
            title="Confirm Reservation"
            onPress={confirmReservation}
            color="black"
          />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    margin: 16,
    elevation: 5, // For Android
    shadowColor: 'black', // For iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  confirmationMessage: {
    marginTop: 16,
    marginBottom: 16,
  },
});

export default ConfirmationScreen;
