import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  TextInput,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

class flexbox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{height:20}}/>
        <View style={styles.row}>
          <Image
            style={{height:100, width:100}}
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          />





        </View>
        <View style={styles.row}>
          <Image
            style={{height:100, width:100}}
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          />






        </View>
        <View style={styles.row}>
          <Image
            style={{height:100, width:100}}
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          />





        </View>
      </View>
    );
 }
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  row:{
    justifyContent: 'flex-start',
    flexDirectio: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  header:{
    fontSize:20,
    flexWrap: 'wrap'
  }
});

AppRegistry.registerComponent('flexbox', () => flexbox);
