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
                    placeholderTextColor={'#ffffff'}
                    selectionColor={'#ffffff'}
                    underlineColorAndroid="transparent"
                    onChangeText={this.handleChangeText}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchBarContainer: {
        height: 48,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 5,
    },
    searchBar: {
        alignSelf: 'stretch',
        backgroundColor: '#303030',
        color: 'white',
    },

});