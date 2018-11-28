/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import {AsyncStorage} from 'react-native';
import * as Pref from './Pref'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {myKey: ''};
        AsyncStorage.getItem('myKey').then((myValue) => {
            this.setState({myKey: myValue});
        });
        this.saveData = this.saveData.bind(this);
    }

    saveData(myValue) {
        console.log('saveData' + myValue)
        AsyncStorage.setItem('myKey', myValue);
        this.setState({myKey: myValue});
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>myValue = {this.state.myKey}</Text>
                <TextInput onChangeText={(text) => this.saveData(text)}
                           value={this.state.myKey}></TextInput>
                <Text style={styles.instructions}>
                    Type something into the textbox. It will be saved to the device storage.
                    Next time you open the application, the saved data will be exist</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
