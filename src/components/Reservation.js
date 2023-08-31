import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

const Reservation = ({ navigation, route }) => {
  const { restaurantImage, restaurantName } = route.params;
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [specialRequest, setSpecialRequest] = useState('');


  const handleSubmit = () => {
    navigation.navigate('Confirmation', { restaurantImage, restaurantName, date, time, guests, specialRequest });
  };

  const formatDate = (inputDate) => {
    const parts = inputDate.split('/');
    if (parts.length === 3) {
      const [year, month, day] = parts;
      return `${year}/${month.padStart(2, '0')}/${day.padStart(2, '0')}`;
    }
    return inputDate;
  };

  const formatTime = (inputTime) => {
    const parts = inputTime.split('/');
    if (parts.length === 2) {
      const [hour, minutes] = parts;
      return `${hour.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
    }
    return inputTime;
  };

  const decreaseGuests = () => {
    if (guests > 1) {
      setGuests(guests - 1);
    }
  };

  const increaseGuests = () => {
    setGuests(guests + 1);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Text style={styles.header}>Make a Reservation at {restaurantName}</Text>
        <Image source={restaurantImage} style={styles.image} resizeMode="cover" />
        <TextInput
          style={styles.input}
          placeholder="YYYY/MM/DD"
          value={date}
          onChangeText={(text) => setDate(formatDate(text))}
        />
        <TextInput
          style={styles.input}
          placeholder="Hour/Minutes"
          value={time}
          onChangeText={(text) => setTime(formatTime(text))}
        />
        <View style={styles.guestsContainer}>
          <Text style={styles.guestsLabel}>Number of Guests:</Text>
          <TouchableOpacity onPress={decreaseGuests} style={styles.guestsButton}>
            <Text style={styles.guestsButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.guestsCount}>{guests}</Text>
          <TouchableOpacity onPress={increaseGuests} style={styles.guestsButton}>
            <Text style={styles.guestsButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Special Requests"
          multiline
          value={specialRequest}
          onChangeText={setSpecialRequest}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit Reservation</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    width: '80%',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  guestsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  guestsLabel: {
    marginRight: 10,
  },
  guestsButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  guestsButtonText: {
    fontSize: 20,
  },
  guestsCount: {
    paddingHorizontal: 20,
    fontSize: 18,
  },
  specialRequestLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  specialRequestInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    minHeight: 100,
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Reservation;
