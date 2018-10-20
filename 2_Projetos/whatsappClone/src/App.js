import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

//Boa explicação de react-redux
//https://bognarjunior.wordpress.com/tag/react-redux/

import Routes from './Routes';
import reduces from './reduces';

class App extends Component {

    initializeFirebase() {
        const firebase = require("firebase");
       
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyDAojJ9Bfe-3HVrSmIJUwHM2_tPfN-NtIc",
            authDomain: "whatsapp-clone-5a35b.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-5a35b.firebaseio.com",
            projectId: "whatsapp-clone-5a35b",
            storageBucket: "whatsapp-clone-5a35b.appspot.com",
            messagingSenderId: "120992397230"
        };
        firebase.initializeApp(config);
       
        //inicializando o firestore
        const firestore = require("firebase/firestore");
        db = firebase.firestore();
        db.settings({ timestampsInSnapshots: true });
      }

    componentWillMount() {

        this.initializeFirebase();

        console.log('inicio');
        // firebase.initializeApp({
        //     apiKey: "AIzaSyDAojJ9Bfe-3HVrSmIJUwHM2_tPfN-NtIc",
        //     authDomain: "whatsapp-clone-5a35b.firebaseapp.com",
        //     databaseURL: "https://whatsapp-clone-5a35b.firebaseio.com",
        //     projectId: "whatsapp-clone-5a35b",
        //     storageBucket: "whatsapp-clone-5a35b.appspot.com",
        //     messagingSenderId: "120992397230"
        // });

    }
    
    //quando adicionamos um middle, todas as actionsCreate sao interpretadas por esse middle.    
    render() {
        //reduces, estado inicial da aplicacao, applymidddle para interceptar todas as actionscreates dentro da store
        return(
            <Provider store={ createStore(reduces, {}, applyMiddleware(ReduxThunk)) } >
                <Routes />
            </Provider>
        )
    }
};

export default App;