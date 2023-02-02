import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Auth } from 'aws-amplify'

const Profile = () => {

    const logOut = () => {
        Auth.signOut()
    }

  return (
    <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
        <Pressable 
            style={{width: '100%', height: 40, backgroundColor: '#c3c3c3'}}
            onPress={logOut}
        >
        <Text>Log Out</Text>
      </Pressable>
    </View>
  )
}

export default Profile