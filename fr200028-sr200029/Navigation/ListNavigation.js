import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import List from '../Views/List';
import Details from '../Views/Details';
import Edit from '../Views/Edit';


export default function ListNavigation() {

  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
    
  }}>
      <Stack.Screen name='List' component={List}options={{headerShown:false}} />
      <Stack.Screen name='Details' component={Details}/>
      <Stack.Screen name="Edit" component={Edit} />

    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
 
 
});