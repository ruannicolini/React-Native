import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import FormBoasVindas from './components/BoasVindas';
import FormPrincipal from './components/Principal';

//Exemplos
//https://github.com/RNRF/react-native-router-flux#try-the-example-app

const Principal = props => (
    <Router>
        <Stack key="root">
            <Scene key='formLogin' component={FormLogin} title="Login" initial />
            <Scene key='formCadastro' component={FormCadastro} title="Cadastro" />
            <Scene key='formBoasVindas' component={FormBoasVindas} title="Bem Vindo!" />
            <Scene key='formPrincipal' component={FormPrincipal} title="WhatsApp Clone" />
        </Stack>        
    </Router>
);

export default Principal;