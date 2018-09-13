
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StatusBar
} from 'react-native';

// IMPORTAR BARRA DE NAVEGAÇÃO
import BarraNavegacao from './src/components/BarraNavegacao';

export default class atm extends Component {
  render() {
    return (
      <View>
        <StatusBar 
          hidden={false} // visivel = false |  OBS pode-se passar apenas "hidden" sem definir true ou false, nesse caso é false
          backgroundColor='#CCC'
        />
        <BarraNavegacao /> 
      </View>
       
    );
  }
}

AppRegistry.registerComponent('atm', () => atm);
