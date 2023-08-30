import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';

const Reservation = ({ navigation, route }) => {
  const { restaurantImage, restaurantName } = route.params;
  const [selectedDate, setSelectedDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');

  const handleSubmit = () => {
    // Handle reservation submission here
    navigation.navigate('Confirmation', {
      restaurantImage,
      restaurantName,
      date: selectedDate,
      time,
      guests,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Make A Reservation</Text>
      <Image source={restaurantImage} style={styles.restaurantImage} resizeMode="cover" />
      <Text style={styles.restaurantName}>{restaurantName}</Text>
      <Text style={styles.label}>Select Date:</Text>
      <DatePicker
        style={styles.datePicker}
        date={selectedDate}
        mode="date"
        placeholder="Select date"
        format="YYYY-MM-DD"
        minDate={new Date()}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateInput: styles.dateInput,
        }}
        onDateChange={(date) => setSelectedDate(date)}
      />
      <TextInput
        style={styles.input}
        placeholder="Time"
        value={time}
        onChangeText={setTime}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Guests"
        value={guests}
        onChangeText={setGuests}
      />
      <Button title="Submit Reservation" onPress={handleSubmit} />
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
  restaurantImage: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  datePicker: {
    width: '100%',
    marginBottom: 10,
  },
  dateInput: {
    borderWidth: 0,
    borderBottomWidth: 1,
    alignItems: 'flex-start',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default Reservation;
