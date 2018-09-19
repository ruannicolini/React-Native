
import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  ScrollView,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {
    render() {
        return (
            <ScrollView>
                <StatusBar 
                hidden={false} // visivel = false |  OBS pode-se passar apenas "hidden" sem definir true ou false, nesse caso é false
                backgroundColor='#CCC'
                />

                <BarraNavegacao /> 

                <View style={ styles.estiloLogo }>
                    <Image source = {logo}/>
                </View>

                <View style={styles.estiloPanelMenu }>
                    <View style={styles.estiloRowMenu}>
                        <TouchableHighlight 
                            onPress={ () => {  //OnPress recebe uma função. Implementei uma função de callback
                                this.props.pNavigator.push( { id : 'b' }); // O navigator funciona como uma estrutura de dados pilha, a funcao push coloca uma cena no topo a ser executada. Acessamos o navigator atraves da prop crica "pNavigator"
                            } } 
                        >
                            <Image style={styles.estiloItemMenu} source = {menuCliente}/>
                        </TouchableHighlight>
                        <Image style={styles.estiloItemMenu} source = {menuContato}/>
                    </View>

                    <View style={styles.estiloRowMenu}>
                        <Image style={styles.estiloItemMenu} source = {menuEmpresa}/>
                        <Image style={styles.estiloItemMenu} source = {menuServico}/>
                    </View>
                </View>

            </ScrollView>
        );
      }
    }

const styles = StyleSheet.create({
    estiloLogo: {
        // marginTop: 10,
        margin: 20,
        marginBottom: 5,
        alignItems: 'center',
        // backgroundColor: 'black'
    },
    estiloPanelMenu: {
        marginRight: 20,
        marginLeft: 20,
        alignItems: 'center',
        flexDirection: 'column',
        // backgroundColor: 'green',
        // justifyContent: 'space-between'
    },
    estiloRowMenu: {
        flexDirection: 'row'
    },
    estiloItemMenu: {
        margin: 15  
    }
})