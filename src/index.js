import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import { HashRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './redux/store';

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
        <HashRouter>
    <App />
    </HashRouter>
    </Provider>

);
