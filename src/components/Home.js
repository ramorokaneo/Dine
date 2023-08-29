import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import Restaurants from './RestaurantList';


const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Restaurants</Text>
      <ScrollView style={styles.scrollView}>
        {Restaurants.map((restaurant) => (
          <TouchableOpacity
            key={restaurant.id}
            style={styles.restaurantCard}
            onPress={() => navigation.navigate('Reservation')}
          >
            <Image source={restaurant.image} style={styles.restaurantImage} />
            <Text style={styles.restaurantName}>{restaurant.name}</Text>
            <Text style={styles.description}>{restaurant.description}</Text>
            <View style={styles.buttonContainer}>
  <TouchableOpacity
    style={styles.button}
    onPress={() => navigation.navigate('Detail')}
  >
    <Text style={styles.buttonText}>View Details</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={[styles.button, styles.bookButton]}
    onPress={() => navigation.navigate('Reservation')}
  >
    <Text style={styles.buttonText}>Book</Text>
  </TouchableOpacity>
</View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  restaurantCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  restaurantImage: {
    width: '100%',
    height: 200,
    marginBottom: 8,
    borderRadius: 8,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    marginBottom: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    backgroundColor: 'blue',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  bookButton: {
    marginLeft: 8,
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;