/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
} from 'react-native';

import HomeScreen  from './src/screens/Home';
import SearchResults from './src/screens/SearchResults';
import LocationSearch from './src/screens/LocationSearch';
import Clients from './src/screens/Clients';

import Trainer from './src/components/Trainer';
import feed from './assets/data/feed'

const trainer1 = feed[0]

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <SafeAreaView>
     <Clients />
   
    </SafeAreaView>
  );
}


export default App;
