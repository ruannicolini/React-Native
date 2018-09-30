import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default props => (
    <View>
        <TextInput 
            style={styles.numero} 
            value={props.num} 
            onChangeText={ valorDoCampo => { props.atualizaValor(props.nome, valorDoCampo) } }
        />
    </View>
);

const styles = StyleSheet.create({
    numero: {
        width: 140,
        height: 80,
        fontSize: 20,
        textAlign: 'center'   
    }
});