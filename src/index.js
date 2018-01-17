import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Hello from './hello.jsx'

ReactDOM.render(<Hello />, document.getElementById('root'));
registerServiceWorker();
