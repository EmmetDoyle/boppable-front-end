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

export default class SearchResultList extends Component
{
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            results: [],
        };
    }

    searchTracks(){

        var queryString = this.props.searchQuery;
        var typeArray = ['track'];

        if(queryString != ''){
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

                }
                console.log("searching again");
            })
        }
    }

    componentDidMount(){

    }

    componentDidUpdate(prevProps){
        if(this.props.searchQuery != prevProps.searchQuery){
            this.searchTracks()
        }
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
                                image={rowData.album.images[2].url}
                                requestURI={rowData.uri}
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
    },
    greeting: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    RequestsContainer: {
        flex: 11,
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