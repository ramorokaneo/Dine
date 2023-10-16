import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

const initialRestaurants = [
  {
    id: 1,
    name: 'The Flavourful Feast',
    image: require('../Components/AppImages/FlavourFeast.jpg'),
    address: '123 Vine Street, Parktown',
    description: 'Experience a world of flavors in every bite at The Flavourful Feast.',
    phoneNumber: '123-456-7890',
    website: 'www.flavourfulfeast.com',
    email: 'info@flavourfulfeast.com',
  },
  {
    id: 2,
    name: 'The Gourmet Galley',
    image: require('../Components/AppImages/GourmetGalley.jpg'),
    address: '321 Maze Street, Hydepark',
    description: 'Indulge in gourmet delights by the sea at The Gourmet Galley.',
    phoneNumber: '234-567-8901',
    website: 'www.gourmetgalley.net',
    email: 'contact@gourmetgalley.net',
  },
  {
    id: 3,
    name: 'Culinary Cove',
    image: require('../Components/AppImages/CulinaryCove.jpg'),
    address: '456 Salomne Street, Rosebank',
    description: 'A hidden gem for food enthusiasts, Culinary Cove offers culinary delights in a tranquil setting.',
    phoneNumber: '345-678-9012',
    website: 'www.culinarycove.org',
    email: 'info@culinarycove.org',
  },
  {
    id: 4,
    name: 'The Epicurean Emporium',
    image: require('../Components/AppImages/EpicureanEporium.jpg'),
    address: '654 Jan Smuts Street, Milpark',
    description: 'Elevate your taste buds with the exquisite offerings at The Epicurean Emporium.',
    phoneNumber: '456-789-0123',
    website: 'www.epicureanemporium.com',
    email: 'contact@epicureanemporium.com',
  },
  {
    id: 5,
    name: 'The Savory Sanctuary',
    image: require('../Components/AppImages/SovarySanctuary.jpg'),
    address: '789 Court yard Street, Aucklandpark',
    description: 'Find solace in the flavors of The Savory Sanctuary, where each dish is a culinary masterpiece.',
    phoneNumber: '567-890-1234',
    website: 'www.savorysanctuary.co.za',
    email: 'info@savorysanctuary.co.za',
  },
  {
    id: 6,
    name: 'The Delectable Den',
    image: require('../Components/AppImages/DelectableDen.jpg'),
    address: '987 Plain Street, Parkview',
    description: 'Step into The Delectable Den and savor the art of fine dining in a cozy den-like ambiance.',
    phoneNumber: '678-901-2345',
    website: 'www.delectabledendining.com',
    email: 'reservations@delectabledendining.com',
  },
  {
    id: 7,
    name: 'The Gastronomic Grove',
    image: require('../Components/AppImages/GastronomicGrove.jpg'),
    address: '963 Oak Street, Melrose',
    description: 'Embark on a gastronomic journey through the lush and exquisite offerings of The Gastronomic Grove.',
    phoneNumber: '789-012-3456',
    website: 'www.gastronomicgrove.co.za',
    email: 'info@gastronomicgrove.co.za',
  },
  {
    id: 8,
    name: 'The Culinary Cottage',
    image: require('../Components/AppImages/CllinaryCottage.jpg'),
    address: '258 Mitchlle Place Street, Rosebank',
    description: 'Visit The Culinary Cottage for a homely experience with a touch of gourmet sophistication.',
    phoneNumber: '890-123-4567',
    website: 'www.culinary-cottage.com',
    email: 'contact@culinary-cottage.com',
  },
  {
    id: 9,
    name: 'The Bite-Sized Bistro',
    image: require('../Components/AppImages/BitesizeBistro.jpg'),
    address: '147 Natures Avenue, Dunkeld',
    description: 'Satisfy your cravings with small but mighty flavors at The Bite-Sized Bistro.',
    phoneNumber: '901-234-5678',
    website: 'www.bitesizebistro.com',
    email: 'info@bitesizebistro.com',
  },
  {
    id: 10,
    name: 'The Mouthwatering Mezzanine',
    image: require('../Components/AppImages/Mouthwatering.jpg'),
    address: '852 North Street, Sandton',
    description: 'Elevate your dining experience to new heights at The Mouthwatering Mezzanine.',
    phoneNumber: '012-345-6789',
    website: 'www.mouthwateringmezzanine.com',
    email: 'reservations@mouthwateringmezzanine.com',
  },
  {
    id: 11,
    name: 'Dine',
    image: require('../Components/AppImages/TheEats.jpg'),
    address: '741 Mountain View Street, RandPark Ridge',
    description: 'At Dine, every dish is a masterpiece, and every meal is a memorable experience.',
    phoneNumber: '123-456-7890',
    website: 'www.dine.com',
    email: 'contact@dine.com',
  },
  {
    id: 12,
    name: 'Taste',
    image: require('../Components/AppImages/Taste.jpg'),
    address: '028 Chris Street, Lynden',
    description: 'Discover the true essence of taste at Taste, where each bite tells a unique story.',
    phoneNumber: '234-567-8901',
    website: 'www.taste.net',
    email: 'info@taste.net',
  },
];

