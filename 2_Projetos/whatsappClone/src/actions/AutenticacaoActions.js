
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

export const cadastraUsuario = ({nome,email,senha}) =>{
    alert(nome);
    return{
        type: 'cadastra_usuario',
        payload:''
    }
}
