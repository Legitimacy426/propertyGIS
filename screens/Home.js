import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Linking,
  SafeAreaView,
} from "react-native";
import React, { useState, useCallback, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import places from "./data/places";

import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Picker } from "@react-native-picker/picker";
import { ImageBackground } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const Home = () => {
  const [selectedConstituency, setSelectedConstituency] = useState(null);
  var [url, setUrl] = useState(
    `https://source.unsplash.com/random/?black people smilling`
  );
  const navigation = useNavigation();
  const phone = "+254746121317";

  useEffect(() => {
    setUrl(`https://source.unsplash.com/random/?black peoples`);
  }, [navigation]);
  const handleGo = () => {
    if (!selectedConstituency) {
      alert("Please select your destination for better experience");
      return;
    }
    navigation.navigate("Main", { place: selectedConstituency });
  };
  return (
    <ImageBackground source={{ uri: url }} style={styles.container}>
      <LinearGradient
        style={styles.container}
        // Button Linear Gradient
        colors={["transparent", "#000000d4", "black"]}
      >
        <SafeAreaView>
          <View>
            <Text style={{ fontSize: 45, color: "white", fontWeight: "bold" }}>
              Let's Enjoy Your
            </Text>
            <Text style={{ fontSize: 45, color: "white", fontWeight: "bold" }}>
              Desired Trip With
            </Text>
            <Text
              style={{
                fontSize: 45,
                color: "white",
                fontWeight: "bold",
                marginBottom: 50,
              }}
            >
              Property GIS
            </Text>

            <GooglePlacesAutocomplete
              styles={{
                container: {
                  width: 280,
                  flex: 1,
                  overflow: "scroll",
                  marginTop: 160,
                  zIndex: 122,
                  position: "absolute",
                },
                textInputContainer: {
                  flexDirection: "row",
                },
                textInput: {
                  backgroundColor: "#FFFFFF",
                  height: 44,
                  borderRadius: 5,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  fontSize: 15,
                  padding: 25,
                },
                poweredContainer: {
                  justifyContent: "flex-end",
                  alignItems: "center",
                  borderBottomRightRadius: 5,
                  borderBottomLeftRadius: 5,
                  borderColor: "#c8c7cc",
                  borderTopWidth: 0.5,
                },
                powered: {},
                listView: {},
                row: {
                  backgroundColor: "#FFFFFF",
                  padding: 13,
                  height: 44,
                  flexDirection: "row",
                },
                separator: {
                  height: 0.5,
                  backgroundColor: "#c8c7cc",
                },
                description: {},
                loader: {
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  height: 20,
                },
              }}
              fetchDetails={true}
              placeholder="  Where are you going ?"
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true

                const { lat, lng } = details.geometry.location;
                const { long_name } = details.address_components[0];
                const label = details.address_components[1].long_name;
                const selected = {
                  label: label,
                  longitude: lng,
                  latitude: lat,
                  location: long_name,
                };
                navigation.navigate("Main", { place: selected });
              }}
              query={{
                key: "AIzaSyDTo39T8WgONi5TFpYeUJN2dMvTcATuO5o",
                language: "en",
              }}
            />

            {/* <View
            style={{
              flexDirection: "row",
              borderColor: "white",
              borderWidth: 1,

              marginTop: 15,
              marginBottom: 15,
            }}
          >
            <Picker
              style={{
                backgroundColor: "transparent",
                color: "white",
                width: 220,
              }}
              selectedValue={selectedConstituency}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedConstituency(itemValue)
              }
            >
              <Picker.Item label="Select your destination..." value={null} />
              {places.map((constituency, index) => (
                <Picker.Item
                  key={index}
                  label={constituency.label}
                  value={constituency}
                />
              ))}
            </Picker>
            <TouchableOpacity
              style={{
                padding: 7,
                alignItems: "center",
                justifyContent: "center",
                height: 50,
                marginLeft: 10,
              }}
              onPress={() => {
                handleGo();
              }}
            >
              <Text
                style={{ fontSize: 15, color: "white", fontWeight: "bold" }}
              >
                <AntDesign name="doubleright" color={"white"} size={20} />
              </Text>
            </TouchableOpacity>
          </View> */}

            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "white",
                padding: 17,
                marginTop: 30,
                borderRadius: 5,
                justifyContent: "space-between",
                flexDirection: "row",
              }}
              onPress={() => {
                navigation.navigate("Login", { role: "landlord" });
              }}
            >
              <Text
                style={{ fontSize: 15, color: "white", fontWeight: "bold" }}
              >
                Continue as Landlord
              </Text>
              <FontAwesome5 name="hospital-user" color={"white"} size={15} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "white",
                padding: 17,
                marginTop: 20,
                borderRadius: 5,
                justifyContent: "space-between",
                flexDirection: "row",
              }}
              onPress={() => {
                navigation.navigate("Login", { role: "admin" });
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Continue as Administrator
              </Text>
              <FontAwesome5 name="user-cog" color={"white"} size={15} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 0,
    justifyContent: "center",
    width: 500,
    alignSelf: "center",
  },
});

export default Home;
