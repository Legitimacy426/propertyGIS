import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import Main from "./screens/Main";
import Properties from "./screens/Properties";
import Map from "./screens/Map";
import Login from "./screens/Auth/Login";
import Register from "./screens/Auth/Register";
import IndexLandlordTab from "./screens/landlord/IndexLandlordTab";
import IndexAdmin from "./screens/admin/IndexAdmin";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: true }}
          />

          <Stack.Screen
            name="Main"
            component={Main}
            options={{ title: "Property" }}
          />
          <Stack.Screen
            name="Properties"
            component={Properties}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="landlord"
            component={IndexLandlordTab}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="admin"
            component={IndexAdmin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Map"
            component={Map}
            options={{ title: "Map View" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
