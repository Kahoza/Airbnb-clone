import React from 'react';
import ReactDOM from 'react-dom';
// ./ meaning that the file is at the same level than the current folder
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Hello from './components/hello';
//import Flat from './components/flat';
 
// We render the class Hello and give a value to firstName and lastName  
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
