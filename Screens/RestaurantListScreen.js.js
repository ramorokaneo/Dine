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
  { id: 1, name: 'The Flavourful Feast', image: restaurantImage1 },
  { id: 2, name: 'The Gourmet Galley', image: restaurantImage2 },
  { id: 3, name: 'Culinary Cove', image: restaurantImage3 },
  { id: 4, name: 'The Epicurean Emporium', image: restaurantImage4 },
  { id: 5, name: 'The Savory Sanctuary', image: restaurantImage5 },
  { id: 6, name: 'The Delectable Den', image: restaurantImage6 },
  { id: 7, name: 'The Gastronomic Grove', image: restaurantImage7 },
  { id: 8, name: 'The Culinary Cottage', image: restaurantImage8 },
  { id: 9, name: 'The Bite-Sized Bistro', image: restaurantImage9 },
  { id: 10, name: 'The Mouthwatering Mezzanine', image: restaurantImage10 },
  { id: 11, name: 'The Eats', image: restaurantImage11 },
  { id: 12, name: 'Taste', image: restaurantImage12 },
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
            <View style={styles.restaurantItem}>
              <Image style={styles.image} source={item.image} />
              <Text style={styles.restaurantName}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  restaurantItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  restaurantName: {
    fontSize: 16,
  },
});

export default RestaurantListScreen;