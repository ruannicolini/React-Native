import React from 'react';
import {Text, View, AppRegistry, Image } from 'react-native';

const Estilos  = {
  principal: {
    paddingTop: 40
  },
  imagem: {
    justifyContent: 'flex-end'
  }
}

const App = () => {
  const { principal, imagem } = Estilos;
  return(
    <View  style={principal}>
      
      <Image style={imagem} source={ require('./imgs/uvas.png') }>
        <Text>Legenda para a foto</Text>
      </Image> 
           
    </View>
  )

};

//Imagem com Caminho Absoluto
/* <Image source={ {uri: 'https://facebook.github.io/react/logo-og.png'  } } style={{width: 400, height: 400}} /> */
     

//Renderizar
AppRegistry.registerComponent('frases', () =>{ return App } )