import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    ListView,
    Button,
    Alert,
    Image,
} from 'react-native';

import Spotify from 'react-native-spotify';


export default class Request extends Component {
    constructor(props){
        super(props);

        this.state = {
            track_name: "",
            track_artist: "",
            image: "",
        };

        this.onUpVote = this.onUpVote.bind(this);
        this.onDownVote = this.onDownVote.bind(this);
    }

    getTrackInfoFromApi(){
        Spotify.getTrack(this.props.track_id, null, (result, error) => {
            if(error){
                console.log(error);
            }

            if(result){
                this.setState({
                    track_name: result.name,
                    track_artist: result.artists[0].name,
                    image: result.album.images[2].url,
                })
            }
        });
    }

    componentDidMount(){
        this.getTrackInfoFromApi()
    }

    componentDidUpdate(){
        this.getTrackInfoFromApi()
    }

    onUpVote(){
        Alert.alert("upvote pressed!");

        fetch('http://159.65.91.61/trackvoting/' + this.props.trackVotingID + '/upvote')
            .then((response) => {
                console.log(response.status);
            })
    }

    onDownVote(){
        Alert.alert("downvote pressed!");

        fetch('http://159.65.91.61/trackvoting/' + this.props.trackVotingID + '/downvote')
            .then((response) => {
                console.log(response.status);
            })
    }

    render(){
        return(
            <View style={styles.RequestContainer}>
                <View style={styles.Request}>
                    <View style={styles.RequestDownVoteContainer}>
                        <Button
                            style={styles.RequestDownVote}
                            title="V"
                            onPress={this.onDownVote}
                            color={'#00bb33'}
                        />
                    </View>
                    <View style={styles.RequestTrackImageContainer}>
                        <Image source={{uri: this.state.image}}
                               style={{width: 75, height: 75}} />
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
                            onPress={this.onUpVote}
                            color={'#00bb33'}
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
        height: 75,
        backgroundColor: '#303030',
    },
    RequestDownVoteContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    RequestDownVote: {
        fontSize: 40,
    },
    RequestTrackImageContainer: {
        flex: 1,
        minWidth: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    RequestTrackInfoContainer: {
        flex: 2,
        padding: 4,
    },
    RequestTrackDetails: {
        flex: 2,
    },
    RequestTrackTitle:{
        color: 'white',
    },
    RequestTrackArtist:{
        color: 'white',
    },
    RequestSuggestedBy: {
        flex: 1,
    },
    RequestSuggestedByText: {
        fontWeight: 'bold',
        color: 'white',
    },
    RequestVoteCountContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    RequestVoteCount: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
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