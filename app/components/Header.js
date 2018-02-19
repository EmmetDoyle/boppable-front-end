import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class Header extends Component {


    render(){
        return(
            <View style={styles.PartyHeader}>
                <View style={styles.UtilityNav}>
                    <Text style={styles.UtilityNavText}>
                        back
                    </Text>
                    <Text style={styles.UtilityNavText}>
                        boppable
                    </Text>
                    <Text style={styles.UtilityNavText}>
                        me
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    PartyContainer: {
        flex: 1,
        backgroundColor: '#cecece',
        alignSelf: 'stretch',
    },

    //Header
    PartyHeader: {
        backgroundColor: 'gray',
        alignSelf: 'stretch',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    UtilityNav: {
        flexDirection: 'row',
        backgroundColor: 'gray',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 4,
        paddingRight: 4,
    },
    UtilityNavText: {
        color: 'white',
        fontWeight: 'bold',
    },

});