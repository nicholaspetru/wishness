import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/css/main.css';
import Routes from './components/Routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
