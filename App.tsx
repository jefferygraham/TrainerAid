/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  useColorScheme,
} from 'react-native';

import HomeScreen  from './src/screens/Home';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <SafeAreaView>
     <HomeScreen />
    </SafeAreaView>
  );
}


export default App;
