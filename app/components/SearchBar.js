import React, { Component } from 'react';
import {
    ListView,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    TextInput,
} from 'react-native';

export default class SearchBar extends Component
{
    constructor(props){
        super(props);
        this.state = {
            text: '',
        };
    }

    handleChangeText = (typedText) => {
        this.props.onChange(typedText);
    }


    render()
    {
        return (
            <View style={styles.searchBarContainer}>
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search for a song here"
                    onChangeText={this.handleChangeText}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchBarContainer: {
        flex: 1,
        minHeight: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
    },
    searchBar: {
        alignSelf: 'stretch',
        paddingLeft: 5,
    },

});