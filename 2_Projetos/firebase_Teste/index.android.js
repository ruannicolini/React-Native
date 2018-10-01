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
              }
              
            }
          }  
        }

        alert(mensagemErro);
      }
    );
  }

  verificarUsuarioLogado(){
    const usuario = firebase.auth();

    // Primeira forma para saber se o usuario esta logado
    // const usuarioAtual = usuario.currentUser; // usuario Logado
    // if ( usuarioAtual ) {
    //   //UsuarioAtual nao é nulo
    //   alert('ok');
    // }else{
    //   //UsuarioAtual é nulo, logo ninguem esta logado
    //   alert('usuario nao logado.');
    // }

    //Segunda maneira: Adicionando um listener
    usuario.onAuthStateChanged(
      (usuarioAtual) => {
        if ( usuarioAtual ) {
          //UsuarioAtual nao é nulo
          alert('Usuário Logado');
        }else{
          //UsuarioAtual é nulo, logo ninguem esta logado
          alert('usuario nao logado.');
        }
      }
    );

  }

  logarUsuario(){
    var email = "ruannicolini@gmail.com";
    var senha = "102313";
    const usuario = firebase.auth();  
    usuario.signInWithEmailAndPassword(email,senha).catch(
      (erroCapturado) => {
        var mensagemErro = ' ';
        if (erroCapturado.code =='auth/user-disabled') {
          mensagemErro = 'Email desabilitado.';
        }else{
          if (erroCapturado.code =='auth/invalid-email') {
            mensagemErro = 'Email inválido.';
          }else{
            if (erroCapturado.code =='auth/user-not-found') {
              mensagemErro = 'Usuário não encontrado.';
            }else{
              if (erroCapturado.code =='auth/wrong-password') {
                mensagemErro = 'Senha Inválida.';
              }

            }
          }  
        }

        alert(mensagemErro);
      }
    );
    
  }

  deslogarUsuario(){
    const usuario = firebase.auth();
    usuario.signOut();
  }

  render() {
    return (
      <View>
        <View style={ { margin:10, marginTop:20 } } >
            <Button 
              title='Cadastrado Usuário'
              color='#841584'
              onPress={ () => { this.cadastrarUsuario(); } } 
              accessibilityLabel='cadastrar usuarios'
            />
        </View>

        <View style={ { margin:10 } } >
          <Button 
            title='Verificar Usuario Logado'
            color='#841584'
            onPress={ () => { this.verificarUsuarioLogado(); } } 
            accessibilityLabel='verificar Usuario Logado'
          />
        </View>

        <View style={ { margin:10 } } >
          <Button 
            title='Deslogar Usuário'
            color='#841584'
            onPress={ () => { this.deslogarUsuario(); } } 
            accessibilityLabel='deslogar usuário'
          />
        </View>

        <View style={ { margin:10 } } >
          <Button 
            title='Logar Usuário'
            color='#841584'
            onPress={ () => { this.logarUsuario(); } } 
            accessibilityLabel='logar usuário'
          />
        </View>

      </View>
    );
  }
}

AppRegistry.registerComponent('firebase_Teste', () => App);
