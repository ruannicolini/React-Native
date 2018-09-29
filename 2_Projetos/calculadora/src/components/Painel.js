import React, { Component} from 'react';
import { View, Text } from 'react-native';

import Entrada from './Entrada';
import Operacao from './Operacao';
import { Comando } from './Comando';

//Precisamos obter o valor dos TextInput do componente numero (dentro do componente ENTRADA)
//e fazer uma acao com ele, encadeada a partir do click no button dentro do componente COMANDO.

// Para isso, devemos cria var's de estados para os numeros (num1 e num2) dentro do componente que
// hierarquicamente encapsula os 2 componentes(ENTRADA e COMANDO), ou seja: Componente Painel.
//Entao passamos num1 e num2 como props para o componente ENTRADA, que por sua vez 
// passará o valor como a props num para o componente NUMERO.

// Quanto a acao desencadeada a partir do click do botao em COMANDO,
// criamos uma funcao dentro do componente que hierarquicamente encapsula os 2 componentes(ENTRADA e COMANDO), ou seja: Componente Painel.
// e passamos essa funcao como uma props para o componente COMANDO (props acao).
// Dentro do componente COMANDO, atribuimos a props acao ao evento onPress do botao. 
 
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