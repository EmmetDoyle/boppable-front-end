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

var { InitialScreen } = require("./InitialScreen.js");
var { PlayerScreen } = require("./PlayerScreen.js");

export const Tabs = TabNavigator({
    Vote: {
        screen: VoteScreen,
    },
    PlayerScreen: {
        screen: PlayerScreen,
    },
    SearchScreen: {
        screen: SearchScreen,
    },
});

export default App = StackNavigator({
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

