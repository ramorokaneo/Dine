import React, { useState } from 'react';
import { View, Text, TextInput, Button, Platform, Image, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
      <Text style={styles.heading}>Reservation Form for {restaurant.name}</Text>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <Text style={styles.text}>Selected Restaurant: {restaurant.name}</Text>
      <br/>
      <br/>
      <TextInput
        style={styles.textInput}
        placeholder="Your Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <View style={styles.guestsSection}>
        <Text style={styles.text}>Number of Guests:</Text>
        <View style={styles.guestsCounter}>
          <Button title="-" onPress={decrementGuests} />
          <Text style={styles.guestsCount}>{guests}</Text>
          <Button title="+" onPress={incrementGuests} />
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
      <Button title="Make Reservation" onPress={handleReservation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
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
});

export default ReservationFormScreen;
