import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './components/Principal.js';
import SobreJogo from './components/SobreJogo.js';
import OutrosJogos from './components/OutrosJogos.js';
import Resultado from './components/Resultado';

// A props inital do objeto scene define qual cena sera inicializada, caso essa propriedade nao seja informada, o router pega a primeira cena informada  */ 
const Rotas = () => (
    <Router sceneStyle={ {paddingTop:50 } } >
        <Scene key='sobrejogo' component={ SobreJogo } title="Sobre o Jogo" />
        <Scene key='principal' component={ Principal } title="Cara ou Coroa" initial />
        <Scene key='outrosjogos' component={ OutrosJogos } title="Outros Jogos" />
        <Scene key='resultado' component={ Resultado } title="Resultado" />
    </Router>
);

export default Rotas;