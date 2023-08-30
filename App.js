import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { firebase } from './config';

import Login from "./src/Login";
import Registration from "./src/Registration";

import Landing from './src/components/Landing';
import Home from './src/components/Home';
import Reservation from './src/components/Reservation';
import RestaurantDetail from "./src/components/RestaurantDetail";
import Confirmation from './src/components/Confirmation';

const Stack = createStackNavigator();

function App(){
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user){
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{
          headerTitle: () => <Header name="Welcome"/>,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: '#00e4d0',
            shadowColor: '#000',
            elevation:25
          }
        }}
        />
        </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name="Registration" component={Registration} options={{
        headerTitle: () => <Header name="Welcome"/>,
        headerStyle: {
          height: 150,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          backgroundColor: '#00e4d0',
          shadowColor: '#000',
          elevation:25
        }
      }}
      />
      </Stack.Navigator>
  );
    }
export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
          <Stack.Screen name="Reservation" component={Reservation}/>
          <Stack.Screen name="Confirmation" component={Confirmation} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}