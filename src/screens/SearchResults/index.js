import { FlatList, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import {API, graphqlOperation} from 'aws-amplify'

import {listTrainers} from "../../graphql/queries"
import Trainer from '../../components/Trainer'

const SearchResults = (props) => {

  const {trainers} = props

    return (
      <View>
        <FlatList
            data={trainers}
            renderItem={({item}) => <Trainer trainer={item} />}
        />
      </View>
    )
}

export default SearchResults