const INITIAL_STATE = {
    nome: 'Ruan',
    email: 'ruannicolini@gmail.com',
    senha: '102313'
}

//Os reducers recebem obrigatoriamente 2 parametros: o estado a ação e a acao que levara ao estado.

export default (state = INITIAL_STATE, action) => {

    console.log(action);
    
    if(action.type == 'modifica_email'){
        return { ...state, email: action.payload }
    }

    if(action.type == 'modifica_senha'){
        return { ...state, email: action.payload }
    }


    return state;
}