import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Rotas from './src/Rotas.js';

export default class cara_coroa extends Component {
  render() {
    return (
      <Rotas />
    );
  }
}

AppRegistry.registerComponent('cara_coroa', () => cara_coroa);
