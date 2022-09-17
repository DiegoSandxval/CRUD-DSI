import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ListNavigation from './ListNavigation';
import FilterNavigation from './FilterNavigaton';
import Add from '../Views/Add';

export default function DrawerNavigation() {

  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='List' component={ListNavigation}/>
      <Drawer.Screen name='Add' component={Add}/>
      <Drawer.Screen name='Filter' component={FilterNavigation}/>
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
 
 
});