/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  useColorScheme,
} from 'react-native';
import 'react-native-gesture-handler'

import Router from './src/navigation/Router';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <Router />
  );
}


export default App;
