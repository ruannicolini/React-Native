
import React, {Component} from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, Image } from 'react-native';
import { Actions }  from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions';


class formLogin extends Component { 

    _autenticarUsuario(){
        const {email, senha} = this.props; 
        this.props.autenticarUsuario({email, senha});
    }

    // console.log(props);   
    
    // No textinput temos a propriedade secureTextEntry, ela define se vamo colcoar segurança na senha e nao vamos exibir
    // pode-se passa assim: secureTextEntry={true} ou simplismente secureTextEntry, ja que é um booleano.
    

    //Obs: Apos adicionar a imagem como plano de fundo, perdemos a referencia de margim,podemos corrigir isso
    //passando width: null no style da imagem

    render(){

        return (

            <Image style={ {flex:1, width: null} } source={require('../imgs/bg.png')} >
                <View style={ {flex : 1, padding : 10} } >
    
                    <View style={ {flex : 1, justifyContent : 'center', alignItems : 'center'} } >
                        <Text style={ { fontSize: 25, color:'#fff' } } >WhatsApp Clone</Text>
                    </View>
    
                    <View style={ {flex : 2} } >
    
                        <TextInput value={this.props.email} style={{ fontSize: 20, height: 45 }} 
                            onChangeText={texto  => { this.props.modificaEmail(texto) }}
                            placeholder='E-mail' placeholderTextColor='#fff'
                        />
    
                        <TextInput value={this.props.senha} style={ { fontSize: 20, height: 45 } }  
                            onChangeText={texto  => { this.props.modificaSenha(texto) }}
                            secureTextEntry
                            placeholder='Senha' placeholderTextColor='#fff'
                        />

                        <Text style={ {color:'#ff0000', fontSize:18} } > 
                            {this.props.erroLogin} 
                        </Text>
    
                        <TouchableHighlight onPress={() => Actions.formCadastro() } >
                            <Text style={ { fontSize: 20, color:'#fff' } } >Ainda não tem cadastro? Cadastre-se</Text>
                        </TouchableHighlight>
    
                    </View>
    
                    <View style={ {flex : 2} } >
                        <Button title="Acessar" color='#115E54' 
                        onPress = { () => this._autenticarUsuario() }/>
                    </View>
    
                </View>
            </Image>
        );

    }
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin
    }
);

export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario } ) (formLogin)