import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ( {navigation} ) => {
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
        <ScrollView>
        <Text style={{fontSize: 18,marginLeft: 10,paddingBottom:5}}>Popular Categories</Text>
        <View style={styles.categoriesItem}>
            <Image style= {styles.categoriesimage} source={require('../assets/Foods/Ramen.png')}/>
            <Image style= {styles.categoriesimage} source={require('../assets/Foods/Ramen.png')}/>
            <Image style= {styles.categoriesimage} source={require('../assets/Foods/Ramen.png')}/>
            <Image style= {styles.categoriesimage} source={require('../assets/Foods/Ramen.png')}/>
        </View>
        <View style={styles.categoriesItem}>
            <Text style= {styles.categoriestext}>Breakfast</Text>
            <Text style= {styles.categoriestext}>Sandwiches</Text>
            <Text style= {styles.categoriestext}>Ramen</Text>
            <Text style= {styles.categoriestext}>Salads</Text>
        </View>  
        <Text style={{fontSize: 18,marginLeft: 10,paddingBottom:5}}>Best Deals</Text>
        <Image style={{width:'100%'}} source={require('../assets/Foods/Ramen.png')}/>
        <Text style={{fontSize: 18,marginLeft: 10,paddingBottom:5}}>Most Popular</Text>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image style={{width:'90%',  marginBottom:20}} source={require('../assets/Foods/Salad.png')}/>
        <Image style={{width:'90%',  marginBottom:20}} source={require('../assets/Foods/Redflag.png')}/>
        <Image style={{width:'90%',  marginBottom:10}} source={require('../assets/Foods/Sandwich1.png')}/>
        <Image style={{width:'90%',  marginBottom:10}} source={require('../assets/Foods/Sandwich2.png')}/> 
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
  categoriesimage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 40,
  },
  categoriesItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,    
  },
  categoriestext: {
    marginRight: 52,
  },
});

export default HomeScreen;
