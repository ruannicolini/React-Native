import firebase from 'firebase';
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = { pontuacao : 0 }
  }

  listarDados(){
    var pontuacao = firebase.database().ref('pontuacao');

    // Adicionar um listener: Um ouvinte para o nó.
    // O primeiro parametro é o tipo do evento disparado, que ppode ser: 
    // value, child_added, child_changed, child_removed, child_moved
    // O segundo parametro é uma funcao,aonde conseguimos recuperar os dados;
    // Toda vez que o firebase executar o evento informado para nó em questao, o react executara a função informada.
    pontuacao.on('value', (snapshot)=>{
        const valor = snapshot.val(); // recupera o valor
        this.setState( { pontuacao : valor} );

    } );
  }

  salvarDados(){
    // var database = firebase.database(); // Recupera o objeto que faz a persistencia dos dados
    // database.ref("pontuacao").set("200") ; // cria o nó pontuacao e seta/altera 100
    // database.ref("pontuacao").remove(); // Remove Dados

  
    var funcionarios = firebase.database().ref('funcionarios'); // Recupera o objeto que faz a persistencia dos dados
    // funcionarios.child("001").child("nome").set("Jamilton"); // Set ou atualiza
    // funcionarios.child("002").child("nome").set("Jorge");
    // funcionarios.child("001").remove(); // Remove o child 001;
    // funcionarios.remove(); // Remove completamente o nó de funcionários

    // O método push gera o ID, nesse caso nao precisamos definir como no caso acima.
    // funcionarios.push().child("nome").set("Ruan"); 

    //Podemos salvar um objeto literal tbm
    // funcionarios.push().set(
    //   {
    //     nome : 'Ruan',
    //     telefone : '33 991321006',
    //     cidade : 'Resplendor'
    //   }
    // ); 
    


  }

  componentWillMount(){
      var config = {
        apiKey: "AIzaSyAx_YvYauWIIdeQsQHA-SptN7d2ufyDJQ0",
        authDomain: "configuracaofirebasereac-b18ee.firebaseapp.com",
        databaseURL: "https://configuracaofirebasereac-b18ee.firebaseio.com",
        projectId: "configuracaofirebasereac-b18ee",
        storageBucket: "configuracaofirebasereac-b18ee.appspot.com",
        messagingSenderId: "810333801160"
      };
      firebase.initializeApp(config);
  }

  render() {
    
     let {pontuacao} = this.state; // substitui {this.state.pontuacao}

    return (
      <View >
          <Button 
            title='Salvar Dados'
            color='#841584'
            onPress={ () => { this.salvarDados(); } } 
            accessibilityLabel='Salvar dados'
          />
          <Button 
            title='Listar Dados'
            color='#841584'
            onPress={ () => { this.listarDados(); } } 
            accessibilityLabel='Salvar dados'
          />
          <Text>{pontuacao}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('firebase_Teste', () => App);
