import { View, Text, Pressable } from 'react-native'
import React, {useState} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import styles from './styles'

const Clients = () => {

  const [clients, setClients] = useState(0)
  const navigation = useNavigation()
  const route = useRoute()

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
        onPress={() => navigation.navigate('Home', {
          screen: 'Explore',
          params: {
            screen: 'SearchResults',
            params: {
              viewport: route.params.viewport
            }
          }
        })}

        style={{
          marginBottom: 20, 
          backgroundColor: '#fc4801', 
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          marginHorizontal: 20,
          borderRadius: 10  
        }}
      >
        <Text>Search</Text>
      </Pressable>
        
    </View>
  )
}

export default Clients