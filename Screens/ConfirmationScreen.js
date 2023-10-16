import React from 'react';
import { View, Text, Image, Button } from 'react-native';
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
    <View>
      <Text>Reservation Confirmation</Text>
      {reservationData && (
        <View>
          <Image source={reservationData.restaurant.image} style={{ width: 200, height: 200 }} />
          <Text>Restaurant: {reservationData.restaurant.name}</Text>
          <Text>Name: {reservationData.name}</Text>
          <Text>Number of Guests: {reservationData.guests}</Text>
          <Text>Date: {reservationData.date.toDateString()}</Text>
          <Text>Time: {reservationData.time.toLocaleTimeString()}</Text>
          <Text>Confirmation Message: Your reservation has been confirmed!</Text>
          <Button title="Confirm Reservation" onPress={confirmReservation} />
        </View>
      )}
    </View>
  );
};

export default ConfirmationScreen;

