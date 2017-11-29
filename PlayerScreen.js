/* 

This code has been copied from the Example folder of the react-native-spotify
module. The code is not being presented as my own work and is merely being
used a framework to test out the Spotify module.

My own additions to this example are place within the comments "OWN WORK"
below.

*/

import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

export class PlayerScreen extends Component
{
	static navigationOptions = {
		title: 'Player',
	};

	constructor()
	{
		super();
	}
	

	/* BEGIN OWN WORK */

	//Get song from API, parse JSON, call get song with returned data
	getSongFromApi() {
    	return fetch('https://droybavncz.localtunnel.me//songs/1/')
      	.then((response) => response.json())
      	.then((responseJson) => {
        	this.getSong(responseJson)
      	})
      	.catch((error) => {
        	console.error(error);
      	});		
	}

	// Read in song object as parameter. 
	// Call spotify's playURI() method with song attributes
	getSong(song){
		Spotify.playURI(song.trackID, song.indexID, song.startPosition, (error) => {
      		if(error){
          		console.log(error);
      		}
    	});		
	}

	// Retrieve and play a song
	componentDidMount() {
		this.getSongFromApi()
	}

	/* END OWN WORK */

	render()
	{
		return (
			<View style={styles.container}>
				<Text style={styles.greeting}>
					This is the player screen
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	greeting: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
});
