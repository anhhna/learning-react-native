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



      </View>
    );
 }
}
const styles = StyleSheet.create({
  container:{



  
  },
  headline:{
    fontSize:40
  }
});

AppRegistry.registerComponent('flexbox', () => flexbox);
