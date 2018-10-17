import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import StockButton from './StockButton.js';
import API from './api.js';

export default class l6_stock extends Component {
    constructor(props){
        super(props);
        this.state = {stockName: 'MSFT', stockIndex:'0.00', stockChangeRaw:'+0.00', stockChangePercent:'+0.00'};
        this.changeIndex = this.changeIndex.bind(this);
        this.changeIndex('MSFT ', 'MSFT');
    }

    changeIndex(stockName, stockCode){
        API(stockCode).then((data) => {
            console.log(data);
            this.setState({...data, stockName});
        });
    }

    render(){
        let style = styles.red;
        if (this.state.stockChangeRaw[0] == '+'){
            style = styles.green;
        }

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.stockName}>{this.state.stockName}</Text>
                    <Text style={styles.stockIndex}>{this.state.stockIndex}</Text>
                    <Text style={[styles.stockChange, style]}>{this.state.stockChangeRaw} ({this.state.stockChangePercent})</Text>
                </View>
                <View style={styles.footer}>
                    <StockButton name="MSFT" code="MSFT" onPress={this.changeIndex}/>
                    <StockButton name="TCS" code="TCS" onPress={this.changeIndex}/>
                    <StockButton name="INFY" code="INFY" onPress={this.changeIndex}/>
                    <StockButton name="TTM" code="TTM" onPress={this.changeIndex}/>
                    <StockButton name="Apple" code="AAPL" onPress={this.changeIndex}/>
                    <StockButton name="Google" code="GOOG" onPress={this.changeIndex}/>
                    <StockButton name="FB" code="FB" onPress={this.changeIndex}/>
                    <StockButton name="BABA" code="BABA" onPress={this.changeIndex}/>
                    <StockButton name="IPC MEXICO" code="INDEXBMV:ME" onPress={this.changeIndex}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    stockName: {fontSize: 40},
    stockIndex: {fontSize: 80},
    stockChange: {fontSize: 40},
    container:{
        flex:1
    },
    header:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    footer:{
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    red:{
        color: 'red'
    },
    green:{
        color: 'green'
    }
});