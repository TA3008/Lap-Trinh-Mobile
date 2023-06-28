import React, { useState } from 'react';
import {
  SafeAreaView, StyleSheet, View, Text, Button, Image
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const OnBoardingScreen = ({ navigation }) => {
    const [completedIntro, setCompletedIntro] = useState(false);

  const renderItem = ({item}) =>{
    return(
      <View
        style = {{
          flex: 1, 
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <Image
          style = {styles.introImageStyle}
          source = {item.image}
        />
        <Text style={styles.introTitleStyle}>
          {item.title}
        </Text>
        <Text style={styles.introTextStyle}>
          {item.text}
        </Text>

        {item.isLastSlide && (
          <Button title="Done" onPress={handleLandingButton} />
        )}
      </View>
    )
  }
  return (
          <AppIntroSlider 
            data={slides} 
            renderItem={renderItem} 
            onDone={() => navigation.navigate('Landing')}
          />
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: -100,
  },
  introTitleStyle: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: -300,
    marginTop: 50,
  },
  introImageStyle: {
    width: 100,
    height: 100,
    marginBottom: -300,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 150,
  }
});

const slides = [
  {
    key: 's1',
    text: 'Welcome to our restaurant app! Log in and check  out our delicious food.',
    title: 'Browse Food',
    image: require('../assets/1.png'),
    backgroundColor: '#5EA33A',
  },
  {
    key: 's2',
    title: 'Order Food',
    text: 'Hungry? Order food in just a few clicks and we’ll take care of you..',
    image: require('../assets/2.png'),
    backgroundColor: '#5EA33A',
  },
  {
    key: 's3',
    title: 'Make Reservations',
    text: 'Book a table in advance to avoid waiting in line',
    image: require('../assets/3.png'),
    backgroundColor: '#5EA33A',
  },
  {
    key: 's4',
    title: 'Quick Search',
    text: 'Quickly find food items you like the most',
    image: require('../assets/4.png'),
    backgroundColor: '#5EA33A',
  },
  {
    key: 's5',
    title: 'Apple Pay',
    text: 'We know you’re busy, so you can pay with your phone in just one click',
    image: require('../assets/5.png'),
    backgroundColor: '#5EA33A',
  }
];