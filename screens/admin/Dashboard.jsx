import { View, Text, SafeAreaView, TouchableOpacity,FlatList, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import propertyList from '../data/property'

import useFetchAll from '../hooks/useFetchAll'
import AdminCard from '../../components/AdminCard'



const Dashboard = () => {
const place = {label:"new york",longitute:-23,latitude:20}
const {posts} = useFetchAll('properties') 
  const Item = ({ item }) => (
    <AdminCard item = {item} location={place} />
  )
  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}
    >
      <View>
        <FlatList data={posts}
           showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.image} />
      </View>
   </SafeAreaView>
  )
}

export default Dashboard