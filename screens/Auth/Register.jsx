import { View, Text, Image, TextInput, TouchableOpacity,Alert, Button } from "react-native";
import React, { useRef, useState,useEffect } from "react";

import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation,useRoute } from "@react-navigation/native";


import firebase from "firebase/compat/app";
import { addDoc, collection, getDocs, query,serverTimestamp,where } from "firebase/firestore"

import { createUserWithEmailAndPassword,signOut } from "firebase/auth"
import {auth,db} from '../firebaseConfig'


const Register = () => {
  const { role } = useRoute().params
  const navigation = useNavigation();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 
  const [address, setLocation] = useState('')
  
  const handleSubmit = () => {
    if (!address || !email || !password) {
      alert("All fields are required")
      return
    }
    alert("Processing please wait...")
    createUserWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        const userId = credentials.user.uid
        console.log(userId)

        const user = {
          userId: userId,
         
          createdAt: serverTimestamp(),
          email: email,
          password: password,
          location: address,
          role:role
        }
        const userRef = collection(db, 'users')
        addDoc(userRef, user)
          .then(() => {
            alert("Success,You can now log in")
            navigation.navigate("Login",{role:role})
          
          })
          .catch((e) => {
            alert(e.massage)
          })
      })
      .catch((e) => {
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
              placeholder="someone@gmail.com"
              onChangeText={setEmail}

          />
         
         
        </View>
        <Text style={{ color: "#0000009a", fontSize: 15, marginBottom: 15 }}>
          Address
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
              placeholder="E.g Nchiru"
              onChangeText={setLocation}

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
            placeholder="Create a password"
            secureTextEntry={true}
            onChangeText={setPassword}
    
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
         
               <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login",{role:role});
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
                Already a member ?
                <Text style={{ color: "#041337" }}> Login</Text>
              </Text>
            </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
