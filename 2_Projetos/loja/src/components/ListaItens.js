import React, { Component } from 'react';
import {
  View, 
  Text
} from 'react-native';
import axios from 'axios';
import Itens from './Itens';

export default class ListaItens extends Component {
  

    constructor(props){
        super(props);
        this.state = { listaItens: [] };
    }

    componentWillMount (){
        //Requisição HTTP  

        // O catch e o then sao promessas de execução apor o get, then em caso de atribuição positiva, catch em caso negativo. 
        //Essas funções recebem como parametro outras fuções. No caso abaixo usamos a notação Arrow Function  
        //response é o objeto retornado
        axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
            .then(response => { this.setState( { listaItens : response.data }); })
            .catch( () => { console.log('Erro ao recuperar dados');  } );

    }
  
    render() {
    return (
        <View>
            { console.log( this.state.listaItens) }
        </View>    
    );
  }
}
