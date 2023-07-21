/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CardChange from './src/screens/CardChange';
import MovieHome from './src/screens/MovieHome';
import HomePage from './src/screens/HomePage';
import Products from './src/screens/Products';
import Checkout from './src/screens/Checkout';
import FinalCheck from './src/screens/FinalCheck';
import Favourites from './src/screens/Favourites';


function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name={'Home'}
            component={HomePage}
            options={{headerShown: false}}
          />
        <Stack.Screen
            name={'Products'}
            component={Products}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'Favourites'}
            component={Favourites}
            options={{headerShown: false}}
          />
        <Stack.Screen
            name={'Checkout'}
            component={Checkout}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'FinalCheck'}
            component={FinalCheck}
            options={{headerShown: false}}
          />
          
          
        <Stack.Screen
            name={'Login'}
            component={LoginScreen}
            options={{headerShown: false}}
          />
        <Stack.Screen
            name={'Welcome'}
            component={WelcomeScreen}
            options={{headerShown: false}}
          />
        
         
          
          <Stack.Screen
            name={'Movie'}
            component={MovieHome}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'Cards'}
            component={CardChange}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
