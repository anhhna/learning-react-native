import React, { Component } from 'react';
import {
  Navigator,
  TouchableHighlight,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
const routes = [{index:0, title:'First Screen'},
  {index:1, title:'Second Screen'}];
export default class l8_movie extends Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
        backgroundColor="darkred"
        barStyle="light-content"/>
      <Navigator
       initialRoute={routes[0]}
       initialRouteStack={routes}
       renderScene={(route, navigator) =>
          <TouchableHighlight style={styles.textContainer}
            onPress={() => {
                if (route.index == 0){
                  navigator.push(routes[1])
                }else{
                  navigator.pop();
                }}}>
              <Text>Hello {route.title}!</Text>
          </TouchableHighlight>
       }
       navigationBar={
         <Navigator.NavigationBar
          routeMapper={{
            LeftButton: (route, navigator, index, navState) => {
              if (route.index == 0){
                return null;
              }
              return (<TouchableHighlight onPress={()=>navigator.pop()}>
              <Text style={styles.navigationBarText}>Back</Text>
              </TouchableHighlight>);
            },
            RightButton: (route, navigator, index, navState) => {
              return null;
            },
            Title: (route, navigator, index, navState) => {
              return (<Text style={[styles.navigationBarText, styles.titleText]}>
                {route.title}</Text>);
            }
          }}
          style={styles.navigationBar}
         />
       }
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  navigationBar:{
    backgroundColor: 'darkred',
  },
  navigationBarText:{
    color: 'white',
    padding: 10,
    fontSize: 15
  },
  titleText:{
    fontSize: 20,
    paddingTop: 5
  },
  textContainer:{
    marginTop:60
  }
});

AppRegistry.registerComponent('l8_movie', () => l8_movie);
