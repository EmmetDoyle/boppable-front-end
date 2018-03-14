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

        this.state = {
            track_name: "",
            track_artist: "",
            track_uri: "",
            image: "",
            playing: false,
        }
    }


    componentDidMount(){
        Spotify.getTrack(this.props.track_id, null, (result, error) => {
            if(error){
                console.log(error);
            }


            //console.log(this.state);
            if(result){
                this.setState({
                    track_name: result.name,
                    track_artist: result.artists[0].name,
                    image: result.album.images[1].url,
                    track_uri: result.uri,
                })
            }
        });
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.uri != "" && !this.state.playing){
            Spotify.playURI(this.state.track_uri, 0, 0, (error) => {
                if (error){
                    console.log(error);
                }
            })
            this.setState({playing: true})
        }
    }

    playSong(){
    }

    render(){
        return(
            <View style={styles.PlayerContainer}>
                <View style={styles.PlayerComponents}>
                    <View style={styles.PlayerTrackImageContainer}>
                        <Image source={{uri: this.state.image}}
                               style={{width: 150, height: 150}} />
                    </View>
                    <View style={styles.PlayerTrackInfoContainter}>
                        <View style={styles.PlayerTrackDetails}>
                            <Text style={styles.PlayerTrackTitle}>
                                {this.state.track_name}
                            </Text>
                            <Text style={styles.PlayerTrackArtist}>
                                {this.state.track_artist}
                            </Text>
                        </View>
                        <View style={styles.PlayerSuggestedBy}>
                            <Text style={styles.PlayerSuggestedByText}>
                                Suggested by:
                            </Text>
                            <Text style={styles.PlayerSuggesterText}>
                                {this.props.suggester}
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
        backgroundColor: 'green',
        flex: 3,
    },
    PlayerComponents: {
        flexDirection: 'row',
        flex: 1,
        padding: 8,
    },
    PlayerTrackImageContainer: {
        flex: 2,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    PlayerTrackImage: {

    },
    PlayerTrackInfoContainter: {
        flex: 3,
        padding: 8,
    },
    PlayerTrackDetails: {
        flex: 1,
    },
    PlayerTrackTitle: {

    },
    PlayerTrackArtist: {

    },
    PlayerSuggestedBy: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    PlayerSuggestedByText: {
        flex: 1,
    },
    PlayerSuggesterText: {
        flex: 1,
        fontWeight: 'bold',
    },

});