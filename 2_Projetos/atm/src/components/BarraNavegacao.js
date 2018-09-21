
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';

const btnVoltar = require('../imgs/btn_voltar.png');

export default class BarraNavegacao extends Component {
  render() {
    if (this.props.voltar){
      return (
        <View style={ [styles.barraTitulo, {backgroundColor: this.props.pCorFundo}] }>

          <TouchableHighlight 
              onPress={ () => {  //OnPress recebe uma função. Implementei uma função de callback
                  this.props.pNavigator.pop(); // a funcao pop remove a cena do topo da pilha de cenas do navigator
              } } 
              underlayColor={this.props.pCorFundo} // Cor ao ser clicado
              activeOpacity={0.3} //Grau de Opacitadade ao ser clicado
          >
            <Image source= {btnVoltar } />
          </TouchableHighlight>

          
          <Text style={ styles.titulo } >ATM Consultoria</Text>
        </View>
      );
    }
   
    return (
      <View style={styles.barraTitulo}>
        <Text style={ styles.titulo } >ATM Consultoria</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    barraTitulo: {
        backgroundColor: '#CCC',
        padding: 10,
        height: 60,
        flexDirection: 'row'
    },
    titulo: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        color: '#000'
    }
})
