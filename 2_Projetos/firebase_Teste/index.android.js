import firebase from 'firebase';
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';

export default class App extends Component {

  componentWillMount () {
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

  cadastrarUsuario(){
    var email = "ruannicolini@gmail.com";
    var senha = "102313";
    const usuario = firebase.auth();
    usuario.createUserWithEmailAndPassword(email,senha).catch(
      (erroCapturado) => {
        var mensagemErro = ' ';
        if (erroCapturado.code =='auth/weak-password') {
          mensagemErro = 'A senha precisa ter no mínimo 6 caracteres.';
        }else{
          if (erroCapturado.code =='auth/invalid-email') {
            mensagemErro = 'Email inválido.';
          }else{
            if (erroCapturado.code =='auth/email-already-in-use') {
              mensagemErro = 'Email já cadastrado.';
            }else{
              if (erroCapturado.code =='auth/operation-not-allowed') {
                mensagemErro = 'Email/Senha não localizado.';
              }else{
    
              }
            }
          }  
        }

        alert(mensagemErro);
      }
    );
  }

  render() {
    return (
      <View >
          <Button 
            title='Cadastrado Usuário'
            color='#841584'
            onPress={ () => { this.cadastrarUsuario(); } } 
            accessibilityLabel='cadastrar usuarios'
          />
      </View>
    );
  }
}

AppRegistry.registerComponent('firebase_Teste', () => App);
