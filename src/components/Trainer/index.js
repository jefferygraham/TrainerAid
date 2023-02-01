import React from "react";
import {View, Image, Text } from 'react-native'
import parseErrorStack from "react-native/Libraries/Core/Devtools/parseErrorStack";

import styles from "./styles"


const Trainer = (props) => {

    const trainer = props.trainer;

    return (
        <View style={styles.container}>
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
        </View>
    )
}

export default Trainer;