import React, { useState } from 'react'
import { View,Text } from 'react-native'
import { useRoute } from '@react-navigation/native';


const Confirmation = (props) => {
  const route = useRoute()
  const {date, time} = route.params
  
  return (
    <View>
      <Text>You are confirmed for {date} at {time}</Text>
    </View>
  )
}

export default Confirmation