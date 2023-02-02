import { View, FlatList, useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import MapView from 'react-native-maps'

import CustomerMarker from '../../components/CustomMarker'
import places from '../../../assets/data/feed'
import TrainerCarouselItem from '../../components/TrainerCarouselItem'

const SearchResultsMap = () => {

  const [selectedPlaceId, setSelectedPlaceId] = useState(null)
  const width = useWindowDimensions().width

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
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
              data={places}
              renderItem={({item}) => <TrainerCarouselItem trainer={item} />}
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToInterval={width - 60}
              snapToAlignment={'center'}
              decelerationRate={'fast'}
            />
      </View>
    </View>
  )
}

export default SearchResultsMap