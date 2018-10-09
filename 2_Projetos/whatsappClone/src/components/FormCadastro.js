import React from 'react';
import { View, TextInput, Button, Image } from 'react-native';
import { Actions }  from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, modificaNome } from '../actions/AutenticacaoActions';

const formCadastro = props => (
    <Image style={ {flex:1, width: null} } source={require('../imgs/bg.png')} >
        <View style={ { flex:1,padding:10 } }>
            <View style={ {flex:4, justifyContent:'center'} }>
                <TextInput value={props.nome} style={ {fontSize:20, height:45} } placeholder='Nome' 
                onChangeText={(texto) => {props.modificaNome(texto)} }
                />
                <TextInput value={props.email} style={ {fontSize:20, height:45} } placeholder='E-mail' 
                onChangeText={(texto) => {props.modificaEmail(texto)} }
                />
                <TextInput value={props.senha} style={ {fontSize:20, height:45} } placeholder='Senha' 
                onChangeText={(texto) => {props.modificaSenha(texto)} }
                secureTextEntry
                /> 
            </View>
            <View style={ {flex:1} }>
                <Button title='Cadastrar' color='#115E54' onPress={ () => { false } } />
            </View>
        </View>
    </Image>
);

const mapStateToProps = state => ({
    nome: state.AutenticacaoReducer.nome,
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha
});

export default connect(mapStateToProps, { modificaEmail, modificaSenha, modificaNome } ) (formCadastro)