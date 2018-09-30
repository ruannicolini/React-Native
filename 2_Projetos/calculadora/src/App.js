import React, { Component } from 'react';
import  { View } from 'react-native';

import { Topo as Header, Resultado, Painel } from './components';
//Quando nao informamos, por padrao ele busca a index,
//Na pratica é como que 
// import { Topo as Header, Resultado, Painel } from './components';
// fosse igual a 
// import { Topo as Header, Resultado, Painel } from './components/index';

//        ----- / / -------

//Precisamos obter o valor dos TextInput do componente numero (dentro do componente ENTRADA)
//e fazer uma acao com ele, encadeada a partir do click no button dentro do componente COMANDO.

// Para isso, devemos cria var's de estados para os numeros (num1 e num2) dentro do componente que
// hierarquicamente encapsula os 2 componentes(ENTRADA e COMANDO), ou seja: Componente Painel.
//Entao passamos num1 e num2 como props para o componente ENTRADA, que por sua vez 
// passará o valor como a props num para o componente NUMERO.

// Quanto a acao desencadeada a partir do click do botao em COMANDO,
// criamos uma funcao dentro do componente que hierarquicamente encapsula os 2 componentes(ENTRADA e COMANDO), ou seja: Componente Painel.
// e passamos essa funcao como uma props para o componente COMANDO (props acao).
// Dentro do componente COMANDO, atribuimos a props acao ao evento onPress do botao. 

export default class App extends Component {

    constructor(props){
        super(props);

        this.state = { num1 : '10', num2: '5', oper: 'soma', resultado: '' };

        // Como passamos a funcao calcula como props (acao) para o componente COMANDO,
        // o javascript intende que o conexto deve ser mudado;
        // e como dentro da função calcular usamos os valores this.state.num1 e this.state.num2, ele tenta
        // acessar os valores this.state.num1 e this.state.num2 do componente COMANDO, e dentro do 
        // componente COMANDO nao existe essas var de estado. Essa situacao é definida como contexto lexico
        //Para amarrar o contexto a um componente especifico, utilizamos o codigo abaixo.
        this.calcular = this.calcular.bind(this);
        this.atualizaValor = this.atualizaValor.bind(this);
        this.atualizaOperacao = this.atualizaOperacao.bind(this);
    }

    calcular () {
        let resultado = 0;
        switch (this.state.oper) {
            case 'soma':
                resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
                break
            case 'subtracao':
                resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
                break

            default:
                resultado = 0;
        }
        
        this.setState({ resultado : resultado.toString() });

    }

    atualizaValor (nomeCampo, numero) {

        // Obs: o javascript nao entende que na função this.setStates os indices do 
        // objeto literal podem ser variaveis, 
        // entao nao podemos simplismente codificar this.setState({ nomeCampo: numero });

        // Devemos criar um objeto literal e atribuir os indices e valores, como no exemplo abaixo: 
        const obj = {};
        obj[nomeCampo] = numero

        //Depois entao atribuir esse valor a variaveis de estado
        this.setState( obj );
    }

    atualizaOperacao (valorOp) {
        this.setState( { oper : valorOp});
    }

    render () {
        return(
            <View>
                <Header />
                <Resultado resultado = { this.state.resultado }/>
                <Painel 
                    num1={this.state.num1} 
                    num2={this.state.num2} 
                    oper ={this.state.oper}
                    acao={this.calcular}  
                    atualizaOperacao = { this.atualizaOperacao }
                    atualizaValor={ this.atualizaValor } 
                />
            </View>
        );
    }
}
