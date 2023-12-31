import React, {useState} from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';

const LoginScreen = ( {navigation} ) => {
  const handleLoginPress = () => {
    navigation.navigate('Home');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  return(
    <View style={styles.container}>
    <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.Textbox}
        value={email}
        onChangeText={handleEmailChange}
        placeholder="Email or phone number"
      />
      <TextInput
        style={styles.Textbox}
        value={password}
        onChangeText={handlePasswordChange}
        placeholder="Password"
      />
      
      <TouchableOpacity
        style={styles.buttonlogin}
        onPress={handleLoginPress}
      >
        <Text style={styles.buttonloginText}>Log In</Text>
      </TouchableOpacity>
    <Text>OR</Text>
      <TouchableOpacity
        style={styles.buttonfb}
      >
        <Text style={styles.buttonfbText}>Facebook Login</Text>
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
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    borderColor: '#989898', 
    borderWidth: 1, 
    marginBottom: 40,
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
    height: 50,
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

export default LoginScreen;
