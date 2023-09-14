import React, { Component } from 'react';
import { StyleSheet, View, Text,SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import Inversiones from './screens/Inversiones';
import Registro from './screens/Registro';

const Stack = createStackNavigator();

export default class App extends Component {
render(){
  return(
      <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Inversiones" component={Inversiones} />
         <Stack.Screen name="Registro" component={Registro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}