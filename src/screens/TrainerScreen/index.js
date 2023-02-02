import { View, Text } from 'react-native'
import React from 'react'
import DetailedTrainer from '../../components/DetailedTrainer'
import { useRoute } from '@react-navigation/native';

import places from '../../../assets/data/feed';

const TrainerScreen = () => {
    const route = useRoute()

    const trainer = places.find(place => place.id === route.params.trainerId)

  return (
    <View style={{backgroundColor: 'white'}}>
      <DetailedTrainer trainer={trainer} />
    </View>
  )
}

export default TrainerScreen