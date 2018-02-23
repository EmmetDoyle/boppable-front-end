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

        this.onPressButton = this.onPressButton.bind(this);
    }

    onPressButton() {
        Spotify.playURI(this.props.requestURI, 0, 0, (error) => {
            if(error){
                console.log(error);
            }
        });
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