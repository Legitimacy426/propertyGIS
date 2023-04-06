import { View, Text, Image, TextInput, TouchableOpacity,Alert, Button, } from "react-native";
import React, { useRef, useState,useEffect } from "react";

import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation, useRoute } from "@react-navigation/native";


import firebase from "firebase/compat/app";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"

import { signInWithEmailAndPassword,signOut } from "firebase/auth"
import {auth,db} from '../firebaseConfig'


const Login = () => {
  const { role } = useRoute().params
  console.log(role)
  const navigation = useNavigation();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 
  const handleSubmit = () => {
    if(!email || !password){
      alert("All fields are required")
      return
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        const userId = credentials.user.uid
        console.log(userId)
        alert("Logged in")
        navigation.navigate(role)
      }).catch((e) => {
      alert(e.message)
    })
  }
  

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      {/* <Image
        source={require("../assets/login.png")}
        style={{ marginTop: 30, height: 200, width: 400, alignSelf: "center" }}
      /> */}
     
      <View style={{ marginTop: 0, padding: 30 }}>
        
      <Text style={{ color: "#0000009a", fontSize: 15, marginBottom: 15 }}>
          Email Address
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 16,
            borderWidth: 1,
            borderColor: "#041337",
            padding: 2,
            borderRadius: 5,
          }}
        >
          <Entypo
            name="mail"
            size={20}
            color="#0000007d"
            style={{ marginRight: 3, marginLeft: 10 }}
          />
          <TextInput
            style={{ padding: 7, fontSize: 16, width: 250, }}
            placeholder="Email address"
            onChangeText={setEmail}

          />
         
         
        </View>
            <Text
              style={{ color: "#0000009a", fontSize: 15, marginBottom: 15 }}
            >
              Password
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 16,
                borderWidth: 1,
                borderColor: "#041337",
                padding: 2,
                borderRadius: 5,
              }}
            >
              <Entypo
                name="lock"
                size={20}
                color="#0000007d"
                style={{ marginRight: 3, marginLeft: 10 }}
              />
              <TextInput
                style={{ padding: 7, fontSize: 16, width: 250 }}
            placeholder="Password"
            onChangeText={setPassword}
            secureTextEntry={true}
    
              />
            </View>
          
            <TouchableOpacity
             onPress={handleSubmit}
              style={{
                alignSelf: "center",
                borderRadius: 5,
                backgroundColor: "#041337",
                padding: 15,
                width: 300,
                marginTop: 30,
                alignItems: "center",
                color: "white",
              }}
            >
              <Text style={{ color: "white" }}>Continue</Text>
            </TouchableOpacity>
         
        {role == 'landlord' && 
               <TouchableOpacity
               onPress={() => {
                 navigation.navigate("Register",{role:"landlord"});
               }}
             >
               <Text
                 style={{
                   color: "#0000009a",
                   fontWeight: "bold",
                   marginTop: 20,
                   alignSelf: "center",
                 }}
               >
                 Not a member ?
                 <Text style={{ color: "#041337" }}> Create Account</Text>
               </Text>
             </TouchableOpacity>
              }
      </View>
    </View>
  );
};

export default Login;
