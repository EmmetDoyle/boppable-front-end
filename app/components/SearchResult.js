import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    ListView,
    Button,
} from 'react-native';

export default class SearchResult extends Component {
    render(){
        return(
            <View style={styles.ResultContainer}>
                <View style={styles.Result}>
                    <View style={styles.ResultTrackImageContainer}>
                        <Text style={styles.RequestTrackImage}>
                            ART
                        </Text>
                    </View>
                    <View style={styles.ResultTrackInfoContainer}>
                        <View style={styles.ResultTrackDetails}>
                            <Text style={styles.RequestTrackTitle}>
                                {this.props.requestTrack}
                            </Text>
                            <Text style={styles.RequestTrackArtist}>
                                {this.props.requestArtist}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.RequestTrackContainer}>
                        <Button
                            style={styles.RequestTrack}
                            title="Bop"
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    //Requests
    ResultContainer: {
        height: 80,
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    Result: {
        flexDirection: 'row',
        height: 70,
        backgroundColor: '#dddddd',
        borderColor: '#111111',
        borderWidth: 1,
        borderRadius: 10,
    },
    ResultTrackImageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cecece',
        borderRadius: 4,
    },
    ResultTrackInfoContainer: {
        flex: 2,
        padding: 4,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#111111',
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
        fontSize: 30,
    },

});