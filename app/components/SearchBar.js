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
                    placeholder="Search for a song"
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
        height: 75,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 15,
    },
    searchBar: {
        alignSelf: 'stretch',
        backgroundColor: '#2D2B2A',
        color: 'white',
        borderRadius: 10,
        fontSize: 20,
        paddingLeft: 15,
    },

});