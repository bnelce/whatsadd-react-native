import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, Linking, Alert } from 'react-native';
import { Text, View } from '../components/Themed';



export default function TabOneScreen() {

  const [value, onChangeText] = useState('');

  const whatsApp = (phone) => {
    //Linking.openURL(`whatsapp://send?text=${text}&phone=${phone}`);
    if(value){
    Linking.openURL(`whatsapp://send?phone=55${phone}`);
    }else{
      Alert.alert('Please enter whatsapp number!');
    }

   }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
            <Text style={styles.title}>Whatsapp Easy Chat</Text>
        </View>
      </View>      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextInput
        style={{ width: 350, height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        keyboardType={"phone-pad"}
        placeholder=" (XX) X XXXX XXXX"
        value={value}
      />
      <Button
        color="#075e54"
        title="Send"
        onPress={() => whatsApp(value)}
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  header:{
    backgroundColor: "#075e54",
  },
  headerContent:{
    padding:40,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
