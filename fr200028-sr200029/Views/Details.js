import { StyleSheet, View, SafeAreaView, ScrollView, Text, Button,Image } from 'react-native';
import React,{useState,useEffect} from 'react'
import { Avatar, ListItem } from 'react-native-elements';

export default function Details({navigation,route}) {
  
  const {stadium}=route.params;

  return (
    <SafeAreaView>
    <ScrollView>
      <View style={styles.container}>
     
        <Image 
        source={{uri:stadium.image}}
        style={styles.img}/>
        <Text style={styles.txttitle}>{stadium.name}</Text>
        <Text style={styles.txt}>{stadium.team}</Text>
        <Text style={styles.txt}>{stadium.country}</Text>
        <Button
          title="Delete"
          color="red"
         
          onPress={()=>{
            var url="https://api-example-udb.herokuapp.com/api/list/"+stadium.id;
            fetch(url,{
                method: 'DELETE'
                }).then((res)=>res.json()).then((resJson)=>alert(resJson.message)).then(navigation.navigate("List"))
          }}/>

          <View style={{marginTop:20}}>
            <Button
          title="Edit"
          color="blue"
          onPress={()=>navigation.navigate("Edit",{item:stadium})}/>
     </View>

     </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    margin:10,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    
  },
  img:{
    width:300, 
    height:200,
    borderRadius:10,
    borderWidth:3,
    borderColor:'black'
  },
  txt:{
    fontSize:16,
    marginBottom:10,
  },
  txttitle:{
    fontSize:22,
    margin:10,
  },
  button:{
    marginBottom: 10,
  }
});