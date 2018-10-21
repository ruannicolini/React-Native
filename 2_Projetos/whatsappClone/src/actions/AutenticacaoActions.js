import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import {
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    MODIFICA_NOME,
    CADASTRO_USUARIO_SUCESSO,
    CADASTRO_USUARIO_ERRO, 
    LOGIN_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERRO,
    LOGIN_EM_ANDAMENTO,
    CADASTRO_EM_ANDAMENTO
} from './types';

//Actioncreate é a função que vai evoluir o estado, no caso, a função modificaEmail. 
//Action é o retorno dessa função.
// Cada actionCreate precisa retornar um objeto literal que tem que ter a chave 'type',
//A chave type (modifica_email) define como devemos evoluir o estado da aplicação 

// Podemos tbm passar dados atraves dessa action. Esses dados vao ser interceptado no reducer.
//A documentação sugere o nome de payload para esses dados, eles sao compostos de chave e valor.
//payload sao dados que podem ser utilizados dentro do reducer.

export const modificaEmail = (texto) => {
    // console.log(texto);
    return {
        type: MODIFICA_EMAIL,
        payload: texto
    }
}

export const modificaSenha = (texto) => {
    // console.log(texto);
    return {
        type: MODIFICA_SENHA,
        payload: texto
    }
}

export const modificaNome = (texto) => {
    // console.log(texto);
    return {
        type: MODIFICA_NOME,
        payload: texto
    }
}


export const cadastraUsuario = ({ nome, email, senha }) => {
    // Como a função é sincrona, devemos usar um dispatch para que esse pedaço de codigo 
    // seja executado somente apos o retorno do cadastro.
    // Obs nao esqueca da applyMiddleware(ReduxThunk) no cadastro da createStore

    //interpolação = igual a concatenação,operador cráse em firebase.database().ref(`/contatos/${emailB64}`) 

    return dispatch => {

        dispatch({ type: CADASTRO_EM_ANDAMENTO });

        firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(user => { 
            let emailB64 = b64.encode(email);

            firebase.database().ref(`/contatos/${emailB64}`) 
                    .push({ nome })
                    .then(value => cadastroUsuarioSucesso(dispatch) )
        })
        .catch(erro => cadastroUsuarioErro(erro, dispatch));
    }
    
}

const cadastroUsuarioSucesso = (dispatch) => {
    dispatch( {type: CADASTRO_USUARIO_SUCESSO} );
    Actions.formBoasVindas();
}

const cadastroUsuarioErro = (erro,dispatch) => {
    dispatch( {type: CADASTRO_USUARIO_ERRO, payload: erro.message} );
}

export const autenticarUsuario = ( {email,senha} ) => {
    console.log(email);
    console.log(senha);

    return dispatch => {

        dispatch({ type: LOGIN_EM_ANDAMENTO });

        firebase.auth().signInWithEmailAndPassword(email,senha)
            .then( value => loginUsuarioSucesso(dispatch) )
            .catch( erro => loginUsuarioErro(erro,dispatch) );
    }
}

const loginUsuarioSucesso = (dispatch) => {
    dispatch({
        type:LOGIN_USUARIO_SUCESSO
    });
    Actions.formPrincipal();
}

const loginUsuarioErro = (erro,dispatch) => {
    dispatch({
        type:LOGIN_USUARIO_ERRO, payload: erro.message
    });
}