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
	View,
    ListView,
    ActivityIndicator
} from 'react-native';

import Party from './app/components/Party'

export class PlayerScreen extends Component
{
	static navigationOptions = {
		header: null,
	};

	constructor()
	{
		super();
	}


	render()
	{
		return (
			<View style={styles.container}>
                <Party />


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
