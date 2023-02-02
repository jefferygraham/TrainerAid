import React from "react";
import {View, Image, Text, Pressable } from 'react-native'
import { useNavigation } from "@react-navigation/native";

import styles from "./styles"


const Trainer = (props) => {

    const trainer = props.trainer;

    const navigation = useNavigation()

    const goToTrainerPage = () => {
        navigation.navigate('Trainer', { trainerId: trainer.id})
    }

    return (
        <Pressable 
            style={styles.container}
            onPress={goToTrainerPage}
        >
            <Image source={ {uri: trainer.image}} style={styles.image} />
            <Text style={styles.trainerType}> {trainer.setting1} | {trainer.setting2}</Text>
            <Text style={styles.description} numberOfLines={2}> 
                {trainer.type}. {trainer.title}
            </Text>
            <Text style={styles.prices}> 
                <Text style={styles.regularPrice}>${trainer.regularPrice}</Text>
                <Text style={styles.salesPrice}>${trainer.salesPrice} </Text>
                 / session
            </Text>
        </Pressable>
    )
}

export default Trainer;