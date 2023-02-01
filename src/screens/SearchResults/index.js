import { FlatList, View } from 'react-native'
import React from 'react'

import feed from '../../../assets/data/feed'
import Trainer from '../../components/Trainer'

const SearchResults = (props) => {
    return (
      <View>
        <FlatList
            data={feed}
            renderItem={({item}) => <Trainer trainer={item} />}
        />
      </View>
    )
}

export default SearchResults