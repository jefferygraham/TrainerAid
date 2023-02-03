import React, {useState, useEffect} from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useRoute } from '@react-navigation/native'
import {API, graphqlOperation} from 'aws-amplify'

import {listTrainers} from '../graphql/queries'
import SearchResults from '../screens/SearchResults'
import SearchResultsMap from '../screens/SearchResultsMap'

const Tab = createMaterialTopTabNavigator()

const SearchResultsTabNavigator = () => {
  const [trainers, setTrainers] = useState([])

  const route = useRoute()

  const {viewport} = route.params

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const trainersResult = await API.graphql(
          graphqlOperation(listTrainers, {
            filter: {
              latitude: {
                between: [viewport.southwest.lat, viewport.northeast.lat]
              },
              longitude: {
                between: [viewport.southwest.lng, viewport.northeast.lng], 
              }
            }
          })
        )
        setTrainers(trainersResult.data.listTrainers.items)
      } catch (error) {
        console.log(error)
      }
    }

    fetchTrainers()
  }, [])

  return (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#f15454',
        tabBarIndicatorStyle: {
            backgroundColor: '#f15454'
        }
    }}>
        <Tab.Screen name={'list'}>
          {() => (
            <SearchResults trainers={trainers} />
          )}
        </Tab.Screen>
        <Tab.Screen name={'map'}>
          {() => (
            <SearchResultsMap trainers={trainers} />
          )}
        </Tab.Screen>
    </Tab.Navigator>
  )
}

export default SearchResultsTabNavigator