import React from "react";
import {View, ImageBackground, Text, Pressable} from 'react-native'
import { useNavigation } from "@react-navigation/native";

import styles from "./styles"
import Fontisto from 'react-native-vector-icons/Fontisto'


const HomeScreen = (props) => {

    const navigation = useNavigation();

    return (
        <View>
            <Pressable style={styles.searchButton} onPress={() => navigation.navigate('Location Search')}>
                <Fontisto name='search' size={25} color={"#f15454"} />
                <Text style={styles.searchButtonText}>Search for a trainer</Text>
            </Pressable>

            <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} style={styles.image}>
                <Text style={styles.title}>Let's Train</Text>
                <Pressable style={styles.button} onPress={() => console.warn('Explore Btn Clicked!')}>
                    <Text style={styles.buttonText}>Search nearby trainers</Text>
                </Pressable>
            </ImageBackground>
        </View>
    )
}

export default HomeScreen;