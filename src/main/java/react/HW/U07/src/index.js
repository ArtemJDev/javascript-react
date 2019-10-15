import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let nav = {
    main: '#',
    about: '#',
    contact: '#'
};

let contact = ['12-22-57', '12-23-17', '52-12-51'];
let adress = ['Moscow', 'Red Square', '22'];

ReactDOM.render(<App title="My site" hero="go-go-go" nav={nav} cont={contact} adr={adress} titleFooter = 'This is footer'/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
