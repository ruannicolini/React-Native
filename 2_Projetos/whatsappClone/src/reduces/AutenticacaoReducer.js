const INITIAL_STATE = {
    nome: 'Ruan',
    email: 'ruannicolini@gmail.com',
    senha: '102313'
}

//Os reducers recebem obrigatoriamente 2 parametros: o estado a ação e a acao que levara ao estado.

export default (state = INITIAL_STATE, action) => {
    return state;
}