/**
 * @format
 */
import React from 'react'
// import {AppRegistry} from 'react-native';
import App from './App';
// import {name as appName} from './app.json';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore';
import {Navigation} from "react-native-navigation";

const store = configureStore();
const RNRedux = () => (
    <Provider store={store}>
        <App/>
    </Provider>);

// AppRegistry.registerComponent(appName, () => RNRedux);


Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => RNRedux);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: "navigation.playground.WelcomeScreen"
            }
        }
    });
});
