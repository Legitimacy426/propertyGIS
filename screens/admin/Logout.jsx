import { View, Text } from 'react-native'
import React,{useEffect} from 'react'

import { signOut } from 'firebase/auth'

import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebaseConfig'


const Logout = () => {
  const navigation = useNavigation()
  useEffect(() => {
  
      signOut(auth).then(() => {
    navigation.navigate("Login",{role:"admin"})
})
  
  },[])
  return (
    <View >
      <Text>Logout</Text>
    </View>
  )
}

export default Logout