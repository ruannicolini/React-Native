import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Routes from './Routes';
import reduces from './reduces'; //index.js

export default props => (
    <Provider store={ createStore(reduces) } >
        <Routes />
    </Provider>
);
