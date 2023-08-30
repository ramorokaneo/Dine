import React from 'react';
import { TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

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
      <ImageBackground
        source={require('../../assets/Images/theeats.png')}
        style={styles.background}
      />
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
