
import React from 'react';
import { View, Text, TextInput, Button, TouchableHighlight } from 'react-native';
import { Actions }  from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha } from '../actions/AutenticacaoActions';

const formLogin = props => { 
    // console.log(props);   
    
    // No textinput temos a propriedade secureTextEntry, ela define se vamo colcoar segurança na senha e nao vamos exibir
    // pode-se passa assim: secureTextEntry={true} ou simplismente secureTextEntry, ja que é um booleano.
    
    return (
        <View style={ {flex : 1, padding : 10} } >

            <View style={ {flex : 1, justifyContent : 'center', alignItems : 'center'} } >
                <Text style={ { fontSize: 25 } } >WhatsApp Clone</Text>
            </View>

            <View style={ {flex : 2} } >

                <TextInput value={props.email} style={{ fontSize: 20, height: 45 }} placeholder='E-mail' 
                    onChangeText={texto  => { props.modificaEmail(texto) }}
                />

                <TextInput value={props.senha} style={ { fontSize: 20, height: 45 } } placeholder='Senha' 
                    onChangeText={texto  => { props.modificaSenha(texto) }}
                    secureTextEntry
                />

                <TouchableHighlight onPress={() => Actions.formCadastro() } >
                    <Text style={ { fontSize: 20 } } >Ainda não tem cadastro? Cadastre-se</Text>
                </TouchableHighlight>

            </View>

            <View style={ {flex : 2} } >
                <Button title="Acessar" color='#115E54'  />
            </View>

        </View>
);
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
);

export default connect(mapStateToProps, { modificaEmail, modificaSenha } ) (formLogin)