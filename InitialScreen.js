/* 

This code has been copied from the Example folder of the react-native-spotify
module. The code is not being presented as my own work and is merely being
used a framework to test out the Spotify module.

My own additions to this example are in PlayerScreen.js


*/

import React, { Component } from 'react';
import {
	ActivityIndicator,
	Alert,
	StyleSheet,
	Text,
	TouchableHighlight,
	View
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Spotify from 'react-native-spotify';

export class InitialScreen extends Component
{
	static navigationOptions = {
		header: null
	};

	constructor()
	{
		super();

		this.initialMount = true;
		this.state = {initialized: false};

		this.spotifyLoginButtonWasPressed = this.spotifyLoginButtonWasPressed.bind(this);
	}

	goToPlayer()
	{
		const navAction = NavigationActions.reset({
			index: 0,
			actions: [
			  NavigationActions.navigate({ routeName: 'player'})
			]
		});
		this.props.navigation.dispatch(navAction);
	}

	componentDidMount()
	{
		if(this.initialMount)
		{
			this.initialMount = false;
			this.componentDidInitialMount();
		}
	}

	componentDidInitialMount()
	{
		//initialize spotify
		var spotifyOptions = {
			"clientID":"47c9fc5ddf044654829aecd60b6ceb2c",
			"sessionUserDefaultsKey":"SpotifySession",
			"redirectURL":"boppable-app-login://callback",
			"scopes": ["streaming"],
      		"tokenSwapURL": null,
      		"tokenRefreshURL": null
		};
		Spotify.initialize(spotifyOptions, (loggedIn, error) => {
			if(error != null)
			{
				Alert.alert("Error", error.description);
			}
			//update UI state
			this.setState((state) => {
				state.initialized = true;
				return state;
			});
			//handle initialization
			if(loggedIn)
			{
				this.goToPlayer();
			}
		});
	}

	spotifyLoginButtonWasPressed()
	{
		Spotify.login((loggedIn, error) => {
			if(error)
			{
				Alert.alert("Error", error.description);
			}
			if(loggedIn)
			{
				this.goToPlayer();
			}
		});
	}

	render()
	{
		if(!this.state.initialized)
		{
			return (
				<View style={styles.container}>
					<ActivityIndicator animating={true} style={styles.loadIndicator}>
					</ActivityIndicator>
					<Text style={styles.loadMessage}>
						Loading...
					</Text>
				</View>
			);
		}
		else
		{
			return (
				<View style={styles.container}>
					<Text style={styles.greeting}>
						Hey! You! Log into your spotify
					</Text>
					<TouchableHighlight onPress={this.spotifyLoginButtonWasPressed} style={styles.spotifyLoginButton}>
						<Text style={styles.spotifyLoginButtonText}>Log into Spotify</Text>
					</TouchableHighlight>
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},

	loadIndicator: {
		//
	},
	loadMessage: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},

	spotifyLoginButton: {
		justifyContent: 'center',
		borderRadius: 18,
		backgroundColor: 'green',
		overflow: 'hidden',
		width: 200,
		height: 40,
		margin: 20,
	},
	spotifyLoginButtonText: {
		fontSize: 20,
		textAlign: 'center',
		color: 'white',
	},

	greeting: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
});