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

        this.togglePlaystate = this.togglePlaystate.bind(this)
    }

    getAndPlayTrack(){
        Spotify.getTrack(this.props.track_id, null, (result, error) => {
            if(error){
                console.log(error);
            }

            console.log("getAndPlayTrack() previous track is: " + this.state.track_name);
            //console.log(this.state);
            if(result){
                this.setState({
                    track_name: result.name,
                    track_artist: result.artists[0].name,
                    image: result.album.images[1].url,
                    track_uri: result.uri,
                    duration: result.duration_ms,
                })
            }
            console.log("getAndPlayTrack() new track is: " + this.state.track_name);

            this.playSong();
        });
    }

    getTrackFromSpotify(callback){
        return Spotify.getTrack(this.props.track_id, null, callback);
    }

    playTrack(){
        Spotify.playURI(this.state.track_uri, 0, 0, (error) => {
            if (error) {
                console.log(error);
            }
        })
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

            this.playTrack();
        });
    }

    _componentDidMount(){
        this.getAndPlayTrack();
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.props.playing === nextProps.playing){
            return false;
        } else {
            return true;
        }
    }

    componentDidUpdate(){
        this.getAndPlayTrack();
    }

    componentWillUnmount(){
        console.log("in componentWillUnmount()");
        clearTimeout(this.timer);
    }

    playSong(){
        console.log("In play song, props.playing is: " + this.props.playing);
        console.log("In play song, state.track_name is: " + this.state.track_name);

        if(this.state.uri !== "" && !this.props.playing) {
            Spotify.playURI(this.state.track_uri, 0, 0, (error) => {
                if (error) {
                    console.log(error);
                } else {
                    this.togglePlaystate();
                    this.timer = setTimeout(() => {this.togglePlaystate()}, this.state.duration);
                }
            })
        }
    }

    togglePlaystate(){
        this.setState({playing: !this.state.playing});
        this.props.onTogglePlaying(this.state.playing);
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