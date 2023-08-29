import React from 'react';
import { View, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const Landing = ({ navigation }) => {
  const handleTouch = () => {
    // Navigate to the Login screen
    navigation.navigate('Home');
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={handleTouch}
    >
      <ImageBackground source={require('../Restaurant/Images/Grey & Green Elegant Minimal Good Taste Food Restaurant Logo.png')} style={styles.background}>
        {/* No need to render any content here */}
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Landing;
