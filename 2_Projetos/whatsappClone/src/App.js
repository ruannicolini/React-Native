import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//Boa explicação de react-redux
//https://bognarjunior.wordpress.com/tag/react-redux/

import Routes from './Routes';
import reduces from './reduces';

export default props => (
    <Provider store={ createStore(reduces) } >
        <Routes />
    </Provider>
);
