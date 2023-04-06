import { View, Text, SafeAreaView, TouchableOpacity,FlatList, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import propertyList from './data/property'

import Property from '../components/Property'

const Main = () => {
  const { place } = useRoute().params
 
  const Item = ({ item }) => (
    <Property item = {item} location={place} />
  )
  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}
    >
      <View>
        <FlatList data={propertyList}
           showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.name} />
      </View>
   </SafeAreaView>
  )
}

export default Main