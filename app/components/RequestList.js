import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    ListView,
    ActivityIndicator
} from 'react-native';

import Request from './Request';

export default class RequestList extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            requests: [],
        };
    }

    componentDidMount(){
        fetch("https://api.myjson.com/bins/r3gyl")
            .then((response) => response.json())
            .then((responseJson) => {
                const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

                console.log("Before setState");
                this.setState({
                    isLoading: false,
                    requests: ds.cloneWithRows(responseJson)
                });
                console.log("After setState");
            })
    }

    render(){
        if(this.state.isLoading){
            return(
                <View style={styles.RequestsContainer}>
                    <ActivityIndicator />
                </View>
            )
        }
        return(
            <View style={styles.RequestsContainer}>
                <View style={styles.RequestListTitleContainer}>
                    <Text style={styles.RequestListTitle}>Coming Up:</Text>
                </View>
                <View style={styles.RequestList}>
                    <ListView
                        dataSource={this.state.requests}
                        renderRow={
                            (rowData) => <Request votes={rowData.votes}
                                                  requestTrack={rowData.requestTrack}
                                                  requestArtist={rowData.requestArtist}
                                                  suggesterName={rowData.suggesterName}
                            />
                        }
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
    },
});