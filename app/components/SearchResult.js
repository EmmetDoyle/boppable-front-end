import React, { Component } from 'react';

import {
    Alert,
    StyleSheet,
    View,
    Text,
    ListView,
    Button,
    Image,
} from 'react-native';

import Spotify from 'react-native-spotify';

export default class SearchResult extends Component {

    constructor(props) {
        super(props);

        this.state = {
            exists: false,
        };

        this.onPressButton = this.onPressButton.bind(this);
    }

    componentDidMount(){
        fetch('http://159.65.91.61:8000/trackvoting/exists/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                track_id: this.props.requestID,
                playlist: 1,
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
            })
    }

    onPressButton() {
        Spotify.playURI(this.props.requestURI, 0, 0, (error) => {
            if(error){
                console.log(error);
            }
        });


        console.log("Before fetch");
        fetch('http://159.65.91.61:8000/trackvoting/', {
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
        });
        console.log("After fetch");
        console.log("");
    }

    render(){
        return(
            <View style={styles.ResultContainer}>
                <View style={styles.Result}>
                    <View style={styles.ResultTrackImageContainer}>
                        <Image source={{uri: this.props.image}}
                               style={{width: 85, height: 85}} />
                    </View>
                    <View style={styles.ResultTrackInfoContainer}>
                        <View style={styles.RequestTrackTitleContainer}>
                            <Text style={styles.RequestTrackTitle}>
                                {this.props.requestTrack}
                            </Text>
                        </View>
                        <View style={styles.RequestTrackArtistContainer}>
                            <Text style={styles.RequestTrackArtist}>
                                {this.props.requestArtist}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.RequestTrackContainer}>
                        <Button
                            style={styles.RequestTrack}
                            title="Bop"
                            onPress={this.onPressButton}
                            color={'#00bb33'}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    ResultContainer: {
        height: 95,
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    Result: {
        flexDirection: 'row',
        height: 85,
        backgroundColor: '#303030',
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
    },
    RequestTrackArtistContainer: {
        flex: 1,
    },
    RequestTrackArtist:{
        color: 'white',
        fontWeight: 'bold',
    },
    ResultTrackDetails: {
        flex: 2,
    },
    RequestTrackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    RequestTrack: {

    },

});