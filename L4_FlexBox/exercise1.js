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

        <__________
          style={{height:100, width:100}}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />

        <____ style={styles.text}>__________________</_____>

      </View>
    );
 }
}
const styles = StyleSheet.create({
  container:{
    margin:20,
    backgroundColor: '_________',
    borderWidth: 2,
    borderColor: '_______',
    borderRadius: 20,
    padding: 10
  },
  text:{
    fontSize:20
  }
});

AppRegistry.registerComponent('flexbox', () => flexbox);
