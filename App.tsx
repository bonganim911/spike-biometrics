/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen';

const App = () => {
  return (
    <NavigationContainer>
      <LoginScreen />
    </NavigationContainer>
  );
};
export default App;
