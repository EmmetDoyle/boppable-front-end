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
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';
import Spotify from 'react-native-spotify';
import VoteScreen from './app/screens/VoteScreen';
import SearchScreen from './app/screens/SearchScreen';
import Party from "./app/components/Party";
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


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
            tabBarIcon: () => {
                return (<MaterialIcon name="thumbs-up-down" size={25} style={{color:'white'}} />);
            },
        },
    },
    Party: {
        screen: PlayerScreen,
        navigationOptions: {
            title: 'Party',
            tabBarIcon: () => {
                return (<EntypoIcon name="home" size={25} style={{color:'white'}} />);
            },
        }
    },
    Request: {
        screen: SearchScreen,
        navigationOptions: {
            title: 'Request',
            header: null,
            tabBarIcon: () => {
                return (<MaterialIcon name="playlist-add" size={25} style={{color:'white'}} />);
            },
        },
    },
},{
    tabBarPosition: 'bottom',
    initialRouteName: 'Party',
    tabBarOptions: {
        showIcon: true,
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#FFFFFF',
        activeBackgroundColor: '#1DB954',
        indicatorStyle: {
            backgroundColor: '#FFFFFF'
        },
        labelStyle: {
            fontSize: 13,
            fontFamily: 'Roboto',
        },
        style: {
            backgroundColor: '#11da58',
            height: 65,
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

