import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// export default props => (
const Cabecalho = props => (
    <View style={ styles.topo } >
        <Text style={ styles.txtTitulo } >Cabecalho</Text>
    </View>
);

const styles = StyleSheet.create({
    topo: {
        backgroundColor: '#2196F3',
        padding: 10,
        alignItems: 'center'
    },
    txtTitulo: {
        fontSize: 25,
        color:'#FFF'
    }
})

export{ Cabecalho };

// Obs: caso o retorno do componente seja por  
    // const Cabecalho = props => (
    //     <View style={ styles.topo } >
    //         <Text style={ styles.txtTitulo } >Cabecalho</Text>
    //     </View>
    // );

    //export{ Cabecalho }

//quando for chamar  essecomponente de outro lugar  tem que usar a notação abaixo "com chaves"
    //import { Cabecalho } from './Cabecalho';


//Caso seja por "export default props => ( ...", usar a notação abaixo "sem chaves"
    // export default props => (
    //  <View style={ styles.topo } >
    //        <Text style={ styles.txtTitulo } >Cabecalho</Text>
    //  </View>
    // );
//import Cabecalho from './Cabecalho';