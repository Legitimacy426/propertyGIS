import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { Marker } from 'react-native-maps';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Map() {
  const navigation = useNavigation()
  
  
  const { property, location, prop } = useRoute().params
  console.log('........',prop?.name,'.............')
  return (
    <View style={styles.container}>
          <MapView style={styles.map}
          
         
          >
   
    <Marker
    
    coordinate={{ latitude : location.locationlat , longitude : location.locationlong }}
      title={prop?.name}
      description={prop.description}
    />   
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});