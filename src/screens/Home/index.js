import React from "react";
import {View, ImageBackground, Text, Pressable} from 'react-native'
import { useNavigation } from "@react-navigation/native";

import styles from "./styles"
import Fontisto from 'react-native-vector-icons/Fontisto'


const HomeScreen = (props) => {

    const navigation = useNavigation();

    return (
        <View style={{backgroundColor: "#001E77", height: "100%"}}>
            <Pressable style={styles.searchButton} onPress={() => navigation.navigate('Location Search')}>
                <Fontisto name='search' size={25} color={"#fc4801"} />
                <Text style={styles.searchButtonText}>Search for a trainer</Text>
            </Pressable>

            <ImageBackground source={require('../../../assets/images/wallpaper.png')} style={styles.image}>
               
            </ImageBackground>
        </View>
    )
}

export default HomeScreen;