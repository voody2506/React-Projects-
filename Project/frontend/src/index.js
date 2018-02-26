import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BasicRouter from './BasicRouter'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BasicRouter/>, document.getElementById('root'));
registerServiceWorker();
