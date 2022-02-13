import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContext} from './store/FirebaseContext'
import firebase from './firebase/config'
import Context from './store/FirebaseContext'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
<FirebaseContext.Provider value={{firebase}}>
    <Context>
        <App />
    </Context>  
</FirebaseContext.Provider>
</BrowserRouter>
 , document.getElementById('root'));
