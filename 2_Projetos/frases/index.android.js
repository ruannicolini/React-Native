import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

//Formatações
const Estilos  = {
  estiloTexto: {
    fontSize: 40,
    backgroundColor: '#08509B',
    margin:0,
    paddingTop:15,
    color: "#fff",
    
    textAlign: 'center', // 'left','right','center','justify';

    textDecorationLine: 'line-through', // 'underline', // Pode usar mais de um valor na propridade,

    fontStyle: 'italic', // 'normal', 'italic'
    fontWeight: 'bold', // Define a "Grossura" da fonte". Recebe 'bold' ou valores de 100 a 900;
    
    // shadowColor: '#000',
    // shadowOffset: {width:0, height:2}, // Width negativo: Lado Esquerdo | Width  Positivo: Lado Direito | height Negativo: Superior | height Positivo Inferior 
    // shadowOpacity: 0.4, // De 0 ate 1 - Define a "transparencia"
    // shadowRadius: 20, //  "Borrado"

    /*
    // height:300,
    // width:300,

    //padding: 30, // ou 
    // paddingHorizontal:30,
    // paddingVertical:30, //ou
    paddingTop: 30, 
    paddingLeft: 30, 
    paddingBottom: 30,
    paddingRight: 30,

    //margin:30, // ou 
    // marginHorizontal:30,
    // marginVertical:30, //ou
    marginTop: 30, 
    marginLeft: 30, 
    marginBottom: 30,
    marginRight: 30
    */
  }
}

const App = () => {
  return(
      <View>
        <Text style={Estilos.estiloTexto} >Frases do Dia</Text>
      </View>
  );
};

//Renderizar
AppRegistry.registerComponent('frases', () =>{ return App } )