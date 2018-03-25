import React, { Component } from 'react';

import {
    ListView,
    StyleSheet,
    View,
    ActivityIndicator,
} from 'react-native';

import Header from "./Header";
import Navbar from "./Navbar";
import PlayerContainer from "./PlayerContainer";
import RequestList from "./RequestList";
import Spotify from "react-native-spotify";
import Request from "./Request";

export default class Party extends Component {

    constructor(props){
        super(props);

        this.state = {
            url: "http://159.65.91.61/",
            user: 1,
            partyID: '0039',
            party: {},
            playingTrack: {},
            endTime: 0,
            playing: false,
            requests: [],
            isLoading: true,
        };

        this.togglePlaying = this.togglePlaying.bind(this);
        this.updateEndTime = this.updateEndTime.bind(this);
        this.setPlaystate = this.setPlaystate.bind(this);
    }

    updateEndTime(newTime){
        this.setState({endTime: newTime});
    }

    setPlaystate(state){
        console.log("setting playState to " + state);
        this.setState({playing: state});
    }

    togglePlaying(playState){
        if(playState){
            this.deleteTrackFromPlaylist().then(() => this.setState({playing: playState}));
        } else {
            this.setState({playing: playState});
        }
    }

    deleteTrackFromPlaylist(){
        console.log("Deleting track: " + this.state.party.playlist.tracks[0].id);
        return fetch("http://159.65.91.61/trackvoting/" + this.state.party.playlist.tracks[0].id, {
            method: 'delete'
        })
    }

    getTracksFromApi(){
        // console.log("in getTracksFromApi. state.playing is: " + this.state.playing);
        fetch("http://159.65.91.61/parties/0039/")
            .then((response) => response.json())
            .then((responseJson) => {

                const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                if(this.state.playing){
                    this.setState({
                        requests: ds.cloneWithRows(responseJson.playlist.tracks),
                        isLoading: false
                    });
                }else{
                    this.setState({
                        playingTrack: responseJson.playlist.tracks[0],
                        requests: ds.cloneWithRows(responseJson.playlist.tracks.slice(1)),
                        isLoading: false
                    });
                }
            })
    }

    getPartyFromApi() {
        fetch(this.state.url + "parties/" + this.state.partyID + "/")
            .then((response) => response.json())
            .then((partyResponse) => {
                this.setState({
                    party: partyResponse,
                    isLoading: false,
                })
            });
        // console.log(this.state.party);
    }

    refreshParty() {
        if(this.state.endTime < Date.now() && this.state.playing){
            this.deleteTrackFromPlaylist();
                // .then(this.getPartyFromApi());
            this.setState({playing: false});
        } else {
            this.getPartyFromApi();
        }
    }

    componentDidMount(){
        this.interval = setInterval(() => {this.refreshParty()}, 5000);
        this.getPartyFromApi();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidUpdate(){
        // console.log(this.state);
    }

    _shouldComponentUpdate(nextProps, nextState){
        if(this.state.playing == nextState.playing){
            if(this.state.isLoading != nextState.isLoading){
                return true;
            }
            //playing didn't change so no need to update
            return false;
        } else {
            return true;
        }
    };

    _componentDidUpdate(){
        console.log("In componentDidUpdate");
        this.getTracksFromApi();
    }

    render(){

        if(this.state.isLoading){
            return(
                <View style={styles.RequestsContainer}>
                    <ActivityIndicator />
                </View>
            )
        } else {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            let requests = ds.cloneWithRows(this.state.party.playlist.tracks.slice(1));

            return (
                <View style={styles.PartyContainer}>

                    <PlayerContainer
                        suggester={this.state.party.playlist.tracks[0].suggester.name}
                        track_id={this.state.party.playlist.tracks[0].track_id}
                        playing={this.state.playing}
                        onUpdateEndTime={this.updateEndTime}
                        onSetPlaystate={this.setPlaystate}
                    />

                    <RequestList
                        requests={requests}
                    />

                </View>
            )
        }
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