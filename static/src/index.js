import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const BASE_URL = 'http://localhost:8000'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

export default BASE_URL;
