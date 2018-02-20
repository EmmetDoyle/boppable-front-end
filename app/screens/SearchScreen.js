import React, { Component } from 'react';
import {
    ListView,
    StyleSheet,
    Text,
    View,
    ActivityIndicator
} from 'react-native';

import Request from '../components/Request';
import SearchResult from '../components/SearchResult';

import Spotify from 'react-native-spotify';

export default class SearchScreen extends Component
{
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            results: [],
        };
    }

    componentDidMount(){

        var queryString = "power";
        var typeArray = ['track'];

        Spotify.search(queryString, typeArray, null, (result, error) => {
            if(error){
                console.log(error);
            }

            if(result){
                console.log(result);
                const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

                this.setState({
                    isLoading: false,
                    results: ds.cloneWithRows(result.tracks.items)
                });

                console.log(this.state.results);
            }

        })
    }

    render()
    {
        if(this.state.isLoading){
            return(
                <View style={styles.RequestsContainer}>
                    <ActivityIndicator />
                </View>
            )
        }
        return (
            <View style={styles.RequestsContainer}>
                <View style={styles.RequestList}>
                    <ListView
                        dataSource={this.state.results}
                        renderRow={
                            (rowData) => <SearchResult
                                requestTrack={rowData.name}
                                requestArtist={rowData.artists[0].name}
                            />
                        }
                    />
                </View>
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