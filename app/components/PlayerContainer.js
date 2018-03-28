import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import Spotify from "react-native-spotify";
import Player from "./Player";

export default class PlayerContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            track_name: "",
            track_artist: "",
            track_uri: "",
            image: "",
            playing: false,
            duration: 0,
        };

        this.togglePlaystate = this.togglePlaystate.bind(this);
        this.calculateEndTime = this.calculateEndTime.bind(this);
    }


    getTrackFromSpotify(callback){
        return Spotify.getTrack(this.props.track_id, null, callback);
    }

    playTrack(){
        Spotify.playURI(this.state.track_uri, 0, 0, (error) => {
            if (error) {
                console.log(error);
            }
        });
        this.calculateEndTime();
        this.props.onSetPlaystate(true);
    }

    calculateEndTime(){
        let now = Date.now();
        now += this.state.duration;
        this.props.onUpdateEndTime(now);
    }

    componentDidMount(){
        this.getTrackFromSpotify((result, error) => {
            if(error){
                console.log(error);
            }

            if(result){
                this.setState({
                    track_name: result.name,
                    track_artist: result.artists[0].name,
                    image: result.album.images[1].url,
                    track_uri: result.uri,
                    duration: result.duration_ms,
                })
            }

            if(!this.props.playing){
                // console.log("checking state in PCCDU if playing == false");
                // console.log(this.state);
                this.playTrack();
            }
        });
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.track_id !== prevProps.track_id){
            this.getTrackFromSpotify((result, error) => {
                if(error){
                    console.log(error);
                }

                if(result){
                    this.setState({
                        track_name: result.name,
                        track_artist: result.artists[0].name,
                        image: result.album.images[1].url,
                        track_uri: result.uri,
                        duration: result.duration_ms,
                    })
                }


                if(!this.props.playing){
                    this.playTrack();
                }
            });
        }
    }


    togglePlaystate(){
        this.props.onTogglePlaying();
    }


    render(){
        return(
            <Player
                image={this.state.image}
                name={this.state.track_name}
                artist={this.state.track_artist}
                suggester={this.props.suggester}
            />
        )
    }
}

const styles = StyleSheet.create({

    //Player
    PlayerContainer: {
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