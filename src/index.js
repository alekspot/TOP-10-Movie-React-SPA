import React from 'react';
import { render } from 'react-dom';
//import {BrowserRouter} from "react-router-dom";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import App from './App';
import { history } from './history';



export const renderApp = (state) => {
    render(
        <HashRouter {...state}>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>, document.getElementById('root')
    );
}

let state = {
    location: window.location.pathname
}

history.listen( location => {
    
    
    console.log(location.pathname);
    state = {
        ...state,
        location: location.pathname
    }
    renderApp(state);
});

renderApp(state);