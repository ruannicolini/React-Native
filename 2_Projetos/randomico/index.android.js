// ================== importação notação ES6 ================== 
import React from 'react';
import {Text, View, Button, AppRegistry} from 'react-native'; //Atribuição Desestruturada

// ================== importação notação commonJS ================== 
// var React = require('react'); 
// var {Text, View, Button, AppRegistry} = require('react-native'); //Atribuição Desestruturada

// // Ou

// // Atribuicao de Variavel
// // var Text = require('react-native').Text;
// // var View = require('react-native').View;
// // var Button = require('react-native').Button;
// // var AppRegistry = require('react-native').AppRegistry;


// ================== Funções Notação Arrow Function ================== 

const geraNumeroAleatorio = () => {
  var numero_aleatorio = Math.floor(Math.random() * 10);
  alert(numero_aleatorio);
}


// ================== Funções Notação Padrao ==================
const App = function(){

  return (
    <View>
      <Text>Gerador de Números Randômicos</Text>
      <Button
        title="Gerar Numero Randomico"
        onPress={geraNumeroAleatorio} 
      />
    </View>
  );
};

AppRegistry.registerComponent('randomico', function(){ return App});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 /*
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class randomico extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('randomico', () => randomico);

*/