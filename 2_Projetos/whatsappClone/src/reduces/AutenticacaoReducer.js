const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: ''
}

//Os reducers recebem obrigatoriamente 2 parametros: o estado a ação e a acao que levara ao estado.

export default (state = INITIAL_STATE, action) => {

    console.log(action);
    
    if(action.type == 'modifica_email'){
        return { ...state, email: action.payload }  // ... é operador spread do javascript ES6 
    }

    if(action.type == 'modifica_senha'){
        return { ...state, senha: action.payload }
    }

    if(action.type == 'modifica_nome'){
        return { ...state, nome: action.payload }
    }

    return state;
}