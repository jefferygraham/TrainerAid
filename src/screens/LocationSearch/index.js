import { TextInput, View, FlatList, Text } from 'react-native'
import React, {useState} from 'react'
import Entypo from 'react-native-vector-icons/Entypo'

import styles from './styles'
import searchResults from "../../../assets/data/search"

const LocationSearch = (props) => {

    const [inputText, setInputText] = useState("")

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
                <View style={styles.row}>
                    <View style={styles.iconContainer}>
                        <Entypo name="location-pin"size={30} />
                    </View>
                    <Text style={styles.locationText}>{item.description}</Text>
                </View>
            )}
        />
    </View>
  )
}

export default LocationSearch;