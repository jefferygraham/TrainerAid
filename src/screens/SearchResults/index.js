import { FlatList, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import {API, graphqlOperation} from 'aws-amplify'

import {listTrainers} from "../../graphql/queries"
import Trainer from '../../components/Trainer'

const SearchResults = (props) => {

  const [trainers, setTrainers] = useState([])

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const trainersResult = await API.graphql(
          graphqlOperation(listTrainers)
        )
        setTrainers(trainersResult.data.listTrainers.items)
      } catch (error) {
        console.log(error)
      }
    }

    fetchTrainers()
  }, [])

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