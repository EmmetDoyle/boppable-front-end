import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

export default class VoteScreen extends Component
{
    render()
    {
        return (
            <View style={styles.container}>
                <View style={styles.voteTextContainer}>
                    <Text style={styles.voteText}>Vote</Text>
                </View>
                <View style={styles.trackCardContainer}>
                    <Text>Here</Text>
                </View>
                <View style={styles.voteButtonsContainer}>
                    <View style={styles.flopButtonContainer}>
                        <TouchableHighlight style={styles.flopButton}>
                            <Text style={styles.flopButtonText}>flop</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.nextButtonContainer}>
                        <TouchableHighlight style={styles.nextButton}>
                            <Text style={styles.nextButtonText}>next</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.bopButtonContainer}>
                        <TouchableHighlight style={styles.bopButton}>
                            <Text style={styles.bopButtonText}>bop</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191414',
    },
    voteTextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    voteText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'white',
    },
    trackCardContainer: {
        flex: 5,
        backgroundColor: '#FF0000',
    },
    voteButtonsContainer: {
        flex: 2,
        flexDirection: 'row'
    },

    flopButtonContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    flopButton: {
        height: 70,
        width: 70,
        borderRadius: 35,
        borderColor: '#FF0000',
        borderWidth: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    flopButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 20,
    },


    nextButtonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nextButton: {
        height: 30,
        width: 70,
        borderRadius: 35,
        borderColor: '#A3A1A1',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nextButtonText: {
        color: '#A3A1A1',
        fontStyle: 'italic',
        fontSize: 20,
        fontWeight: '100',
    },


    bopButtonContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    bopButton: {
        height: 70,
        width: 70,
        borderRadius: 35,
        borderColor: '#11DA58',
        borderWidth: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bopButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 20,
    },
});