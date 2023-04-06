import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
    styles={{
        container: {
       width:280,
        top: 200,
         
        position:"absolute"
      },
      textInputContainer: {
        flexDirection: 'row',
      },
      textInput: {
        backgroundColor: '#FFFFFF',
        height: 44,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontSize: 15,
        padding:25,
    
      },
      poweredContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderColor: '#c8c7cc',
        borderTopWidth: 0.5,
        display:"none"
      },
      powered: {},
      listView: {},
      row: {
        backgroundColor: '#FFFFFF',
        padding: 13,
        height: 44,
        flexDirection: 'row',
      },
      separator: {
        height: 0.5,
        backgroundColor: '#c8c7cc',
      },
      description: {},
      loader: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: 20,
      }
    }}
      fetchDetails={true}
      placeholder='Search Kims..'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyDTo39T8WgONi5TFpYeUJN2dMvTcATuO5o',
        language: 'en',
      }}
    
   
    />
  );
};

export default GooglePlacesInput;