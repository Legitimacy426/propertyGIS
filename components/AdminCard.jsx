import { View, Text, Image, StyleSheet ,TouchableOpacity,Linking} from 'react-native'
import React from 'react'
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";


import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from '@react-navigation/native';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../screens/firebaseConfig';

const AdminCard = ({ item,location }) => {
  const navigation = useNavigation()
  const handleUpdate = (id, status) => {
    alert("processing please wait...")
    const docRef = doc(db, "properties", id)
    updateDoc(docRef, { status: status })
      .then(() => {
      alert(`${status} succesifully`)
      }).catch((e) => {
      alert(e.message)
    })
  }
  return (
    <View style={{borderWidth:1,borderColor:"#0000003a",padding:10,backgroundColor:"white",borderRadius:5,marginBottom:5}}>
    <View style={{flexDirection:"row",alignItems:"center"}}>
      <Image source={{ uri: item.image }} resizeMode="cover" style={{width:65,height:65,borderRadius:5,borderWidth:1,borderColor:"#0000003a"} } />
        <Text style={{ marginLeft: 15, fontSize: 20, fontWeight: "bold" }}>{item.property } in { item.location}</Text>
    </View>
      <Text style={{ marginTop: 15, marginBottom: 15 }}>{item.name }-{item.description }</Text>
    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
    <TouchableOpacity
                 onPress={()=>{Linking.openURL(`tel:${item.phone}`)}} 
        style={{
          borderRadius:5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderColor: "#0000003a",
          padding: 7,
          borderWidth: 1,
    
    

        }}
      >
        <Text>{item.phone} </Text>
      <AntDesign name="phone" color={"black"} size={10} />
      </TouchableOpacity>
     {item.status == "Verified" ? (
         <View
         onPress={()=>{handleUpdate(item.id,"Verified")}}
style={{
 borderRadius:5,
 flexDirection: "row",
 alignItems: "center",
 justifyContent: "center",
 borderColor: "#0000003a",
 padding: 7,
 borderWidth: 1,
 backgroundColor:"#0080001d"


}}
>
<Text>{item.status} </Text>
<AntDesign name="checksquare" color={"black"} size={10} />
</View>
        ): (
           <TouchableOpacity
           onPress={()=>{handleUpdate(item.id,"Verified")}}
 style={{
   borderRadius:5,
   flexDirection: "row",
   alignItems: "center",
   justifyContent: "center",
   borderColor: "#0000003a",
   padding: 7,
   borderWidth: 1,
   backgroundColor:"#0080001d"


 }}
>
 <Text>Verify </Text>
<AntDesign name="checksquareo" color={"black"} size={10} />
</TouchableOpacity>
             )}
        {item.status == "Declined" ? (
         <View
         onPress={()=>{handleUpdate(item.id,"Declined")}}
style={{
 borderRadius:5,
 flexDirection: "row",
 alignItems: "center",
 justifyContent: "center",
 borderColor: "#0000003a",
 padding: 7,
 borderWidth: 1,
 backgroundColor:"#ff00002b"


}}
>
<Text>{item.status} </Text>
<AntDesign name="closesquare" color={"black"} size={10} />
</View>
        ): (
           <TouchableOpacity
           onPress={()=>{handleUpdate(item.id,"Declined")}}
 style={{
   borderRadius:5,
   flexDirection: "row",
   alignItems: "center",
   justifyContent: "center",
   borderColor: "#0000003a",
   padding: 7,
   borderWidth: 1,
   backgroundColor:"#ff00002b"


 }}
>
 <Text>Decline </Text>
<AntDesign name="closesquareo" color={"black"} size={10} />
</TouchableOpacity>
             )}
           
            
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  
  })
export default AdminCard