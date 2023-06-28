import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';

const LandingScreen = ( {navigation} ) => {
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };

  return(
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/6.png')}
      />
      <Text style={styles.title}>Welcome to our restaurant</Text>
      <Text style={styles.description}>Order food and make reservations with one click</Text>
      <TouchableOpacity
        style={styles.buttonlogin}
        onPress={handleLoginPress}
      >
        <Text style={styles.buttonloginText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonsignup}
        onPress={handleRegisterPress}
      >
        <Text style={styles.buttonsignupText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 120,
    height: 120,
    marginBottom:20,
  },
  title: {
    color: '#5EA33A',
    fontSize: 18,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    padding: 50,
  },
  buttonlogin: {
    width: 280,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#5EA33A",
    justifyContent: 'center',
    marginBottom: 30,
  },
  buttonloginText: {
    textAlign: 'center',
    color: 'white',   
  },
  buttonsignup: {
    width: 280,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    borderColor: '#000', 
    borderWidth: 1, 
  },
  buttonsignupText: {
    textAlign: 'center',
  },
});

export default LandingScreen;
