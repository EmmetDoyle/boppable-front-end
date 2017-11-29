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

	getSong(song){
		Spotify.playURI(song.trackID, song.indexID, song.startPosition, (error) => {
      		if(error){
          		console.log(error);
      		}
    	});		
	}

	componentDidMount() {
		this.getSongFromApi()
	}


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
