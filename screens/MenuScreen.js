import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

const MenuScreen = ( {navigation} ) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleMenuPress = () => {
    navigation.navigate('Menu');
  };

  const handleHomePress = () => {
    navigation.navigate('Home');
  };

  drawerContent = () => {
    return (
      <TouchableOpacity onPress={closeDrawer} style={styles.animatedBox}>
        <Icon name="bars" size={24} color="black" style={{paddingHorizontal: 15, paddingVertical: 2, paddingBottom:70}} />
        <View style={styles.menuItem}>
            <Image source={require('../assets/MenuIcons/home.png')}/>
            <TouchableOpacity  onPress={handleHomePress}>
            <Text style={styles.menuText}>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menuItem}>
            <Image source={require('../assets/MenuIcons/menu.png')}/>
            <TouchableOpacity  onPress={handleMenuPress}>
            <Text style={styles.menuText}>Menu</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menuItem}>
            <Image source={require('../assets/MenuIcons/search.png')}/>
          <Text style={styles.menuText}>Search</Text>
        </View>
        <View style={styles.menuItem}>
            <Image source={require('../assets/MenuIcons/cart.png')}/>
          <Text style={styles.menuText}>Cart</Text>
        </View>
        <View style={styles.menuItem}>
            <Image source={require('../assets/MenuIcons/reservation.png')}/>
          <Text style={styles.menuText}>Reservations</Text>
        </View>
        <View style={styles.menuItem}>
            <Image source={require('../assets/MenuIcons/orders.png')}/>
          <Text style={styles.menuText}>Order</Text>
        </View>
        <View style={styles.menuItem}>
            <Image source={require('../assets/MenuIcons/logout.png')}/>
          <Text style={styles.menuText}>Logout</Text>
        </View>

      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton} onPress={toggleDrawer}>
          <Icon name="bars" size={24} color="black" />
        </TouchableOpacity>
        <Text>Menu</Text>
        <TouchableOpacity style={styles.cartButton}>
          <Image source={require('../assets/MenuIcons/cart.png')} />
        </TouchableOpacity>
      </View>

      <MenuDrawer
          open={isDrawerOpen}
          position={'left'}
          drawerContent={this.drawerContent()}
          drawerPercentage={80}
          animationTime={250}
          overlay={true}
          opacity={0.4}
        >
        </MenuDrawer>
        <ScrollView contentContainerStyle={styles.imageContainer}>
        <View style={styles.row}>
          <View style={styles.imageWrapper}>
            <Image style={styles.foodImage} source={require('../assets/Foods/Breakfast.png')} />
          </View>
          <View style={styles.imageWrapper}>
            <Image style={styles.foodImage} source={require('../assets/Foods/Ramen.png')} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.imageWrapper}>
            <Image style={styles.foodImage} source={require('../assets/Foods/Sandwiches.png')} />
          </View>
          <View style={styles.imageWrapper}>
            <Image style={styles.foodImage} source={require('../assets/Foods/Mediterranean.png')} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.imageWrapper}>
            <Image style={styles.foodImage} source={require('../assets/Foods/Japanese.png')} />
          </View>
          <View style={styles.imageWrapper}>
            <Image style={styles.foodImage} source={require('../assets/Foods/Sushi.png')} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.imageWrapper}>
            <Image style={styles.foodImage} source={require('../assets/Foods/NewMexican.png')} />
          </View>
          <View style={styles.imageWrapper}>
            <Image style={styles.foodImage} source={require('../assets/Foods/BarFood.png')} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.imageWrapper}>
            <Image style={styles.foodImage} source={require('../assets/Foods/Italian.png')} />
          </View>
          <View style={styles.imageWrapper}>
            <Image style={styles.foodImage} source={require('../assets/Foods/Burgers.png')} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  menuButton: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  animatedBox: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  menuText: {
    marginLeft: 10,
    fontSize: 16,
  },
  imageContainer: {
    paddingHorizontal: 5, 
  },
  row: {
    flexDirection: 'row',
    marginBottom: 15, 
  },
  imageWrapper: {
    flex: 1,
    marginRight: 15, 
  },
  foodImage: {
    width: (Dimensions.get('window').width - 30) / 2, 
    height: 100,
  },
});

export default MenuScreen;
