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
        fetch("http://159.65.91.61:8000/parties/0039/")
            .then((response) => response.json())
            .then((responseJson) => {
                const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

                //console.log(responseJson);

                this.setState({
                    isLoading: false,
                    requests: ds.cloneWithRows(responseJson.playlist.tracks)
                });
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
                <View style={styles.RequestList}>
                    <ListView
                        dataSource={this.state.requests}
                        renderRow={
                            (rowData) => <Request votes={rowData.votes}
                                                  track_id={rowData.track_id}
                                                  suggester={rowData.suggester.name}
                                                  trackVotingID={rowData.id}
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