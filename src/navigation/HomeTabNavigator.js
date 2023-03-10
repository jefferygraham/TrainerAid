import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

import HomeScreen from '../screens/Home'
import ExploreNavigator from './ExploreNavigator'
import Profile from '../screens/Profile'

const Tab = createBottomTabNavigator()

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#fc4801'
    }}>
        <Tab.Screen 
            name={"MTA"}
            component={HomeScreen}
            options={{
                tabBarIcon: ({color}) => (
                    <FontAwesome name="heart-o" size={25} color={color} />
                )
            }}
        />
        <Tab.Screen 
            name={"Explore"}
            component={ExploreNavigator}
            options={{
                tabBarIcon: ({color}) => (
                    <Fontisto name="search" size={25} color={color} />
                )
            }}
        />
        
        <Tab.Screen 
            name={"Sessions"}
            component={HomeScreen}
            options={{
                tabBarIcon: ({color}) => (
                    <Ionicons name="ios-barbell-outline" size={25} color={color} />
                )
            }}
        />
        <Tab.Screen 
            name={"Messages"}
            component={HomeScreen}
            options={{
                tabBarIcon: ({color}) => (
                    <Feather name="message-square" size={25} color={color} />
                )
            }}
        />
        <Tab.Screen 
            name={"Profile"}
            component={Profile}
            options={{
                tabBarIcon: ({color}) => (
                    <EvilIcons name="user" size={25} color={color} />
                )
            }}
        />
    </Tab.Navigator>
  )
}

export default HomeTabNavigator