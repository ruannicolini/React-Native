import {
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    MODIFICA_NOME,
    CADASTRO_USUARIO_SUCESSO,
    CADASTRO_USUARIO_ERRO, 
    LOGIN_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERRO
} from '../actions/types';

const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: '',
    erroLogin: ''
}

//Os reducers recebem obrigatoriamente 2 parametros: o estado a ação e a acao que levara ao estado.

export default (state = INITIAL_STATE, action) => {

    console.log(action);

    switch(action.type){
        case MODIFICA_EMAIL:
            return { ...state, email: action.payload }
        case MODIFICA_SENHA:
            return { ...state, senha: action.payload }
        case MODIFICA_NOME:
            return { ...state, nome: action.payload }
        case CADASTRO_USUARIO_SUCESSO:
            return { ...state, nome: '', senha: ''}
        case CADASTRO_USUARIO_ERRO:
            return { ...state, erroCadastro: action.payload}
        case LOGIN_USUARIO_ERRO:
            return { ...state, erroLogin: action.payload}
        default:
         return state;
    }
    
}