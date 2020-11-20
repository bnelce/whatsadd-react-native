import * as React from 'react';
import { StyleSheet, FlatList, TextInput, Button, Alert } from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';
import { Text, View } from '../components/Themed';


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

  const [value, onChangeText] = React.useState('Phone Number');

  const Item = ({ title, date }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{moment().startOf(date).fromNow()}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} date={item.date} />
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Header</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <Button
        title="Press me"
        onPress={() => Alert.alert('Submit in AsyncStorage')}
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <FlatList
        data={DATA}
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
