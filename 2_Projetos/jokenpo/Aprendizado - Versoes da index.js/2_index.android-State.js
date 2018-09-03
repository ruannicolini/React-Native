
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class MeuComponente extends Component{
  render(){
    return(
      <View>
        <Text> { this.props.parametro1 } </Text>
        <Text> { this.props.par2 } </Text>
        <Text> { this.props.props3 } </Text>
        <Text> { this.props.testeState} </Text>
      </View>
    );
  }
}



class jokenpo extends Component{
  
  constructor(props){
    super(props);
    this.state = { texto : 'Texto teste 2', outraVariavel: '123' };
  }
 
  alteraTexto = () => {
    this.setState( {texto : 'Outra coisa'} );  
  } 

  /* Propriedades sao passadas como parametros html e podem ser acessadas dentro do componente com this.props.NOME_PROPRIEDADE */
  render(){
    return (
      <View>
        <MeuComponente testeState = { this.state.texto } parametro1='Banana' par2='Abacaxi' props3='uva' > </MeuComponente> 
        <Button title='Botao' 
        onPress={ () => { this.alteraTexto() } }
        />
      </View>
    );  
  }
}

AppRegistry.registerComponent('jokenpo', () => jokenpo);
