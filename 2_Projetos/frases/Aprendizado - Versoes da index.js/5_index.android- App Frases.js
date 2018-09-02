import React from 'react';
import {Alert, Text, View, AppRegistry, Image, TouchableOpacity } from 'react-native';

const Estilos  = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao:{
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop:20  
  },
  textoBotao:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
}

const gerarNovaFrase = () => {
  var numAleatorio = Math.random();
  numAleatorio = Math.floor(numAleatorio * 5); // Numeros entre 0 a 4
  
  var frases = Array();
  frases[0] = 'Frase 1';
  frases[1] = 'Frase 2';
  frases[2] = 'Frase 3';
  frases[3] = 'Frase 4';
  frases[4] = 'Frase 5';

  var fraseEscolhida =frases[numAleatorio];

  Alert.alert(fraseEscolhida);
}

const App = () => {
  const { principal, botao,textoBotao } = Estilos;
  return(
    <View style={principal}>
      <Image source={ require('./imgs/logo.png') } />  

      <TouchableOpacity 
      onPress={ gerarNovaFrase }
      style={botao}>
        <Text style={textoBotao}>Nova Frase</Text>
      </TouchableOpacity>

    </View>
  )

};

//Renderizar
AppRegistry.registerComponent('frases', () =>{ return App } )