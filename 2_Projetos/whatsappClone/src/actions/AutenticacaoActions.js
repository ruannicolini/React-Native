import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

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
        type: 'modifica_email',
        payload: texto
    }
}

export const modificaSenha = (texto) => {
    // console.log(texto);
    return {
        type: 'modifica_senha',
        payload: texto
    }
}

export const modificaNome = (texto) => {
    // console.log(texto);
    return {
        type: 'modifica_nome',
        payload: texto
    }
}

export const cadastraUsuario = ({ nome, email, senha }) => {
    // Como a função é sincrona, devemos usar um dispatch para que esse pedaço de codigo 
    // seja executado somente apos o retorno do cadastro.
    // Obs nao esqueca da applyMiddleware(ReduxThunk) no cadastro da createStore
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(user => cadastroUsuarioSucesso(dispatch))
        .catch(erro => cadastroUsuarioErro(erro, dispatch));
    }
    
}

const cadastroUsuarioSucesso = (dispatch) => {
    dispatch( {type: 'cadastro_usuario_sucesso'} );
    Actions.formBoasVindas();
}

const cadastroUsuarioErro = (erro,dispatch) => {
    dispatch( {type: 'cadastro_usuario_erro', payload: erro.message} );
}
