import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../Components/AppImages/d79bca0c35bc4accadbf3099be2d6cc6.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Welcome to the Eats</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('LoginScreen')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Make a Reservation</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 12,
    padding: 10,
  },
  buttonText: {
    color: 'white', // Text color
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});

export default HomeScreen;
