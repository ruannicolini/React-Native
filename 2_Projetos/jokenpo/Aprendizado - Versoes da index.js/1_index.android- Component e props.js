
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class MeuComponente extends Component{
  render(){
    return(
      <View>
        <Text> { this.props.parametro1 } </Text>
        <Text> { this.props.par2 } </Text>
        <Text> { this.props.props3 } </Text>
      </View>
    );
  }
}

class jokenpo extends Component{
  render(){
    return (
      <MeuComponente parametro1='Banana' par2='Abacaxi' props3='uva' > </MeuComponente> /* Propriedades sao passadas como parametros html e podem ser acessadas dentro do componente com this.props.NOME_PROPRIEDADE */
    );  
  }
}

AppRegistry.registerComponent('jokenpo', () => jokenpo);
