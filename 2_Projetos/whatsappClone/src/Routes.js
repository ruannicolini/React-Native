import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';

//Exemplos
//https://github.com/RNRF/react-native-router-flux#try-the-example-app

export default props => (
    <Router>
        <Stack key="root">
            <Scene key='formLogin' component={FormLogin} title="Login" init />
            <Scene key='formCadastro' component={FormCadastro} title="Cadastro" />
        </Stack>        
    </Router>
);