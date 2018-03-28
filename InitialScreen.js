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
	View,
	Image,
	Dimensions,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Spotify from 'react-native-spotify';
import LocalImage from "./app/components/LocalImage";

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
			"scopes": ["streaming","user-read-playback-state","user-modify-playback-state"],
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
					<View style={styles.boppableLogoContainer}>
                        <Image
                            source={require('./app/images/logoGreen/logoGreen.png')}
                            style={styles.boppableLogo}
                        />
					</View>
					<View style={styles.spotifyLoginButtonContainer}>
						<TouchableHighlight onPress={this.spotifyLoginButtonWasPressed} style={styles.spotifyLoginButton}>
							<Text style={styles.spotifyLoginButtonText}>Connect with Spotify</Text>
						</TouchableHighlight>
					</View>
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
		backgroundColor: '#191414',
	},

	loadIndicator: {
		//
	},
	loadMessage: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},

	boppableLogoContainer:{
        flex: 3,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'stretch',
	},
	boppableLogo:{

	},

    spotifyLoginButtonContainer:{
		flex: 1,
	},
	spotifyLoginButton: {
		justifyContent: 'center',
		borderRadius: 30,
		backgroundColor: '#11DA58',
		overflow: 'hidden',
		width: 240,
		height: 60,
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