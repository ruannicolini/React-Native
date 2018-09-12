import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import ListaItens from './src/components/ListaItens.js';

export default class loja extends Component {
  render() {
    return (
      <ListaItens></ListaItens>     
    );
  }
}

AppRegistry.registerComponent('loja', () => loja);