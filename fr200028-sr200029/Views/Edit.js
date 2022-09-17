import * as React from 'react';
import { Text, View, StyleSheet,TextInput,Button,SafeAreaView,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {useState} from 'react'

const Edit = ({ route, navigation }) => {
  const {item}=route.params;

const [name, onChangeName] = useState(item.name);
const [team, onChangeTeam] = useState(item.team);
const [country, onChangeCountry] = useState(item.country);
const [image, onChangeImage] = useState(item.image);



  return (
    <SafeAreaView>
      <Text>Ingrese el nombre del estadio</Text>
      <TextInput 
      style={styles.input} 
      placeholder="name"
      onChangeText={onChangeName}
      value={name}/>
      <Text>Ingrese el equipo del estadio</Text>
      <TextInput 
      style={styles.input} 
      placeholder="team"
      onChangeText={onChangeTeam}
      value={team}/>
      <Text>Ingrese la ciudad,pais del estadio</Text>
      <TextInput 
      style={styles.input} 
      placeholder="country"
      onChangeText={onChangeCountry}
      value={country}/>
      <Text>Ingrese la url de la imagen del estadio</Text>
      <TextInput 
      style={styles.input} 
      placeholder="image"
      onChangeText={onChangeImage}
      value={image}/>

      <View style={{ backgroundColor: 'blue', padding: 10 }}>
        <Button 
            title="Update"
            color="blue"
        onPress={ 
          () => {
            var url="https://api-example-udb.herokuapp.com/api/list/"+item.id;
        fetch(url, {
      method:'PUT',
      headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
               },
      body: JSON.stringify({
        name: name,
        team: team,
        country: country,
        image: image,
      })
    }).then((res)=>res.json()).then((resJson)=>{alert(resJson.message),navigation.navigate('List')});
    
    }
        }/>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default Edit;