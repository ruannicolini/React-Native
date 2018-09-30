import React from 'react';
import { View, Text } from 'react-native';

import Entrada from './Entrada';
import Operacao from './Operacao';
import { Comando } from './Comando';
 
const Painel = props => (
    <View>
        <Text>Painel</Text>
        <Entrada 
            num1={props.num1} 
            num2={props.num2} 
            atualizaValor={ props.atualizaValor }
        />
        <Operacao 
            oper ={props.oper} 
            atualizaOperacao = { props.atualizaOperacao } 
        />
        <Comando acao={props.acao} />
    </View>
);

export { Painel };