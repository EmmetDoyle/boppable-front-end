import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    ListView,
    Button,
    Alert,
    Image,
    TouchableHighlight,
} from 'react-native';

import Spotify from 'react-native-spotify';
import Icon from 'react-native-vector-icons/Entypo';


export default class VoteButton extends Component {
    constructor(props){
        super(props);
        this.handlePress = this.handlePress.bind(this);
    }

    handlePress(){
        this.props.onPress();
    }

    render(){
        if(this.props.upvote){
            return(
                <View >
                    <TouchableHighlight style={styles.ButtonContainer} onPress={this.handlePress}>
                        <Icon name="chevron-up" color="#11da58" style={styles.voteButton}/>
                    </TouchableHighlight>
                </View>
            )
        } else if(this.props.downvote){
            return(
                <View >
                    <TouchableHighlight style={styles.ButtonContainer} onPress={this.handlePress}>
                        <Icon name="chevron-down" color="#ff0000" style={styles.voteButton}/>
                    </TouchableHighlight>
                </View>
            )
        } else if(this.props.bop){
            if(this.props.exists){
                return(
                    <View >
                        <TouchableHighlight style={styles.ButtonContainer} onPress={this.handlePress}>
                            <Icon name="chevron-up" color="#11da58" style={styles.voteButton}/>
                        </TouchableHighlight>
                    </View>
                )
            } else {
                return (
                    <View>
                        <TouchableHighlight style={styles.BopContainer} onPress={this.handlePress}>
                            <Text style={styles.bopText}>bop</Text>
                        </TouchableHighlight>
                    </View>
                )
            }
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
    },
    BopContainer: {
        height: 40,
        width: 65,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "#11da58",
        justifyContent: 'center',
        alignItems: 'center',
    },
    bopText: {
        color: 'white',
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 23,
    }
});