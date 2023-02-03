import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App'
//import * as serviceWorker from './serviceWorker';
//import React from 'react';

//ReactDOM.render(

    //<React.StrictMode>

        //<App />

    //</React.StrictMode>,
    //document.getElementById('root')

//);

//serviceWorker.unregister();
const root = document.querySelector("#root");
ReactDOM.createRoot(root).render(<App />);

