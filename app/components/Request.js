import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    ListView,
    Button,
} from 'react-native';

export default class Request extends Component {
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
                                {this.props.requestTrack}
                            </Text>
                            <Text style={styles.RequestTrackArtist}>
                                {this.props.requestArtist}
                            </Text>
                        </View>
                        <View style={styles.RequestSuggestedBy}>
                            <Text style={styles.RequestSuggestedByText}>
                                {this.props.suggesterName}
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