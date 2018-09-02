import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

//Formatações
const Estilos  = {
  
  principalView:{
    flex: 1,
    backgroundColor: 'cornflowerblue'

  },

  topo:{
    flex: 1, //define a proporção que o componente vai ocupar de espaço na tela. 
    //Por exemplo, se temos 3 componentes (A,B e C) no mesmo nivel (dentor de uma View, por exemplo), se flex de A = 1, flex de B = 3 e flex de C = 6,
    // O flex total = 10, logo A ocupará 1/10 da tela. B ocupará 3/10 da tela e C ocupará 6/10 da tela.  
    backgroundColor: 'brown'  
  },

  conteudo:{
    flex: 1,
    backgroundColor: 'yellowgreen'  
  },

  rodape:{
    flex: 1,
    backgroundColor: 'orangered'
  }

}

 /*
const Estilos  = {

  estiloView:{
    backgroundColor : 'skyblue',
    height: 300,
    
    justifyContent: 'center', // Alinha VERTICALMENTE o conteudo dentro da view. Possiveis valores: 'flex-start', 'center', 'flex-end','space-around' e 'space-between'
    alignItems: 'center', // Alinha HORIZONTALMENTE o conteudo dentro da view. Possiveis valores: 'flex-start', 'center', 'flex-end', 'stretch'
    flexDirection: 'row' // Define a direção do flex alinhaento, Recebe 'column' ou 'row' 
 
  },

  estiloTexto2: {
    fontSize: 40,
    backgroundColor: '#2A48FA',
    height:60,
    width:60
  },

  estiloTexto: {
    fontSize: 40,
    backgroundColor: '#08509B',
    height:60,
    width:60

    /*
 
    // color: "#fff",    
    // textAlign: 'center', // 'left','right','center','justify';
    // textDecorationLine: 'line-through', // 'underline', // Pode usar mais de um valor na propridade,
    // fontStyle: 'italic', // 'normal', 'italic'
    // fontWeight: 'bold', // Define a "Grossura" da fonte". Recebe 'bold' ou valores de 100 a 900;
    
    // shadowColor: '#000',
    // shadowOffset: {width:0, height:2}, // Width negativo: Lado Esquerdo | Width  Positivo: Lado Direito | height Negativo: Superior | height Positivo Inferior 
    // shadowOpacity: 0.4, // De 0 ate 1 - Define a "transparencia"
    // shadowRadius: 20, //  "Borrado"

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
    *\ -- Final aqui
  }
  
}
*/

const App = () => {
  //Exemplo de Aplicação de Estilo destructuring assign
  const { principalView, topo, conteudo, rodape } = Estilos;
  return(
    <View style={principalView}>
      <Text style={ topo } >Topo</Text>
      <Text style={ conteudo } >Conteudo</Text>
      <Text style={ rodape } >Rodape</Text>
    </View>
);

  // //Exemplo de Aplicação de Estilo 1
  // return(
  //     <View>
  //       <Text style={Estilos.estiloTexto} >Frases do Dia</Text>
  //     </View>
  // );
};

//Renderizar
AppRegistry.registerComponent('frases', () =>{ return App } )