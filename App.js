import React, { Component } from 'react';
import {
    Alert,
    Linking,
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Spotify from 'react-native-spotify';
import VoteScreen from './app/screens/VoteScreen';
import SearchScreen from './app/screens/SearchScreen';
import Party from "./app/components/Party";

var { InitialScreen } = require("./InitialScreen.js");
var { PlayerScreen } = require("./PlayerScreen.js");

// fetch logger
global._fetch = fetch;
global.fetch = function(uri, options, ...args) {
    return global._fetch(uri, options, ...args).then((response) => {
        console.log('Fetch', { request: { uri, options, ...args }, response });
        return response;
    });
};

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

export const Tabs = TabNavigator({
    Vote: {
        screen: VoteScreen,
        navigationOptions: {
            title: 'Vote',
            header: null,
        },
    },
    Party: {
        screen: PlayerScreen,
    },
    Request: {
        screen: SearchScreen,
        navigationOptions: {
            title: 'Request',
            header: null,
        },
    },
},{
    tabBarPosition: 'bottom',
    tabBarOptions: {
        initialRouteName: 'Request',
        indicatorStyle: {
            backgroundColor: '#ffffff',
        },
        style: {
            backgroundColor: '#1ed760',
        }
    },
});

export default App = StackNavigator({
    inital: { screen:InitialScreen },
    player: { screen:Tabs },
},{
  headerMode: 'screen',
});

App.handleOpenURL = (event) => {
  if(Spotify.handleAuthURL(event.url))
  {
    return true;
  }
  return false;
}
Linking.addEventListener('url', App.handleOpenURL);

