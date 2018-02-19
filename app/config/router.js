import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import VoteScreen from '../screens/VoteScreen';
import PlayerScreen from '../../PlayerScreen';
import SearchScreen from '../screens/SearchScreen';

export const Tabs = TabNavigator({
    VoteScreen: {
        screen: VoteScreen,
    },
    PlayerScreen: {
        screen: PlayerScreen,
    },
    SearchScreen: {
        screen: SearchScreen,
    },
});