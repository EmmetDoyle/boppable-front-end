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
	
	componentDidMount() {
		Spotify.playURI("spotify:track:7xyX8M8Pklyq9jFcYlaYpU", 0, 52, (error) => {
      		if(error){
          		console.log(error);
      		}
    	});
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
