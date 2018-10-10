import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

//Boa explicação de react-redux
//https://bognarjunior.wordpress.com/tag/react-redux/

import Routes from './Routes';
import reduces from './reduces';

class App extends Component {

    componenteWillMount(){
        let config = {
            apiKey: "AIzaSyDAojJ9Bfe-3HVrSmIJUwHM2_tPfN-NtIc",
            authDomain: "whatsapp-clone-5a35b.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-5a35b.firebaseio.com",
            projectId: "whatsapp-clone-5a35b",
            storageBucket: "whatsapp-clone-5a35b.appspot.com",
            messagingSenderId: "120992397230"
          };
          firebase.initializeApp(config);
    }

    render() {
        return(
            <Provider store={ createStore(reduces) } >
                <Routes />
            </Provider>
        )
    }
};

export default App;