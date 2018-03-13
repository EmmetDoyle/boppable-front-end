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
            buttonOption: "Bop"
        };

        this.onPressButton = this.onPressButton.bind(this);
        this.trackDoesExist = this.trackDoesExist.bind(this);
    }

    componentDidMount(){
        //this.trackDoesExist();
    }

    componentDidUpdate(){

    };

    trackDoesExist(){
        //console.log("Before exists check");
        //console.log(this.props.requestID);
        fetch('http://159.65.91.61:8000/trackvoting/exists/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Accept-Encoding': "",
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                track_id: this.props.requestID,
                playlist: 1,
            }),
        }).then((response) => {
            //console.log(response);
            return response.json();
        }).then((responseJson) => {
            this.setState({exists: responseJson.exists})
        })
        //console.log("After exists check");
    }

    onPressButton() {
        //console.log("Before fetch");
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
        }).then((response) => {
            //console.log(response);
        })
        Alert.alert("Song requested!");
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
                            title={this.state.buttonOption}
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