
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

const detalheServico = require('../imgs/detalhe_servico.png');


export default class CenaServicos extends Component {
    render() {
        return (
            <ScrollView style={ { flex: 1 ,backgroundColor: '#FFF' /*Estilo para efeito de transicao */ } } >
                <StatusBar 
                hidden={false} 
                backgroundColor='#19D1C8'
                />

                <BarraNavegacao voltar pNavigator={ this.props.pNavigator } pCorFundo ='#19D1C8' /> 

                <View style ={styles.ItemPrincipal} >
                    <Image source={detalheServico} />
                    <Text style={ styles.LetraItemPrincipal }>Contatos</Text>
                </View>

                <View style={ styles.ItemSecundario } >
                    <Text style={styles.textoItemSecundario}>- Consultoria</Text>
                    <Text style={styles.textoItemSecundario}>- Processos</Text>
                    <Text style={styles.textoItemSecundario}>- Acompanhamento de Projetos</Text>
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
        color: '#19D1C8',
        marginLeft:10
    },
    ItemSecundario: {
        marginTop: 20,
        marginLeft: 20
    },
    textoItemSecundario: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 18
    }
})