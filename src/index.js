import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import '../src/assets/styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/index';



ReactDOM.render(
    <Provider store={configureStore()}>
                <App>
                </App>
    </Provider>,    
    document.getElementById('root'));

    function Home(){
        return ( 
            <div>
                <h1>Hello WORLD</h1>
            </div>
        );
    };
serviceWorker.unregister();
