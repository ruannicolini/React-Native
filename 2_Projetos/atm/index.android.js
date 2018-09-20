
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServicos from './src/components/CenaServicos';

export default class atm extends Component {
  render() {
    return (
      <Navigator 
        initialRoute={ /* Rota Inicial*/ { id: 'a' } }
        renderScene={(route, navigator) => { 
            /* Definir a cena com base na rota */

            switch(route.id) {
              case 'a' : return( <CenaPrincipal pNavigator = {navigator} /> );
              case 'b' : return( <CenaClientes pNavigator = {navigator} /> );
              case 'c' : return( <CenaContatos pNavigator = {navigator} /> );
              case 'e' : return( <CenaEmpresa pNavigator = {navigator} /> );
              case 's' : return( <CenaServicos pNavigator = {navigator} /> );
              default : false;
            }            

        } }
      />

    );
  }
}

AppRegistry.registerComponent('atm', () => atm);
