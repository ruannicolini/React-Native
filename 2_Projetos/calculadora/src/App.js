import React from 'react';
import  { View } from 'react-native';

import { Topo as Header, Resultado, Painel } from './components';
//Quando nao informamos, por padrao ele busca a index,
//Na pratica é como que 
// import { Topo as Header, Resultado, Painel } from './components';
// fosse igual a 
// import { Topo as Header, Resultado, Painel } from './components/index';

export default props => (
    <View>
        <Header />
        <Resultado />
        <Painel />
    </View>
);
