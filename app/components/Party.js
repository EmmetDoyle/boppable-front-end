import React, { Component } from 'react';

import {
    StyleSheet,
    View,
} from 'react-native';

import Header from "./Header";
import Navbar from "./Navbar";
import Player from "./Player";
import RequestList from "./RequestList";

export default class Party extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.PartyContainer}>

                <Header/>

                <Player/>

                <RequestList/>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    PartyContainer: {
        flex: 1,
        backgroundColor: '#040404',
        alignSelf: 'stretch',
    },

    //Header
    PartyHeader: {
        backgroundColor: 'gray',
        alignSelf: 'stretch',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    UtilityNav: {
        flexDirection: 'row',
        backgroundColor: 'gray',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 4,
        paddingRight: 4,
    },
    UtilityNavText: {
        color: 'white',
        fontWeight: 'bold',
    },

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

    //Requests

    RequestsContainer: {
        backgroundColor: '#bbbbbb',
        flex: 7,
    },
    RequestListTitleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    RequestListTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    RequestList: {
        flex: 9,
    },/*
    RequestContainer: {
        height: 80,
        paddingTop: 6,
        paddingBottom: 6,
        backgroundColor: 'yellow',
    },
    Request: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    */


    //Bottom Nav Bar
    BottomNavBarContainer: {
        backgroundColor: 'gray',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    BottomNavBar: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    BottomNavBarText: {
        color: 'white',
        fontWeight: 'bold',
    },
});