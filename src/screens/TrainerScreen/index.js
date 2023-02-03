import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify';
import { useRoute } from '@react-navigation/native';

import { getTrainer } from '../../graphql/queries';
import DetailedTrainer from '../../components/DetailedTrainer'
import places from '../../../assets/data/feed';

const TrainerScreen = () => {
  const route = useRoute()
  const trainer = route.params.trainer

  // const trainer = places.find(place => place.id === route.params.trainerId)
  
  return (
    <View style={{backgroundColor: 'white'}}>
      <DetailedTrainer trainer={trainer} />
    </View>
  )
}

export default TrainerScreen