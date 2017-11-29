/* 

This code has been copied from the Example folder of the react-native-spotify
module. The code is not being presented as my own work and is merely being
used a framework to test out the Spotify module.

My own additions to this example are in PlayerScreen.js


*/
import React, { Component } from 'react';
import {
  Alert,
  Linking,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Spotify from 'react-native-spotify';

var { InitialScreen } = require("./InitialScreen.js");
var { PlayerScreen } = require("./PlayerScreen.js");

export default App = StackNavigator({
  initial: { screen:InitialScreen },
  player: { screen:PlayerScreen },
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

