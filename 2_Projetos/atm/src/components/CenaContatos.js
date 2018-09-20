
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

const detalheContato = require('../imgs/detalhe_contato.png');


export default class CenaContatos extends Component {
    render() {
        return (
            <ScrollView style={ { flex: 1 ,backgroundColor: '#FFF' /*Estilo para efeito de transicao */ } } >
                <StatusBar 
                hidden={false} 
                backgroundColor='#61DB8C'
                />

                <BarraNavegacao voltar pNavigator={ this.props.pNavigator } pCorFundo ='#61DB8C'  /> 

                <View style ={styles.ItemPrincipal} >
                    <Image source={detalheContato} />
                    <Text style={ styles.LetraItemPrincipal }>Contatos</Text>
                </View>

                <View style={ styles.ItemSecundario } >
                    <Text style={styles.textoItemSecundario}>Tel: (33)3256-0987</Text>
                    <Text style={styles.textoItemSecundario}>Cel: (33) 9-8767-0908</Text>
                    <Text style={styles.textoItemSecundario}>Email: teste@hotmail.com</Text>
                </View>

            </ScrollView>
        );
      }
    }

const styles = StyleSheet.create({
    ItemPrincipal: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    LetraItemPrincipal: {
        fontSize: 25,
        color: '#61DB8C',
        marginLeft:10
    },
    ItemSecundario: {
        marginTop: 20,
        marginLeft: 20
    },
    textoItemSecundario: {
        marginLeft: 20,
        fontSize: 18
    }
})