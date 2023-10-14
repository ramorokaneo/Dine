import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to the Restaurant Reservation App</Text>
      <Button
        title="View Restaurants"
        onPress={() => navigation.navigate('LoginScreen')}
      />
    </View>
  );
}

export default HomeScreen;
