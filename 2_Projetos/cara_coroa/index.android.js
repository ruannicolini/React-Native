import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './src/components/Principal.js';
import SobreJogo from './src/components/SobreJogo.js';
import OutrosJogos from './src/components/OutrosJogos.js';

// A props inital do objeto scene define qual cena sera inicializada, caso essa propriedade nao seja informada, o router pega a primeira cena informada  */ 
export default class cara_coroa extends Component {
  render() {
    return (
      <Router>
        <Scene key='sobrejogo' component={ SobreJogo } />
        <Scene key='principal' component={ Principal } title="Cara ou Coroa" initial />
        <Scene key='outrosjogos' component={ OutrosJogos } />
      </Router>
    );
  }
}

AppRegistry.registerComponent('cara_coroa', () => cara_coroa);
