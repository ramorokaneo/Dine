import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image, StyleSheet, ScrollView, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const ReservationFormScreen = ({ route, navigation }) => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const { restaurant } = route.params;
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const handleReservation = () => {
    if (!name) {
      Alert.alert('Please fill in your name.');
      return;
    }

    if (guests < 1) {
      Alert.alert('Please select at least 1 guest.');
      return;
    }

    if (!date || !time) {
      Alert.alert('Please select a date and time.');
      return;
    }

    const reservationData = {
      name: name,
      guests: guests,
      date: date,
      time: time,
      restaurant: restaurant,
    };
    navigation.navigate('ConfirmationScreen', { reservationData });
  };

  const onDateChange = (event, selectedDate) => {
    setShowDate(Platform.OS === 'ios');
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const onTimeChange = (event, selectedTime) => {
    setShowTime(Platform.OS === 'ios');
    if (selectedTime) {
      setTime(selectedTime);
    }
  };

  const incrementGuests = () => {
    setGuests(guests + 1);
  };

  const decrementGuests = () => {
    if (guests > 1) {
      setGuests(guests - 1);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.heading}>Reservation for {restaurant.name}</Text>
          <Image source={restaurant.image} style={styles.image} />
          <Text style={styles.text}>Restaurant Name: {restaurant.name}</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Your Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <View style={styles.guestsSection}>
            <Text style={styles.text}>Number of Guests:</Text>
            <View style={styles.guestsCounter}>
              <TouchableOpacity
                style={styles.button}
                onPress={decrementGuests}
              >
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.guestsCount}>{guests}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={incrementGuests}
              >
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.text}>Date:</Text>
          <Button title="Select Date" onPress={() => setShowDate(true)} />
          {showDate && (
            <DateTimePicker
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onDateChange}
            />
          )}
          {date && <Text style={styles.text}>Selected Date: {date.toDateString()}</Text>}
          <Text style={styles.text}>Time:</Text>
          <Button title="Select Time" onPress={() => setShowTime(true)} />
          {showTime && (
            <DateTimePicker
              value={time}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={onTimeChange}
            />
          )}
          {time && <Text style={styles.text}>Selected Time: {time.toLocaleTimeString()}</Text>}
          <TouchableOpacity
            style={styles.reservationButton}
            onPress={handleReservation}
          >
            <Text style={styles.buttonText}>Make Reservation</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  card: {
    backgroundColor: 'white',
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderRadius: 10,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  image: {
    width: 350,
    height: 300,
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
  },
  guestsSection: {
    marginBottom: 16,
  },
  guestsCounter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  guestsCount: {
    fontSize: 16,
    marginHorizontal: 8,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  reservationButton: {
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
  },
});

export default ReservationFormScreen;
