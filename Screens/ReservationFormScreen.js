import React, { useState } from 'react';
import { View, Text, TextInput, Button, Platform, Image } from 'react-native';
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
    <View>
      <Text>Reservation Form for {restaurant.name}</Text>
      <Image source={restaurant.image} style={{ width: 200, height: 200 }} />
      <Text>Selected Restaurant: {restaurant.name}</Text>
      <TextInput
        placeholder="Your Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <View>
        <Text>Number of Guests:</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Button title="-" onPress={decrementGuests} />
          <Text>{guests}</Text>
          <Button title="+" onPress={incrementGuests} />
        </View>
      </View>
      <Text>Date:</Text>
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
      {date && <Text>Selected Date: {date.toDateString()}</Text>}
      <Text>Time:</Text>
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
      {time && <Text>Selected Time: {time.toLocaleTimeString()}</Text>}
      <Button title="Make Reservation" onPress={handleReservation} />
    </View>
  );
};

export default ReservationFormScreen;
