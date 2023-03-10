import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeTabNavigator from './HomeTabNavigator';
import LocationSearch from '../screens/LocationSearch';
import Clients from '../screens/Clients';
import TrainerScreen from '../screens/TrainerScreen';
import Appointments from '../screens/Appointments';
import Confirmation from '../screens/Confimation';

const Stack = createStackNavigator()

const Router = (props) => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name={"Home"} 
                component={HomeTabNavigator}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name={"Location Search"} 
                component={LocationSearch}
                options={{
                    title: "Search for your trainer"
                }}
            />
            <Stack.Screen 
                name={"Clients"} 
                component={Clients}
                options={{
                    title: "How many people?"
                }}
            />
            <Stack.Screen 
                name={"Trainer"} 
                component={TrainerScreen}
                options={{
                    title: "Trainer"
                }}
            />
            <Stack.Screen 
                name={"Appointments"} 
                component={Appointments}
                options={{
                    title: "Appointments"
                }}
            />
            <Stack.Screen 
                name={"Confirmation"} 
                component={Confirmation}
                options={{
                    title: "Confirmation"
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router