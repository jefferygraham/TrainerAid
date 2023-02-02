import { View, FlatList, useWindowDimensions } from 'react-native'
import React, {useEffect, useState, useRef} from 'react'
import MapView from 'react-native-maps'
import {API, graphqlOperation} from 'aws-amplify'

import {listTrainers} from "../../graphql/queries"
import CustomerMarker from '../../components/CustomMarker'
import TrainerCarouselItem from '../../components/TrainerCarouselItem'

const SearchResultsMap = () => {

  const [selectedPlaceId, setSelectedPlaceId] = useState(null)
  const [trainers, setTrainers] = useState([])

  const width = useWindowDimensions().width

  const flatlist = useRef()
  const map = useRef()
  const viewConfig = useRef({itemVisiblePercentThreshold: 70})
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item
      setSelectedPlaceId(selectedPlace.id)
    }
  })

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const trainersResult = await API.graphql(
          graphqlOperation(listTrainers)
        )
        setTrainers(trainersResult.data.listTrainers.items)
      } catch (error) {
        console.log(error)
      }
    }

    fetchTrainers()
  }, [])

  useEffect(() => {
    if (!selectedPlaceId || !flatlist) {
      return
    }
    const index = trainers.findIndex(place => place.id === selectedPlaceId)
    flatlist.current.scrollToIndex({index})

    const selectedPlace = trainers[index]
    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8
    }

    map.current.animateToRegion(region)
  }, [selectedPlaceId])
  

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        ref={map}
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
          {trainers.map(place => (
            <CustomerMarker 
              coordinate={{latitude: place.latitude, longitude: place.longitude}} 
              price={place.salesPrice} 
              isSelected={place.id === selectedPlaceId}
              onPress={() => setSelectedPlaceId(place.id)}
            />)
          )}
      </MapView>

      <View style={{position: 'absolute', bottom: 10}}>
            <FlatList 
              ref={flatlist}
              data={trainers}
              renderItem={({item}) => <TrainerCarouselItem trainer={item} />}
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToInterval={width - 60}
              snapToAlignment={'center'}
              decelerationRate={'fast'}
              viewabilityConfig={viewConfig.current}
              onViewableItemsChanged={onViewChanged.current}
            />
      </View>
    </View>
  )
}

export default SearchResultsMap