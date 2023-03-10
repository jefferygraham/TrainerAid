import React from "react";
import {View, Image, Text, ScrollView, Pressable } from 'react-native'
import { useNavigation } from "@react-navigation/native";

import styles from "./styles"


const Trainer = (props) => {
    const navigation = useNavigation();
    const trainer = props.trainer;

    return (
        <ScrollView style={styles.container}>
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
            <Text style={styles.totalPrice}>${trainer.totalPrice} Total</Text>
            <Text style={styles.longDescription}>
                {trainer.description}
            </Text>
            <Pressable onPress={() => navigation.navigate('Appointments')}>
                <Text>Schedule an appointment</Text>
            </Pressable>
        </ScrollView>
    )
}

export default Trainer;