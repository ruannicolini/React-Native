import React, { Component } from 'react';
import { View, Picker, StyleSheet } from 'react-native';

export default class Operacao extends Component {
    render () {
        return(
            <Picker 
                style={ styles.operacao } 
                selectedValue={this.props.oper} //Obs. aqui usamos "THIS".props.nome pq é um componente de classe, se fosse um componente funcional, utilizariamos apenas props.oper pa estariamos recebendo props por parametro.
                onValueChange={ //Essa função é disparada ao selecionar uma opção de item
                    op =>{ this.props.atualizaOperacao(op); }
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