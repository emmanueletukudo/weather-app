/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import {Home} from "./screens";

const theme  = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    border: "transparent",
  }
}

const Stack =  createStackNavigator();

const App = () => {

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator 
      initialRouteName = {'Home'}
      >
        <Stack.Screen name="Home" component={Home} options={{
          title: "Weather Log"
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (<App />)
}
