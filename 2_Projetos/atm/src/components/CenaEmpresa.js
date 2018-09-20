
import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheEmpresa = require('../imgs/detalhe_empresa.png');


export default class CenaEmpresa extends Component {
    render() {
        return (
            <ScrollView style={ { flex: 1 ,backgroundColor: '#FFF' /*Estilo para efeito de transicao */ } } >
                <StatusBar 
                hidden={false} 
                backgroundColor='#EC7148'
                />

                <BarraNavegacao voltar pNavigator={ this.props.pNavigator } pCorFundo ='#EC7148'  /> 

                <View style ={styles.ItemPrincipal} >
                    <Image source={detalheEmpresa} />
                    <Text style={ styles.LetraItemPrincipal }>Empresa</Text>
                </View>

                <View style={ styles.ItemSecundario } >
                    <Text style={styles.textoItemSecundario}>Texto teste para demonstar dados da empresa. teste ok tudo certo, muito legal!</Text>
                </View>

            </ScrollView>
        );
      }
    }

const styles = StyleSheet.create({
    ItemPrincipal: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    LetraItemPrincipal: {
        fontSize: 25,
        color: '#EC7148',
        marginLeft:10
    },
    ItemSecundario: {
        marginTop: 20,
        marginLeft: 20
    },
    textoItemSecundario: {
        margin:10,
        marginLeft: 10,
        fontSize: 18
    }
})