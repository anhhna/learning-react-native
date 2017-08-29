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
      <View style={styles.outer}>
        <View style={styles.inner}>



        </View>
        <View style={[styles.inner, {alignItems:'flex-end'}]}>



        </View>
      </View>
    );
 }
}
const styles = StyleSheet.create({
  outer:{
    flex:1,



  },
  inner:{
    flex:1,



  },
  box:{
    width: 50,
    height: 50
  }
});

AppRegistry.registerComponent('flexbox', () => flexbox);
