import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, TextInput, Button, Alert } from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';
import { Text, Linking, View } from '../components/Themed';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '85 988075561',
    date:  '2020-11-20T07:50:24-03:00',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '85 9888775561',
    date: '2020-11-21T07:50:24-03:00'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '85 987654321',
    date:  '2020-11-22T07:50:24-03:00'
  },
];

export default function TabOneScreen() {

  const [value, onChangeText] = useState('Phone Number');
  const [ storeData, setStoreData ] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@storage_Key')
        setStoreData(jsonValue);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch(e) {
        // error reading value
      }
    }

    getData();
    console.log('useEffect', storeData);
  }, []);


  const Item = ({ title, date, id }) => (
    <View >
      <Text style={styles.title}>{id}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{moment().startOf(date).fromNow()}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} date={item.date} id={item.id} />
  )
  
  const handleAdd = async () => {
  }

  const clearAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      // clear error
    }
    console.log('Clear', storeData);
    console.log('Done. Clear!')
  }

  const whatsApp = () => {
    console.log('Clicado!');
    Linking.openURL( 'whatsapp://send?text="Oi"&phone="5585988775561"');
    //Linking.openURL(`whatsapp://send?text=${text}&phone=${phone}`);
    console.log('Enviado!');
   }
  


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Header</Text>
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextInput
        style={{ width: 350, height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <Button
        title="Enviar"
        onPress={handleAdd}
      />
      <Button
        title="Clear"
        onPress={clearAll}
      />
      <Button
        title="Whatsapp"
        onPress={() => whatsApp('oi','5585988775561')}
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <FlatList
        data={storeData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
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
