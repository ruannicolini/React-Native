import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

const Estilos  = {
  principal: {
    paddingTop: 40
  }
}

const botaoPrecionado = () => {
  alert('Botão precionado');
}

const App = () => {
  const { principal } = Estilos;
  return(
    <View  style={principal}>
      <Button title="Clique aqui" 
        color = 'red'
        accessibilityLabel='Clique para abrir as notícias!'
        onPress = { botaoPrecionado } 
      />
    </View>
  );

};

//Renderizar
AppRegistry.registerComponent('frases', () =>{ return App } )