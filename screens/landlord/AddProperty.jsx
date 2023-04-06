import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    Image,
    TouchableOpacity,
    SafeAreaView,
 
  } from "react-native";
  import AntDesign from '@expo/vector-icons/AntDesign';
  import { Picker } from "@react-native-picker/picker";
  import React, { useState,useEffect } from "react";
  import * as ImagePicker from "expo-image-picker";
 
  import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
  import { addDoc, collection, getDocs, query,serverTimestamp,where } from "firebase/firestore"

import { useNavigation } from "@react-navigation/native";
import { db } from "../firebaseConfig";
import propertyList from "../data/property";
import places from "../data/places";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { ScrollView } from "react-native";
  const storage = getStorage()
  
const AddProperty = () => {
  const random = Math.random()/100

  const navigation = useNavigation()
  const [selectedConstituency, setSelectedConstituency] = useState('');
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('')
  
    const [phone, setPhone] = useState('')
  
    const [name,setHeadline] = useState('')
 
    const [uploading, setUploading] = useState(false)
      const [filenames, setFileName] = useState('')
    const [selectedProperty, setSelectedProperty] = useState('')
    
    const handleSubmit = () => {
        console.log(selectedConstituency,'place')
        console.log(selectedProperty, 'property')
        upload()
    }
  
    
    const pick = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality:1
      })
      const source = { uri: result.uri }
   
      setImage(source)
      
    }
    const upload = async () => {
      setUploading(true)
      if (!selectedConstituency || !description || !image || !selectedProperty || !name) {
        alert("All fields are required")
        return
      }
      
      alert("posting please wait...")
  
      const response = await fetch(image.uri)
      const blob = await response.blob()
      const filename = image.uri.substring(image.uri.lastIndexOf('/') + 1)
     
          const storageRef = ref(storage, filename);
          uploadBytes(storageRef, blob).then( (snapshot) => {
          console.log('uploaded');
              getDownloadURL(snapshot.ref).then(url => {
                const imageUrl = url
                const long = selectedConstituency.longitude
                const lat = selectedConstituency.latitude
                const post = {
                  userId:"landlord",
                  image: imageUrl,
                  description: description,
                  createdAt: serverTimestamp(),
                  status: "Pending",
                  location: selectedConstituency.location,
                  label: selectedConstituency.label,
                  property: selectedProperty.name,
                  latitude: lat,
                  longitude: long,
                  phone: phone,
                  name:name
                }
                const postRef = collection(db, "properties")
                addDoc(postRef, post).then(() => {
                  alert("Property added")
                })
                  .catch((e) => {
                  console.log(e)
                })
          });
          }).catch(err => {
              console.log(err)
          })
     
      setUploading(false)
   
      setFileName(filenames)
      setImage(null)
  
     
  }
  
    return (
      <View style={styles.wrapper}>
 
          
          <SafeAreaView
            showsVerticalScrollIndicator={false}
          
          >
             {
      places.map((item)=> <View item={item.label}/>)
    }
            <Text style={{ marginBottom: 10 }}>Location</Text>
            <GooglePlacesAutocomplete
              styles={{
                container: {
                  width: 372,
                  flex: 1,
                  overflow: "scroll",
                  marginTop: 20,
                  zIndex: 122,
                  position: "absolute",
               
                 
                 
                },
                textInputContainer: {
                  flexDirection: "row",
                },
                textInput: {
                  padding:10,
      marginTop:5,
      borderColor: "black",
      borderWidth: 1,
      backgroundColor: "white",
      marginBottom: 14,
      borderRadius:5
                },
                poweredContainer: {
                  justifyContent: "flex-end",
                  alignItems: "center",
                  borderBottomRightRadius: 5,
                  borderBottomLeftRadius: 5,
                  borderColor: "#c8c7cc",
                  borderTopWidth: 0.5,
                  display:"none"
                },
                powered: {},
                listView: {},
                row: {
                  backgroundColor: "white",
                  padding: 13,
                  height: 44,
                  flexDirection: "row",
                  marginTop:-1,
                 
                 
                  overflow:"hidden"
                },
                separator: {
                  height: 0.5,
                  backgroundColor: "black",
                },
                description: {},
                loader: {
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  height: 20,
                },
              }}
              fetchDetails={true}
              placeholder="  Where do you want to add property ?"
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
                setSelectedConstituency(selected)
              }}
              query={{
                key: "AIzaSyDTo39T8WgONi5TFpYeUJN2dMvTcATuO5o",
                language: "en",
              }}
            />
            

                    <View >
                    <Text style={{marginBottom:10,marginTop:50}}>Property Category</Text>
             <Picker
   style={{borderColor:"black",borderWidth:1,backgroundColor:"#0413373b",marginBottom:10}}
              selectedValue={selectedProperty}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedProperty(itemValue)
              }
            >
              <Picker.Item label="Select a property category..." value={null} />
              {propertyList.map((property, index) => (
                <Picker.Item
                  key={index}
                  label={property.name}
                  value={property}
                />
              ))}
                        </Picker>
                      
                       
        <Text style={{marginBottom:10}}>Name </Text>
      <TextInput
            style={styles.input}
          placeholder="Eg Meru slopes"
          onChangeText={setHeadline}
          multiline={true}
            />
        <Text style={{marginBottom:10}}>Contact Phone Number </Text>
      <TextInput
            style={styles.input}
          placeholder="Eg 0746121317"
          onChangeText={setPhone}
          multiline={true}
            />
            <Text style={{marginBottom:10}}>Description </Text>
      <TextInput
            style={styles.input}
          placeholder="Write something..."
          onChangeText={setDescription}
          multiline={true}
        />
      
     
             
        <TouchableOpacity onPress={pick} style={{alignItems:"center",marginTop:15}}>
          <AntDesign name="plussquare" size={20} color="#041337" />
          <Text>Upload photo</Text>
        </TouchableOpacity>
        
        {image && <Image source={{ uri: image.uri }} style={styles.image} />}
  
  
          <TouchableOpacity style={styles.login} onPress={handleSubmit}>
                 <Text style={{color:"white"}}> Add Property</Text>
              </TouchableOpacity>
      </View>     
    </SafeAreaView>
          
  
    
    </View>
     
    );
  };
  const styles = StyleSheet.create({
    container: {
      margin: 20,
    
      
    },
    wrapper: {
      padding: 20,
      backgroundColor: "white",
      flex: 1
    
    },
    selectList: {
      display:"none"
    },
    input: {
      padding:10,
      marginTop:5,
      borderColor: "black",
      borderWidth: 1,
      backgroundColor: "white",
      marginBottom: 14,
      borderRadius:5
    },
    login: {
      backgroundColor: "#041337",
      padding: 15,
      
      alignSelf: "center",
      marginTop: 20,
      color: "white",
      borderRadius: 5,
      width: 350,
      justifyContent: "center",
      alignItems:"center"
    },
    image: {
      flex: 1,
      borderWidth: 1,
      borderColor: "black",
      minHeight:200
    }
  });
  
  export default AddProperty;
  