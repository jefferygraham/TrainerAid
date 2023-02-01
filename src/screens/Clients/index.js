import { View, Text, Pressable } from 'react-native'
import React, {useState} from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

import styles from './styles'

const Clients = () => {

  const [clients, setClients] = useState(0)
  const navigation = useNavigation()

  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      <View style={styles.row}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Adults</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable 
            onPress={() => setClients(Math.max(0, clients - 1))} 
            style={styles.button}
          >
            <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
          </Pressable>
          <Text style={{marginHorizontal: 20, fontSize: 16}}>{clients}</Text>
          <Pressable 
            onPress={() => setClients(clients + 1)} 
            style={styles.button}
          >
            <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
          </Pressable>
        </View>
      </View>

      <Pressable 
        style={{
          marginBottom: 20, 
          backgroundColor: '#f15454', 
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          marginHorizontal: 20,
          borderRadius: 10  
        }}
        
        onPress={() => navigation.navigate('')}
      >
        <Text>Search</Text>
      </Pressable>
        
    </View>
  )
}

export default Clients