const AdminScreen = ({ route }) => {
  const [restaurants, setRestaurants] = useState(initialRestaurants);
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantId, setRestaurantId] = useState('');
  const [restaurantImage, setRestaurantImage] = useState('');
  const [restaurantAddress, setRestaurantAddress] = useState('');
  const [restaurantDescription, setRestaurantDescription] = useState('');
  const [restaurantphoneNumber, setRestaurantPhoneNumber] = useState('');
  const [restaurantWebsite, setRestaurantWebsite] = useState('');
  const [restaurantEmail, setRestaurantEmail] = useState('');

  const addRestaurant = () => {
    if (restaurantName.trim() === '') {
      return;
    }
    
    const newRestaurant = {
      id: restaurantId,
      name: restaurantName,
      image: restaurantImage,
      address: restaurantAddress,
      description: restaurantDescription,
      phoneNumber: restaurantPhoneNumber,
      website: restaurantWebsite,
      email: restaurantEmail,

    };
    
    setRestaurants((prevRestaurants) => [...prevRestaurants, newRestaurant]);
    setRestaurantId('');
    setRestaurantName('');
    setRestaurantImage('');
    setRestaurantAddress('');
    setRestaurantDescription('');
    setRestaurantPhoneNumber('');
    setRestaurantWebsite('');
    setRestaurantEmail('');
  };

  const handleEditRestaurant = (restaurantId) => {
    // Implement the edit logic here
  };
  
  const handleDeleteRestaurant = (restaurantId) => {
    // Implement the delete logic here
  };
  
  const handleViewBookings = (restaurantId) => {
    // Implement the view bookings logic here
  };
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Restaurant Listing Management</Text>
      <FlatList
        data={restaurants}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => (
          <View style={styles.restaurantItem}>
            {item.image ? (
              <Image source={item.image} style={styles.restaurantImage} />
            ) : (
              <View style={styles.imagePlaceholder} />
            )}
            <Text>{item.name}</Text>
            <Text>{item.address}</Text>
            <Text>{item.description}</Text>
            <Text>{item.phoneNumber}</Text>
            <Text>{item.website}</Text>
            <Text>{item.email}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.editButton]}
                onPress={() => handleEditRestaurant(item.id)}
              >
                <Text style={styles.buttonText}></Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.viewButton]}
                onPress={() => handleViewBookings(item.id)}
              >
                <Text style={styles.buttonText}>View Bookings</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <Text style={styles.title}>Add a new Restaurant</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter restaurant ID"
        value={restaurantId}
        onChangeText={(text) => setRestaurantId(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter restaurant name"
        value={restaurantName}
        onChangeText={(text) => setRestaurantName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter restaurant image path"
        value={restaurantImage}
        onChangeText={(text) => setRestaurantImage(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter restaurant address"
        value={restaurantAddress}
        onChangeText={(text) => setRestaurantAddress(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter restaurant description"
        value={restaurantDescription}
        onChangeText={(text) => setRestaurantDescription(text)}
      />
        <TouchableOpacity
        style={[styles.button, styles.addButton]}
        onPress={addRestaurant}
      >
        <Text style={styles.buttonText}>Add Restaurant</Text>
      </TouchableOpacity>
    </ScrollView>
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
  restaurantItem: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  restaurantImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: 'lightgray',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  button: {
    flex: 1,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  editButton: {
    backgroundColor: 'black',
  },
  viewButton: {
    backgroundColor: 'black',
  },
  addButton: {
    backgroundColor: 'black', // Match the button color
  },
  buttonText: {
    color: 'white',
  },
  thickBorder: {
    borderWidth: 2, // Add a 2-pixel border
    borderColor: 'gray', // Border color
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
  },
});

export default AdminScreen;




