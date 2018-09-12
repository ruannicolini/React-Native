import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import ListaItens from './src/components/ListaItens';

class loja extends Component {
  render() {
    return (
      <ListaItens />    
    );
  }
}

AppRegistry.registerComponent('loja', () => loja);