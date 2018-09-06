
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';


class jokenpo extends Component{

  constructor(props){
    super(props);
    this.state= { escolhaUsuario : '', 
      escolhaSistema : '',
      resultado : '' 
    }

  }

  jokenpo(varEscolha){
    // Gera Numero Aleatório
    var numAleatorio = Math.floor(Math.random() * 3);
    var LabelEscolhaSistema = '';
    
    switch(numAleatorio){
      case 0:{ 
        LabelEscolhaSistema = 'pedra';
        break;
      }
      case 1:{ 
        LabelEscolhaSistema = 'papel';
        break;
      }
      case 2:{ 
        LabelEscolhaSistema = 'tesoura';
        break;
      }
    }

    var resultado = '';

    if(LabelEscolhaSistema == varEscolha){
      resultado = 'Empate!';
    }else{
      if(LabelEscolhaSistema == 'pedra'){
        if(varEscolha == 'papel'){
          resultado = 'Você Ganhou!'
        }else{
          if(varEscolha == 'tesoura'){
            resultado = 'Você Perdeu!'
          }  
        }
      }else{
        if(LabelEscolhaSistema == 'papel'){
          if(varEscolha == 'pedra'){
            resultado = 'Você Perdeu!'
          }else{
            if(varEscolha == 'tesoura'){
              resultado = 'Você Ganhou!'
            }  
          }
        }else{
          if(LabelEscolhaSistema == 'tesoura'){
            if(varEscolha == 'pedra'){
              resultado = 'Você Ganhou!'
            }else{
              if(varEscolha == 'papel'){
                resultado = 'Você Perdeu!'
              }  
            }
          }
        }

      } 
    }

    this.setState( {escolhaUsuario: varEscolha, escolhaSistema: LabelEscolhaSistema, resultado: resultado } );  
    
  }

  render(){
    return (
      <View>
        
        <Topo></Topo>
        
        <View style={ styles.painelAcoes } >
          <View  style = { styles.btnEscolha }>
            <Button title ='Pedra' onPress={ () => { this.jokenpo('pedra') } } />
          </View>

          <View style={ styles.btnEscolha }>
            <Button title ='Papel' onPress={ () => { this.jokenpo('papel') } }/>
          </View>
          
          <View style = { styles.btnEscolha } >
            <Button title ='Tesoura' onPress={ () => { this.jokenpo('tesoura') } } />
          </View>
        </View>
        
        <View style={ styles.palco } > 
          <Text style= { styles.txtResultado } > { this.state.resultado } </Text>
          <Icone escolha={ this.state.escolhaUsuario } jogador='Você' > </Icone>
          <Icone escolha={ this.state.escolhaSistema } jogador='Computador' > </Icone>
          
        </View>

      </View>
      
    );  
  }
}

class Icone extends Component{
  render(){
    if( this.props.escolha == 'pedra'){
      return( 
        <View style={ styles.txtIcone }>
          <Text style={ styles.txtJogador} >{ this.props.jogador }</Text>
          <Image source={require('./img/pedra.png')} />
        </View> 
      ); 
    } else if(this.props.escolha == 'papel'){
      return( 
        <View style={ styles.txtIcone }>
          <Text style={ styles.txtJogador}>{ this.props.jogador }</Text>
          <Image source={require('./img/papel.png')} />
        </View>
      ); 
    }else if(this.props.escolha == 'tesoura'){
      return( 
        <View style={ styles.txtIcone}>
          <Text style={ styles.txtJogador}>{ this.props.jogador }</Text>
          <Image source={require('./img/tesoura.png')} />
        </View> 
      );
    }else{
      return false
    }
  }
}

class Topo extends Component{
  render(){
    return(
      <View> 
        <Image source = { require('./img/jokenpo.png') }/>  
      </View>
    );
  }
}

// class Conteudo extends Component{
//   render(){
//     return(
//       <View style={ styles.painelAcoes } >
//         <View  style = { styles.btnEscolha }>
//           <Button title ='Pedra' onPress={ () => { this.jokenpo('pedra') } } />
//         </View>

//         <View style={ styles.btnEscolha }>
//           <Button title ='Papel' onPress={ () => { this.jokenpo('papel') } }/>
//         </View>
        
//         <View style = { styles.btnEscolha } >
//           <Button title ='Tesoura' onPress={ () => { this.jokenpo('tesoura') } } />
//         </View>
//       </View>
//     );
//   }
// }

// class Footer extends Component{
//   render(){
//     return(
//       <View></View>
//     );
//   }
// }

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  palco:{
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60  
  },
  txtIcone:{
    alignItems: 'center',
    marginBottom: 20

  },
  txtJogador:{
    fontSize: 18
  } 
});

AppRegistry.registerComponent('jokenpo', () => jokenpo);
