import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, StyleSheet } from 'react-native';

const AdminScreen = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantName, setRestaurantName] = useState('');
  const [bookingStats, setBookingStats] = useState({ weeklyStats: 0, monthlyStats: 0 });

  const addRestaurant = () => {
    if (restaurantName.trim() === '') {
      return;
    }
    const newRestaurant = {
      id: Math.random().toString(),
      name: restaurantName,
    };
    setRestaurants((prevRestaurants) => [...prevRestaurants, newRestaurant]);
    setRestaurantName('');
  };

  const editRestaurant = (restaurantId, updatedDetails) => {
    setRestaurants((prevRestaurants) =>
      prevRestaurants.map((restaurant) =>
        restaurant.id === restaurantId ? { ...restaurant, ...updatedDetails } : restaurant
      )
    );
  };

  const deleteRestaurant = (restaurantId) => {
    setRestaurants((prevRestaurants) => prevRestaurants.filter((restaurant) => restaurant.id !== restaurantId));
  };

  const viewBookings = (restaurantId) => {
    // Implement code to view bookings for the selected restaurant
    // You can navigate to a new screen or show a modal to display bookings.
    // For simplicity, let's just log the selected restaurant's ID for now.
    console.log(`View bookings for restaurant with ID: ${restaurantId}`);
  };

  const generateBookingStatistics = () => {
    // Implement your logic to calculate weeklyStats and monthlyStats here
    // For demonstration purposes, let's set some dummy values.
    const calculatedStats = {
      weeklyStats: 50, // Replace with your calculation
      monthlyStats: 200, // Replace with your calculation
    };
    setBookingStats(calculatedStats);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurant Listing Management</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter restaurant name"
        value={restaurantName}
        onChangeText={(text) => setRestaurantName(text)}
      />
      <Button title="Add Restaurant" onPress={addRestaurant} />
      <FlatList
        data={restaurants}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Button title="Edit" onPress={() => editRestaurant(item.id, { name: 'Updated Name' })} />
            <Button title="Delete" onPress={() => deleteRestaurant(item.id)} />
            <Button title="View Bookings" onPress={() => viewBookings(item.id)} />
          </View>
        )}
      />
      <Text style={styles.title}>Booking Statistics</Text>
      <Button title="Generate Weekly Stats" onPress={generateBookingStatistics} />
      <Button title="Generate Monthly Stats" onPress={generateBookingStatistics} />
      <Text>Weekly Stats: {bookingStats.weeklyStats}</Text>
      <Text>Monthly Stats: {bookingStats.monthlyStats}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default AdminScreen;
