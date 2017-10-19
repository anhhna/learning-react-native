import React from 'react';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.15

import ListScreen from './listScreen';
import DetailScreen from './detailScreen';

const SimpleApp = StackNavigator({
  List: { screen: ListScreen },
  Detail: { screen: DetailScreen }
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}