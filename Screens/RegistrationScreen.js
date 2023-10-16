import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Alert, Image, ScrollView } from 'react-native';
import { firebase } from '../config';

const RegistrationScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleRegistration = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#%^&*()_+])[A-Za-z\d!@#%^&*()_+]{8,}$/;
    if (!passwordRegex.test(password)) {
      Alert.alert(
        'Error',
        'Password must be at least 8 characters and include an uppercase letter, a number, and a special character (!@#%^&*()_+).'
      );
      return;
    }

    // You can capture name, surname, and phone number here
    const userData = {
      name,
      surname,
      phoneNumber,
    };

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      await firebase.auth().currentUser.sendEmailVerification({
        handleCodeInApp: true,
        url: 'https://the-app-7f567.firebaseapp.com', // Replace with your verification URL
      });
      alert('Verification email sent');

      // Store additional user data (name, surname, phone number) in your database
      await firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set(userData);

      // After successful registration, navigate to the Login screen or any other screen you want
      navigation.navigate('Login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
      <View style={styles.centerImageContainer}>
      <Image
        source={require('../Components/AppImages/d79bca0c35bc4accadbf3099be2d6cc6.png')} // Update with the correct image path
        style={styles.image}
      />
      </View>
        <Text style={styles.heading}>Registration</Text>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Surname"
          value={surname}
          onChangeText={(text) => setSurname(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          style={styles.input}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity style={styles.registerButton} onPress={handleRegistration}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
  <Text style={styles.loginLink}>Already have an account? Log in here</Text>
</TouchableOpacity>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  centerImageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 200, // Adjust the image size as needed
    height: 200, // Adjust the image size as needed
    marginBottom: 20,
  },
  card: {
    width: '90%', // Adjust the card width as needed
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
  },
  registerButton: {
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  loginLink: {
    marginTop: 16,
    color: 'blue',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default RegistrationScreen;
