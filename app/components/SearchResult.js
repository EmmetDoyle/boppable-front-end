import React, { Component } from 'react';

import {
    Alert,
    StyleSheet,
    View,
    Text,
    Button,
    Image,
} from 'react-native';

import FormData from 'FormData';

import Spotify from 'react-native-spotify';
import VoteButton from "./VoteButton";

export default class SearchResult extends Component {

    constructor(props) {
        super(props);

        this.state = {
            exists: false,
            buttonOption: "Bop"
        };

        this.onPressButton = this.onPressButton.bind(this);
        this.trackDoesExist = this.trackDoesExist.bind(this);
    }

    componentDidMount(){
        this.trackDoesExist();
    }

    componentDidUpdate(){
        this.trackDoesExist();
    };

    trackDoesExist(){
        fetch('http://159.65.91.61/trackvoting/exists/', {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                track_id: this.props.requestID,
                playlist: 1,
            }),
        }).then((response) => {
            return response.json();
        }).then((responseJson) => {
            this.setState({exists: responseJson.exists})
        })
    }

    onPressButton() {
        if(this.state.exists){
            fetch('http://159.65.91.61/trackvoting/' + this.props.trackVotingID + '/upvote')
                .then((response) => {
                    console.log(response.status);
                })
            Alert.alert("upvote pressed!");
        } else {
            //console.log("Before fetch");
            fetch('http://159.65.91.61/trackvoting/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    track_id: this.props.requestID,
                    votes: 1,
                    playlist: 1,
                    suggester: 1,
                }),
            })

            this.setState({
                exists: !this.state.exists
            })

            Alert.alert("Song requested!");
        }
    }

    render(){
        return(
            <View style={styles.ResultContainer}>
                <View style={styles.Result}>
                    <View style={styles.ResultTrackImageContainer}>
                        <Image source={{uri: this.props.image}}
                               style={{width: 75, height: 75}} />
                    </View>
                    <View style={styles.ResultTrackInfoContainer}>
                        <Text style={styles.RequestTrackTitle}>
                            {this.props.requestTrack}
                        </Text>
                        <Text style={styles.RequestTrackArtist}>
                            {this.props.requestArtist}
                        </Text>
                    </View>
                    <View style={styles.RequestTrackContainer}>
                        <VoteButton
                            bop
                            exists={this.state.exists}
                            onPress={this.onPressButton}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    ResultContainer: {
        height: 85,
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    Result: {
        flexDirection: 'row',
        height: 75,
        backgroundColor: '#2D2B2A',
    },
    ResultTrackImageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ResultTrackInfoContainer: {
        flex: 2,
        padding: 4,
    },
    RequestTrackTitleContainer: {
        flex: 2,
    },
    RequestTrackTitle:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    RequestTrackArtistContainer: {
        flex: 1,
    },
    RequestTrackArtist:{
        color: '#A3A1A1',
    },
    ResultTrackDetails: {
        flex: 2,
    },
    RequestTrackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});

/*
<Button
                            style={styles.RequestTrack}
                            title={this.state.buttonOption}
                            onPress={this.onPressButton}
                            color={'#00bb33'}
                        />
 */