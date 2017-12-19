import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//Disabling ServiceWorker while we don't have an production deploy.
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

//registerServiceWorker();
