import React, { Component} from 'react';
import { View, Text } from 'react-native';

import Entrada from './Entrada';
import Operacao from './Operacao';
import { Comando } from './Comando';
 
class Painel extends Component {
    constructor(props){
        super(props);
        this.state = { num1 : '', num2: ''};
    }

    calcular(){
        console.log('oi,ok!');
    }

    render () {
        return(
            <View>
                <Text>Painel</Text>
                <Entrada num1={this.state.num1} num2={this.state.num2} />
                <Operacao />
                <Comando acao={this.calcular} />
            </View>
        );
    }
};

export { Painel };