import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    ListView,
    Button,
} from 'react-native';

import Spotify from 'react-native-spotify';


export default class Request extends Component {
    constructor(props){
        super(props);

        this.state = {
            track_name: "",
            track_artist: "",
        };
    }

    componentDidMount(){
        Spotify.getTrack(this.props.track_id, null, (result, error) => {
            if(error){
                console.log(error);
            }


            console.log(this.state);
            if(result){
                this.setState({
                    track_name: result.name,
                    track_artist: result.artists[0].name,
                })
            }
            console.log(this.state);
            console.log(" ");

        });
    }

    render(){
        return(
            <View style={styles.RequestContainer}>
                <View style={styles.Request}>
                    <View style={styles.RequestDownVoteContainer}>
                        <Button
                            style={styles.RequestDownVote}
                            title="V"
                        />
                    </View>
                    <View style={styles.RequestTrackImageContainer}>
                        <Text style={styles.RequestTrackImage}>
                            ART
                        </Text>
                    </View>
                    <View style={styles.RequestTrackInfoContainer}>
                        <View style={styles.RequestTrackDetails}>
                            <Text style={styles.RequestTrackTitle}>
                                {this.state.track_name}
                            </Text>
                            <Text style={styles.RequestTrackArtist}>
                                {this.state.track_artist}
                            </Text>
                        </View>
                        <View style={styles.RequestSuggestedBy}>
                            <Text style={styles.RequestSuggestedByText}>
                                {this.props.suggester}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.RequestVoteCountContainer}>
                        <Text style={styles.RequestVoteCount}>
                            {this.props.votes}
                        </Text>
                    </View>
                    <View style={styles.RequestUpVoteContainer}>
                        <Button
                            style={styles.RequestUpVote}
                            title="^"
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    //Requests
    RequestContainer: {
        height: 80,
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    Request: {
        flexDirection: 'row',
        height: 70,
        backgroundColor: '#dddddd',
        borderColor: '#111111',
        borderWidth: 1,
        borderRadius: 10,
    },
    RequestDownVoteContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: '#111111',
    },
    RequestDownVote: {
        fontSize: 40,
    },
    RequestTrackImageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cecece',
        borderRadius: 4,
    },
    RequestTrackInfoContainer: {
        flex: 2,
        padding: 4,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#111111',
    },
    RequestTrackDetails: {
        flex: 2,
    },
    RequestSuggestedBy: {
        flex: 1,
    },
    RequestSuggestedByText: {
        fontWeight: 'bold',
    },
    RequestVoteCountContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: '#111111',
    },
    RequestVoteCount: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    RequestUpVoteContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    RequestUpVote: {
        fontSize: 50,
    },

});