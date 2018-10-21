import React, {Component} from 'react';
import { View, TextInput, Button, Image, Text, ActivityIndicator } from 'react-native';
import { Actions }  from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, modificaNome, cadastraUsuario } from '../actions/AutenticacaoActions';

class formCadastro extends Component {

    _cadastraUsuario(){

        const { nome, email, senha} = this.props;

        // ou

        // const nome = this.props.nome;
        // const email = this.props.email;
        // const senha = this.props.senha;

        this.props.cadastraUsuario({nome,email,senha});
    }

    renderBtnCadastro(){

        if(this.props.loading_cadastro){
            return(
                <ActivityIndicator size="large" /> //large ou smal
            );
        }

        return(
            <Button title='Cadastrar' color='#115E54' onPress={ () =>  this._cadastraUsuario()  } />
        )

    }

    render(){
        return(
            <Image style={ {flex:1, width: null} } source={require('../imgs/bg.png')} >
                <View style={ { flex:1,padding:10 } }>
                    <View style={ {flex:4, justifyContent:'center'} }>

                        <TextInput value={this.props.nome} style={ {fontSize:20, height:45} }
                        onChangeText={(texto) => {this.props.modificaNome(texto)} }
                        placeholder='Nome' placeholderTextColor='#fff'
                        />

                        <TextInput value={this.props.email} style={ {fontSize:20, height:45} } 
                        onChangeText={(texto) => {this.props.modificaEmail(texto)} }
                        placeholder='E-mail' placeholderTextColor='#fff'
                        />

                        <TextInput value={this.props.senha} style={ {fontSize:20, height:45} } 
                        onChangeText={(texto) => {this.props.modificaSenha(texto)} }
                        placeholder='Senha' secureTextEntry placeholderTextColor='#fff'
                        /> 

                        <Text style={ {color:'#ff0000', fontSize:18} } >{this.props.erroCadastro}</Text>

                    </View>

                    
                    <View style={ {flex:1} }>
                        {this.renderBtnCadastro()}    
                    </View>

                </View>

                

            </Image>
        );
    }
}

const mapStateToProps = state => ({
    nome: state.AutenticacaoReducer.nome,
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha,
    erroCadastro: state.AutenticacaoReducer.erroCadastro,
    loading_cadastro: state.AutenticacaoReducer.loading_cadastro
});

export default connect(mapStateToProps, { modificaEmail, modificaSenha, modificaNome, cadastraUsuario } ) (formCadastro)