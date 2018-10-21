import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import FormBoasVindas from './components/BoasVindas';
import FormPrincipal from './components/Principal';

//Exemplos
//https://github.com/RNRF/react-native-router-flux#try-the-example-app


//hideNavBar = Esconder a barra de navegação. Ao usar essa propriedade, temos que especificar para as outras cenas tbm,
// pq quando usamos essa props em uma cena, as demais cenas tbm herdam o parametro passado.

const Principal = props => (
    <Router>
        <Stack key="root"
            navigationBarStyle={ {backgroundColor: '#115E54' } }
            titleStyle={ {color: '#fff'} }
        >
            <Scene key='formLogin' component={FormLogin} title="Login" initial hideNavBar={false} />
            <Scene key='formCadastro' component={FormCadastro} title="Cadastro" hideNavBar={false} />
            <Scene key='formBoasVindas' component={FormBoasVindas} title="Bem Vindo!" hideNavBar={true} />
            <Scene key='formPrincipal' component={FormPrincipal} title="WhatsApp Clone" hideNavBar={true} />
        </Stack>        
    </Router>
);

export default Principal;