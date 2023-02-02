import { TextInput, View, FlatList, Text, Pressable } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import styles from './styles'
import SuggestionRow from './SuggestionRow';

const LocationSearch = (props) => {

    const navigation = useNavigation()

  return (
    <View style={styles.container}>
      
        <GooglePlacesAutocomplete
            placeholder='Search for trainers'
            onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
                navigation.navigate("Clients")
            }}
            query={{
                key: 'AIzaSyAzqsyTffjCXDaYQhvnScPPorJfyoHnjas',
                language: 'en',
                types: '(cities)'
            }}
            styles={{
                textInput: styles.textInput
            }}
            renderRow={(item) => <SuggestionRow item={item} />}
            suppressDefaultStyles
            fetchDetails
        />

    </View>
  )
}

export default LocationSearch;