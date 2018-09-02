import React from 'react';
import { Text, View, AppRegistry, TouchableOpacity  } from 'react-native';

const Estilos  = {
  principal: {
    paddingTop: 40
  }, 

  botao: {
    backgroundColor: '#48BBEC',
    padding: 10,
    borderColor: '#1d8eb8', // Cor da Borda
    borderWidth: 1, // Tamanho da borda
    borderRadius: 8 //Arredondar o botao
  },

  textoBotao:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
  }

}

const botaoPrecionado = () => {
  alert('Botão precionado');
}

const App = () => {
  const { principal, botao, textoBotao } = Estilos;
  return(
    <View  style={principal}>
      <TouchableOpacity style = { botao }>
        <Text style={ textoBotao }>Clique aqui!</Text>
      </TouchableOpacity>  
    </View>
  )

};

//Renderizar
AppRegistry.registerComponent('frases', () =>{ return App } )