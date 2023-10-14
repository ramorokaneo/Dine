import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const ConfirmationScreen = ({ route }) => {
  const { reservationData } = route.params;
  const navigation = useNavigation(); // Initialize navigation

  // Handle confirmation action
  const confirmReservation = () => {
    // You can pass the data as a parameter to UserProfileScreen
    writeData()
    navigation.navigate('UserProfile', { reservationData });
  };

  const writeData = ()=> {

  }
  return (
    <View>
      <Text>Reservation Confirmation</Text>
      <Image source={reservationData.restaurant.image} style={{ width: 200, height: 200 }} />
      <Text>Restaurant: {reservationData.restaurant.name}</Text>
      <Text>Name: {reservationData.name}</Text>
      <Text>Number of Guests: {reservationData.guests}</Text>
      <Text>Date: {reservationData.date.toDateString()}</Text>
      <Text>Time: {reservationData.time.toLocaleTimeString()}</Text>
      <Text>Confirmation Message: Your reservation has been confirmed!</Text>
      <Button title="Confirm Reservation" onPress={confirmReservation} />
    </View>
  );
};

export default ConfirmationScreen;
