import { View, Text, Image, StyleSheet, TouchableOpacity,Linking } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const PropertyCard = ({ item, locationlat,locationlong, property }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        borderColor: "#0000003a",
        borderWidth: 1,
        marginTop: 10,
        padding: 5,
        borderRadius: 5,
      }}
    >
      <Image
        source={{ uri: item.image }}
        resizeMode="cover"
        style={{ height: 300 }}
      />
      <Text style={{ marginTop: 10,lineHeight:20 }}>
       {item.description}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${item.phone}`)}} style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Feather name="phone" color={"#0000003a"} size={20} />
          <Text> {item.phone} </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Map", {
              location: {locationlat,locationlong},
              property: property,
              prop : item
            });
          }}
          style={{
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderColor: "#0000003a",
            padding: 7,
            borderWidth: 1,
          }}
        >
          <Text>View on map </Text>
          <AntDesign name="doubleright" color={"black"} size={10} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default PropertyCard;
