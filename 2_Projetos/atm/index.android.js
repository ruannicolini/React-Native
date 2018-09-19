
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';

export default class atm extends Component {
  render() {
    return (
      <Navigator 
        initialRoute={ /* Rota Inicial*/ { id: 'a' } }
        renderScene={(route, navigator) => { 
            /* Definir a cena com base na rota */

            if (route.id === 'a'){
              //exibe a cena Principal
              return( <CenaPrincipal pNavigator = {navigator} /> ); //Passei o componente Navigator como uma props para o componente Cena Principal
            }

            if (route.id === 'b'){
              //exibe a cena Principal
              return( <CenaClientes /> );
            }

        } }
      />

    );
  }
}

AppRegistry.registerComponent('atm', () => atm);
