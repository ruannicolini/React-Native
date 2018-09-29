
import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default class Visor extends Component {

    constructor(props){
        super(props);
        this.state = { resultado : '' }; //criação da variavel resultado, recebendo vazio ou outro valor caso queira
    }

    render () {
        return ( 
            <View>
                <TextInput style={ styles.visor } 
                    placeholder='descricao' //Texto para descricao do campo
                    // editable = { false }
                    value={this.state.resultado} //Dizemos que o value desse componente é baseado no estado de resultado;
                    // Entao o react fica observando e toda vez que a var resultado tiver uma alteração, 
                    // o value do TextImput será atualizado
                    //E ai passamos a ter um componente controlado
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    visor:{
        height: 100,
        fontSize: 30    
    }
});

//Componentes controlados e Componentes não controlados 
// Componente controlados sao administrados pela propria aplicação
//Componentes nao controlados  

// Para que possamos controlar um componente e atribuir estado a ele,precisamos extender de Component;
// O componente deixara de ser um componente funcional e passara a ser baseado por classe; 
// OBS: O metodo render é esperado emcomponentes baseados em classe;
