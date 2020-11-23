import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native'

// import { Text, View } from '../components/Themed';

export default function TabThreeScreen() {

  return (
    <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'http://abneroliveira.eti.br/wp-content/uploads/2019/11/2302109-150x150.jpg'}}/>

                <Text style={styles.name}>Abner Oliveira </Text>
                <Text style={styles.userInfo}>abner.oliveira.ce@gmail.com </Text>
                <Text style={styles.userInfo}>Fortaleza - Ceará - Brasil </Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/fluent/70/000000/domain.png'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Site</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/instagram-new.png'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Instagram</Text>
              </View>
            </View>

            <View style={styles.item}>  
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/linkedin.png'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Linkedin</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/github.png'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Github</Text>
              </View>
            </View>

          </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  header:{
    backgroundColor: "#075e54",
  },
  headerContent:{
    padding:40,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#ffffff",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#ffffff",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#ffffff",
    height:500,
    alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:5,
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:5,
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  info:{
    fontSize:18,
    marginTop:20,
    color: "#075e54",
  }
});