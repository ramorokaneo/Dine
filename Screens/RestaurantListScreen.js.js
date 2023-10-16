import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import restaurantImage1 from '../Components/AppImages/FlavourFeast.jpg';
import restaurantImage2 from '../Components/AppImages/GourmetGalley.jpg';
import restaurantImage3 from '../Components/AppImages/CulinaryCove.jpg';
import restaurantImage4 from '../Components/AppImages/EpicureanEporium.jpg';
import restaurantImage5 from '../Components/AppImages/SovarySanctuary.jpg';
import restaurantImage6 from '../Components/AppImages/DelectableDen.jpg';
import restaurantImage7 from '../Components/AppImages/GastronomicGrove.jpg';
import restaurantImage8 from '../Components/AppImages/CllinaryCottage.jpg';
import restaurantImage9 from '../Components/AppImages/BitesizeBistro.jpg';
import restaurantImage10 from '../Components/AppImages/Mouthwatering.jpg';
import restaurantImage11 from '../Components/AppImages/TheEats.jpg';
import restaurantImage12 from '../Components/AppImages/Taste.jpg';

import CustomNavBar from './Additions/CustomNavBar';

const restaurantData = [
  { id: 1, name: 'The Flavourful Feast', image: restaurantImage1, address: '123 Vine Street, Parktown', },
  { id: 2, name: 'The Gourmet Galley', image: restaurantImage2, address: '321 Maze Street, Hydepark', },
  { id: 3, name: 'Culinary Cove', image: restaurantImage3, address: '456 Salomne Street, Rosebank', },
  { id: 4, name: 'The Epicurean Emporium', image: restaurantImage4, address: '654 Jan Smuts Street, Milpark', },
  { id: 5, name: 'The Savory Sanctuary', image: restaurantImage5, address: '789 Court yard Street, Aucklandpark', },
  { id: 6, name: 'The Delectable Den', image: restaurantImage6, address: '987 Plain Street, Parkview', },
  { id: 7, name: 'The Gastronomic Grove', image: restaurantImage7, address: '963 Oak Street, Melrose', },
  { id: 8, name: 'The Culinary Cottage', image: restaurantImage8, address: '258 Mitchlle Place Street, Rosebank', },
  { id: 9, name: 'The Bite-Sized Bistro', image: restaurantImage9, address: '147 Natures Avenue, Dunkeld', },
  { id: 10, name: 'The Mouthwatering Mezzanine', image: restaurantImage10, address: '852 North Street, Sandton', },
  { id: 11, name: 'Dine', image: restaurantImage11, address: '741 Mountain View Street, RandPark Ridge', },
  { id: 12, name: 'Taste', image: restaurantImage12, address: '028 Chris Street, Lynden', },
];

const RestaurantListScreen = ({ navigation }) => {


  return (
    <View>
      <CustomNavBar navigation={navigation} title="Dine" showBackButton={false} />
      <Text style={styles.header}>Restaurant List</Text>
      <FlatList
        data={restaurantData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReservationForm', { restaurant: item })}
          >
            <View style={styles.cardContainer}>
              <Image style={styles.image} source={item.image} />
              <View style={styles.cardContent}>
                <Text style={styles.restaurantName}>{item.name}</Text>
                <Text style={styles.address}>{item.address}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  cardContainer: {
    backgroundColor: 'white',
    elevation: 3, // For Android elevation
    shadowColor: 'black', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderRadius: 8,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 16,
  },
});

export default RestaurantListScreen;