import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity, Image,FlatList } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import PropertyCard from '../components/PropertyCard';
import propertyList from './data/property';
import useFetchProperties from './hooks/useFetchProperties';


const Properties = () => {
    
    const navigation = useNavigation()
  const { property, location } = useRoute().params
  const { posts,isErrorP,isPendingP } = useFetchProperties("properties", location.label, property.name)
  console.log(posts)
    const url = `https://source.unsplash.com/random/?${property.name}`
  
    const Item = ({ item }) => (
        <PropertyCard item={item} locationlat={item.latitude} locationlong={item.longitude}  property={ property } />
      )
  return (
   <View>
        <ImageBackground source={{ uri: url }} resizeMode="cover" style={{ with: 400, height: 300 }} />
          <LinearGradient
       style={{ height: 300,width:420, padding: 20, justifyContent: "space-between", position: "absolute", top: 0, left: 0 }}
      // Button Linear Gradient
      colors={["transparent", "#3b589861", "black"]}
    >
          
                  
                  
               
              <TouchableOpacity style={{marginTop:20}} onPress={ ()=>{navigation.navigate("Main", { place: location })}}>
              <AntDesign name="arrowleft" color={"white"} size={25} /> 
              </TouchableOpacity>
              <View>
                  <Text style={{color:"white",fontSize:30}}>Recomended {property.name}</Text>
                  <Text style={{color:"white",fontSize:30}}>in { location.label}</Text>
              </View>
           
          </LinearGradient>
          <View style={{marginBottom:600}}>
            <SafeAreaView
          style={{padding:5}}
          >
                  <FlatList data={posts}
                      style={{}}
           showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <Item item={item} />}
                      keyExtractor={item => item.image} />
                     
              </SafeAreaView>   
             
          </View>
         
          </View>
        
         
   

  )
}

export default Properties