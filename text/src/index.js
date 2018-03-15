import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './Components/Login/helpers';
import { App } from './App';

// setup fake backend
import { configureFakeBackend } from './Components/Login/helpers';
configureFakeBackend();

function render (){
  ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,    document.getElementById('root')
  );

}
store.subscribe(render);
render();
