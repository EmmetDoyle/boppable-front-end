import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class Player extends Component {

    render(){
        return(

            <View style={styles.PlayerContainer}>
                <View style={styles.PlayerComponents}>
                    <View style={styles.PlayerTrackImageContainer}>
                        <Text style={styles.PlayerTrackImage}>
                            [ Album Art Here ]
                        </Text>
                    </View>
                    <View style={styles.PlayerTrackInfoContainter}>
                        <View style={styles.PlayerTrackDetails}>
                            <Text style={styles.PlayerTrackTitle}>
                                POWER
                            </Text>
                            <Text style={styles.PlayerTrackArtist}>
                                Kanye West
                            </Text>
                        </View>
                        <View style={styles.PlayerSuggestedBy}>
                            <Text style={styles.PlayerSuggestedByText}>
                                Suggested by:
                            </Text>
                            <Text style={styles.PlayerSuggesterText}>
                                Emmet
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
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
        backgroundColor: '#cccccc',
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