import React, { Component } from 'react';
import { View, Picker, StyleSheet } from 'react-native';

export default class Operacao extends Component {

    constructor(props){
        super(props);
        this.state = { oper: '' };
    }

    render () {
        return(
            <Picker style={ styles.operacao } selectedValue={this.state.oper} 
                onValueChange={ //Essa função é disparada ao selecionar uma opção de item
                    op =>{ this.setState({ oper : op }) } // Aqui estamos atribuindo o value do item a var de estado OPER
                }
            >
                <Picker.Item label = 'Soma' value = 'soma' />
                <Picker.Item label = 'Subtração' value = 'subtracao' />
            </Picker>
        
        );
    }
}



const styles = StyleSheet.create({
    operacao: {
        marginTop: 15,
        marginBottom:15
    }
});