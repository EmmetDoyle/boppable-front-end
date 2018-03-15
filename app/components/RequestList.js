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
    }

    componentDidMount(){

    }

    render(){
        return(
            <View style={styles.RequestsContainer}>
                <View style={styles.RequestList}>
                    <ListView
                        dataSource={this.props.requests}
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