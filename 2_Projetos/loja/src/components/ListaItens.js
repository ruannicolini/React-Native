import React, { Component } from 'react';
import {
  View, 
  Text
} from 'react-native';

import Itens from './Itens';

export default class ListaItens extends Component {
  render() {
    return (
        <View>
            <Text></Text>
            <Itens/>
            <Itens/>
            <Itens/>
        </View>    
    );
  }
}
