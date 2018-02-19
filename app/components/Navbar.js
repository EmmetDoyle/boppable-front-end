import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';


export default class Navbar extends Component {

    render(){
        return(

            <View style={styles.BottomNavBarContainer}>
                <View style={styles.BottomNavBar}>
                    <View style={styles.BottomNavBarVote}>
                        <Text style={styles.BottomNavBarText}>Vote</Text>
                    </View>
                    <View style={styles.BottomNavBarParty}>
                        <Text style={styles.BottomNavBarText}>Party</Text>
                    </View>
                    <View style={styles.BottomNavBarRequest}>
                        <Text style={styles.BottomNavBarText}>Request</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    //Bottom Nav Bar
    BottomNavBarContainer: {
        backgroundColor: 'gray',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    BottomNavBar: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    BottomNavBarText: {
        color: 'white',
        fontWeight: 'bold',
    },
});