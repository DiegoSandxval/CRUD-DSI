import { StyleSheet, View, SafeAreaView, ScrollView, Text, Button } from 'react-native';
import React,{useState,useEffect} from 'react'
import { Avatar, ListItem } from 'react-native-elements';

export default function List({navigation}) {

  const [data,SetData]=useState([]);

  function refreshPage() {
    window.location.reload(false);
  }


    var url="https://api-example-udb.herokuapp.com/api/list";

    fetch(url).then((res)=> res.json()).then((resJson)=>SetData(resJson))

  return (

    <SafeAreaView>
    <ScrollView>
      <View style={styles.container}>
        <Button
      title="Refresh"
      color="green"
      onPress={()=>refreshPage()}/>
        {
          data.map((stadiums,i)=>(
            <ListItem key={i} bottomDivider onPress={()=>navigation.navigate("Details",{stadium:stadiums})}>
            <Avatar rounded source={{uri: stadiums.image}}></Avatar>
            <ListItem.Chevron/>
              <ListItem.Content>
                <ListItem.Title>{stadiums.name}</ListItem.Title>
                <ListItem.Subtitle>{stadiums.country}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          )
          )
        }
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
 
});