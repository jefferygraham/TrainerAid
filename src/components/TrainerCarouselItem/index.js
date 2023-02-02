import React from "react";
import {View, Image, Text, useWindowDimensions } from 'react-native'

import styles from "./styles"


const TrainerCarouselItem = (props) => {

    const trainer = props.trainer;
    const width = useWindowDimensions().width

    return (
        <View style={[styles.container, { width: width - 60}]}>
            <View style={styles.innerContainer}>
                <Image source={ {uri: trainer.image}} style={styles.image} />
                
                <View style={{flex: 1, marginHorizontal: 10}}>
                    <Text style={styles.trainerType}> {trainer.setting1} | {trainer.setting2}</Text>
                    <Text style={styles.description} numberOfLines={2}> 
                        {trainer.type}. {trainer.title}
                    </Text>
                    <Text style={styles.prices}> 
                        <Text style={styles.salesPrice}>${trainer.salesPrice} </Text>
                        / session
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default TrainerCarouselItem;