
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

const ImagemDetalheCliente = require('../imgs/detalhe_cliente.png');
const Imagemcliente1 = require('../imgs/cliente1.png');
const Imagemcliente2 = require('../imgs/cliente2.png');

export default class CenaClientes extends Component {
    render() {
        return (
            <ScrollView style={ { flex: 1 ,backgroundColor: '#FFF' /*Estilo para efeito de transicao */ } } >
                <StatusBar 
                hidden={false} // visivel = false |  OBS pode-se passar apenas "hidden" sem definir true ou false, nesse caso é false
                backgroundColor='#B9C941'
                />

                <BarraNavegacao voltar pNavigator={ this.props.pNavigator } pCorFundo ='#B9C941'/> 

                <View style ={styles.ItemPrincipal} >
                    <Image source={ImagemDetalheCliente} />
                    <Text style={ styles.LetraItemPrincipal }>Nossos Clientes</Text>
                </View>

                <View style={ styles.ItemSecundario } >
                    <Image source={Imagemcliente1} />
                    <Text style={styles.textoItemSecundario}>Testo de Exemplo 1</Text>
                </View>

                <View style={ styles.ItemSecundario }  >
                    <Image source={Imagemcliente2} />
                    <Text style={styles.textoItemSecundario} >Texto de exemplo 2</Text>
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
        color: '#B9C941',
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