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
import Icon from 'react-native-vector-icons/Entypo';


export default class VoteButton extends Component {
    render(){
        if(this.props.upvote){
            return(
                <View style={styles.ButtonContainer}>
                    <Icon name="chevron-up" color="#1ed760" style={styles.voteButton}/>
                </View>
            )
        } else if(this.props.downvote){
            return(
                <View style={styles.ButtonContainer}>
                    <Icon name="chevron-down" color="#ff0000" style={styles.voteButton}/>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({

    //Requests
    ButtonContainer: {
        height: 35,
        width: 35,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
    },
    voteButton:{
        alignSelf: "center",
        justifyContent: "center",
        fontSize: 32,
    }

});