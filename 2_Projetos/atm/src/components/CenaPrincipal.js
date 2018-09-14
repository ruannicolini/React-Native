
import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  ScrollView,
  StyleSheet
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
                        <Image style={styles.estiloItemMenu} source = {menuCliente}/>
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
        margin: 10,
        padding: 10
    },
    estiloPanelMenu: {
        margin: 10,
        padding: 10,
        flexDirection: 'column',
        backgroundColor: 'green'
    },
    estiloRowMenu: {
        flexDirection: 'row'
    },
    estiloItemMenu: {
        margin: 10,
        padding: 10    
    }
})