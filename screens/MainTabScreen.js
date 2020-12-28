import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Warehouselocation from './warehouse/Warehouselocation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import NewScreen from './NewScreen';
import ProductDetails from './product/ProductScreen';
import Delivery from './product/Delivery';
import UserDeliveryAddress from './product/UserDeliveryAddress';
import OrderConfirmation from './order/OrderConfirmation';
import ProductReviewScreen from './product/ProductReviewScreen';
import OrderTracking from './order/OrderTracking';
import LocationSetting from './trackinglocation/LocationSetting';
const Tab = createMaterialBottomTabNavigator();
const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#ffffff"
      style={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="Feed"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DetailStackScreen}
        options={{
          tabBarLabel: 'Product History',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={NewStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#694fad',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={OrderTrackingStackScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#d82868',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const OrderTrackingStack = createStackNavigator();
const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon.Button
            name="md-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />
    <HomeStack.Screen
      name="Product"
      component={ProductDetails}
      options={{
        title: 'ProductDetails',
      }}
    />
    <HomeStack.Screen
      name="Deliveryscreen"
      component={Delivery}
      options={{
        title: 'Delivery',
      }}
    />
    <HomeStack.Screen
      name="UserDeliveryAddress"
      component={UserDeliveryAddress}
      options={{
        title: 'UserDeliveryAddress',
      }}
    />

    <HomeStack.Screen
      name="OrderConfirmation"
      component={OrderConfirmation}
      options={{
        title: 'OrderConfirmation',
      }}
    />
    <HomeStack.Screen
      name="ProductReview"
      component={ProductReviewScreen}
      options={{
        title: 'ProductReviewScreen',
      }}
    />
  </HomeStack.Navigator>
);
const NewStack = ({navigation}) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        title: 'Profile',

        headerLeft: () => (
          <Icon.Button
            name="md-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />
    <ProfileStack.Screen
      name="newscreen"
      component={NewScreen}
      options={{
        title: 'newscreen',
      }}
    />
  </ProfileStack.Navigator>
);

const DetailStackScreen = ({navigation}) => (
  <DetailStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1f65ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DetailStack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        title: 'Details',
        headerLeft: () => (
          <Icon.Button
            name="md-menu"
            size={25}
            backgroundColor="#1f65ff"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />
    <ProfileStack.Screen
      name="Warehouselocation"
      component={Warehouselocation}
      options={{
        title: 'Warehouselocation',
      }}
    />
  </DetailStack.Navigator>
);
const OrderTrackingStackScreen = ({navigation}) => (
  <OrderTrackingStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1f65ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <OrderTrackingStack.Screen
      name="OrderTracking"
      component={OrderTracking}
      options={{
        title: 'OrderTracking',
      }}
    />
   
    <OrderTrackingStack.Screen
      name="LocationSettingScreen"
      component={LocationSetting}
      options={{
        title: 'LocationSetting',
      }}
    />
  </OrderTrackingStack.Navigator>
);

export default MainTabScreen;
