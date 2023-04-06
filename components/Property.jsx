import { View, Text, Image, StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";


import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from '@react-navigation/native';

const Property = ({ item,location }) => {
    const navigation = useNavigation()
  return (
    <View style={{borderWidth:1,borderColor:"#0000003a",padding:10,backgroundColor:"white",borderRadius:5,marginBottom:5}}>
    <View style={{flexDirection:"row",alignItems:"center"}}>
      <Image source={{ uri: item.image }} resizeMode="cover" style={{width:65,height:65,borderRadius:5,borderWidth:1,borderColor:"#0000003a"} } />
              <Text style={{ marginLeft: 15, fontSize: 20, fontWeight: "bold" }}>{item.name }</Text>
    </View>
          <Text style={{ marginTop: 10, marginBottom: 10 }}>{item.description }</Text>
    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
      <Text></Text>
              <TouchableOpacity
                  onPress={()=>{navigation.navigate("Properties",{location:location,property:item})}}
        style={{
          borderRadius:5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderColor: "#0000003a",
          padding: 7,
          borderWidth: 1
    

        }}
      >
        <Text>Explore </Text>
      <AntDesign name="doubleright" color={"black"} size={10} />
      </TouchableOpacity>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  
  })
export default Property