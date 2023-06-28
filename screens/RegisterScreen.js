import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';

const RegisterScreen = ( {navigation} ) => {
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleRegisterPress = () => {
    navigation.navigate('RegisterScreen');
  };

  return(
    <View style={styles.container}>
    <Text style={styles.title}>Create new account</Text>
      <TouchableOpacity style={styles.Textbox}>
        <Text style={styles.TextboxText}>Full name</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Textbox}>
        <Text style={styles.TextboxText}>Phone number</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Textbox}>
        <Text style={styles.TextboxText}>Email adress</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Textbox}>
        <Text style={styles.TextboxText}>Password</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonfb}
      >
        <Text style={styles.buttonfbText}>Sign In</Text>
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
  title: {
    fontSize: 24,
    color: '#5EA33A',
    textAlign: 'left',
    alignSelf: 'flex-start', 
    marginBottom: 110, 
  },
  Textbox: {
    width: 330,
    height: 45,
    borderRadius: 30,
    justifyContent: 'center',
    borderColor: '#989898', 
    borderWidth: 1, 
    marginBottom: 10,
  },
  TextboxText : {
    textAlign: 'left',
    color: 	"#989898",
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
  buttonfb: {
    width: 280,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center',
    backgroundColor: '#3b5998',
    marginBottom: 200,
    marginTop: 20,
  },
  buttonfbText: {
    textAlign: 'center',
    color: 'white', 
  },
});

export default RegisterScreen;
