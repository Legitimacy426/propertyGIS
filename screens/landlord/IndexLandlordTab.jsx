import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './Dashboard';
import AddProperty from './AddProperty';
import { Ionicons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign'
import Logout from './Logout';
const Tab = createBottomTabNavigator();

export default function IndexLandlordTab() {
  return (
   
      <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard}
        options={{
          tabBarLabel: "Home",
          tabBarOptions: {
            activeTintColor: "#041337",
          },
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="md-home"
                size={24}
                color={tabInfo.focused ? "#041337" : "#8e8e93"}
              />
            );
          },
        }}
      />
      <Tab.Screen name="Add Property" component={AddProperty}
       options={{
        tabBarLabel: "Add property",
        tabBarOptions: {
          activeTintColor: "#041337",
        },
        tabBarIcon: (tabInfo) => {
          return (
            <AntDesign
            name="plussquare"
            size={24}
            color={tabInfo.focused ? "#041337" : "#8e8e93"}
          />
          );
        },
      }}
      />
       <Tab.Screen name="Logout" component={Logout}
       options={{
        tabBarLabel: "Logout",
        tabBarOptions: {
          activeTintColor: "#041337",
        },
        tabBarIcon: (tabInfo) => {
          return (
            <AntDesign
            name="plussquare"
            size={24}
            color={tabInfo.focused ? "#041337" : "#8e8e93"}
          />
          );
        },
      }}
      />
      </Tab.Navigator>

  );
}