import React from "react";
import {View, Image, Text } from 'react-native'

import styles from "./styles"


const Trainer = (props) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg"}} style={styles.image} />
            <Text style={styles.trainerType}> Virtual | Online</Text>
            <Text style={styles.description} numberOfLines={2}> Ipsum Loren</Text>
            <Text style={styles.prices}> 
                <Text style={styles.regularPrice}>$36 </Text>
                <Text style={styles.salesPrice}>$30 </Text>
                 / session
            </Text>
            <Text style={styles.totalPrice}>$230 Total</Text>
        </View>
    )
}

export default Trainer;