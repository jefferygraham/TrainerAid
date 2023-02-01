import { TextInput, View, FlatList, Text, Pressable } from 'react-native'
import React, {useState} from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import searchResults from "../../../assets/data/search"

const LocationSearch = (props) => {

    const [inputText, setInputText] = useState("")
    const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <TextInput 
            style={styles.textInput}
            placeholder="Search for trainers"
            value={inputText}
            onChangeText={setInputText}
        />

        <FlatList 
            data={searchResults}
            renderItem={({item}) => (
                <Pressable 
                    onPress={() => navigation.navigate('Clients')}
                    style={styles.row}
                >
                    <View style={styles.iconContainer}>
                        <Entypo name="location-pin"size={30} />
                    </View>
                    <Text style={styles.locationText}>{item.description}</Text>
                </Pressable>
            )}
        />
    </View>
  )
}

export default LocationSearch;