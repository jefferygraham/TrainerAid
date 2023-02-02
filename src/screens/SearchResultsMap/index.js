import { View, FlatList, useWindowDimensions } from 'react-native'
import React, {useEffect, useState, useRef} from 'react'
import MapView from 'react-native-maps'

import CustomerMarker from '../../components/CustomMarker'
import places from '../../../assets/data/feed'
import TrainerCarouselItem from '../../components/TrainerCarouselItem'

const SearchResultsMap = () => {

  const [selectedPlaceId, setSelectedPlaceId] = useState(null)
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
    if (!selectedPlaceId || !flatlist) {
      return
    }
    const index = places.findIndex(place => place.id === selectedPlaceId)
    flatlist.current.scrollToIndex({index})

    const selectedPlace = places[index]
    const region = {
      latitude: selectedPlace.coordinate.latitude,
      longitude: selectedPlace.coordinate.longitude,
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
          {places.map(place => (
            <CustomerMarker 
              coordinate={place.coordinate} 
              price={place.salesPrice} 
              isSelected={place.id === selectedPlaceId}
              onPress={() => setSelectedPlaceId(place.id)}
            />)
          )}
      </MapView>

      <View style={{position: 'absolute', bottom: 10}}>
            <FlatList 
              ref={flatlist}
              data={places}
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