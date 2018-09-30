
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default props => ( 
    <View>
        <TextInput style={ styles.visor } 
            placeholder='RESULTADO' //Texto para descricao do campo
            // editable = { false }
            value={props.resultado} //Dizemos que o value desse componente é baseado no estado de resultado;
            // Entao o react fica observando e toda vez que a var resultado tiver uma alteração, 
            // o value do TextImput será atualizado
            //E ai passamos a ter um componente controlado
        />
    </View>
);

const styles = StyleSheet.create({
    visor:{
        height: 100,
        fontSize: 30,
        textAlign: 'center'   
    }
});

//Componentes controlados e Componentes não controlados 
// Componente controlados sao administrados pela propria aplicação
//Componentes nao controlados  

// Para que possamos controlar um componente e atribuir estado a ele,precisamos extender de Component;
// O componente deixara de ser um componente funcional e passara a ser baseado por classe; 
// OBS: O metodo render é esperado emcomponentes baseados em classe;
