import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import Spotify from "react-native-spotify";

export default class Player extends Component {
    constructor(props){
        super(props)
    }


    render(){
        return(
            <View style={styles.PlayerContainer}>
                <View style={styles.PlayerComponents}>
                    <View style={styles.PlayerTrackImageContainer}>
                        <Image source={{uri: this.props.image}}
                               style={{width: 150, height: 150}} />
                    </View>
                    <View style={styles.PlayerTrackInfoContainter}>
                        <View style={styles.PlayerTrackDetails}>
                            <Text style={styles.PlayerTrackTitle}>
                                {this.props.name}
                            </Text>
                            <Text style={styles.PlayerTrackArtist}>
                                {this.props.artist}
                            </Text>
                        </View>
                        <View style={styles.PlayerSuggestedBy}>
                            <Text style={styles.PlayerSuggestedByText}>
                                Suggested by: <Text style={styles.PlayerSuggesterText}>
                                {this.props.suggester}
                            </Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    //Player
    PlayerContainer: {
        backgroundColor: '#121212',
        flex: 3,
    },
    PlayerComponents: {
        flexDirection: 'row',
        flex: 1,
        padding: 8,
    },
    PlayerTrackImageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    PlayerTrackImage: {

    },
    PlayerTrackInfoContainter: {
        flex: 1,
        padding: 8,
    },
    PlayerTrackDetails: {
        flex: 1,
    },
    PlayerTrackTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    PlayerTrackArtist: {
        fontWeight: '100',
        fontSize: 20,
        color: 'white'
    },
    PlayerSuggestedBy: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    PlayerSuggestedByText: {
        fontWeight: '200',
        fontSize: 12,
        color: 'white',
    },
    PlayerSuggesterText: {
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold',
    },

});