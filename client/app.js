'use strict';

// Frameworks
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store";

// Components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


// import { navigationClick } from "./actions/index";
window.store = store;
// window.navigationClick = navigationClick;

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);
