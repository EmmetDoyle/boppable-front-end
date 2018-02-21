import React, { Component } from 'react';
import {
    ListView,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    TextInput,
} from 'react-native';

import Request from '../components/Request';
import SearchResult from '../components/SearchResult';

import Spotify from 'react-native-spotify';
import SearchResultList from "../components/SearchResultList";

export default class SearchScreen extends Component
{
    constructor(props){
        super(props);
        this.state = {
            text: '',
        };
    }

    handleChangeText = (typedText) => {
        this.setState({text: typedText});
    }


    render()
    {
        return (
            <View style={styles.RequestsContainer}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Search for a song here"
                    onChangeText={this.handleChangeText}
                />
                <SearchResultList searchQuery={this.state.text}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    greeting: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

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
    },
});