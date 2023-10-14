import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomNavBar = ({ navigation, title, showBackButton }) => {
  return (
    <View style={styles.navBar}>
      {showBackButton && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.navList}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navItem}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RestaurantList')}>
          <Text style={styles.navItem}>Reservation</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
          <Text style={styles.navItem}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Takeout')}>
          <Text style={styles.navItem}>Takeout</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Admin')}>
          <Text style={styles.navItem}>Admin</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navItem}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#67C8D5', // Background color of the navigation bar
    padding: 10,
  },
  backButton: {
    color: 'white',
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  navList: {
    flexDirection: 'row',
  },
  navItem: {
    color: 'white',
    fontSize: 16,
    marginHorizontal: 10,
  },
});

export default CustomNavBar;
