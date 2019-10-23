import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux';
import { LandingPage } from './src/components';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <LandingPage />
            </Provider>
        );
    }
}
