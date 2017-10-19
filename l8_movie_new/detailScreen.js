import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import api from './api.js';

class DetailScreen extends Component {
  constructor(props){
    super(props);
    this.state = {};
    api.view(this.props.navigation.state.params.id).then((data)=>{
      this.setState(data);
    });
  }

  saperator(){
    return (
      <View style={{height:1, backgroundColor:'lightgray', margin:5}}/>
    );
  }

  static navigationOptions = {
    title: 'Movie Detail'
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
          <Image style={styles.image} source={{uri: `https://image.tmdb.org/t/p/w500` + this.state.poster_path}}/>
          <Text style={styles.subTitle}>Meta: {this.state.vote_count}</Text>
          <Text style={styles.subTitle}>imDB: {this.state.vote_average}</Text>
          </View>
        <View style={{flex:2, padding: 10}}>
          <Text style={styles.title}>{this.state.title} ({this.state.release_date})</Text>
          <Text>Genre: ({this.state.runtime})</Text>
          {this.saperator()}
          <Text>Released: {this.state.release_date} [{this.state.popularity}]</Text>
          {this.saperator()}
          <Text>{this.state.overview}</Text>
          {this.saperator()}
          <Text>Director: Unknown</Text>
          {this.saperator()}
          <Text>Writer: Unknown</Text>
          {this.saperator()}
          <Text>Actors: Unknown</Text>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 10,
    paddingTop:10,
    flexDirection: 'row'
  },
  image:{
    height: 200
  },
  title:{
    fontSize: 25
  },
  subTitle:{
    fontSize: 20
  }
});

export default DetailScreen;
