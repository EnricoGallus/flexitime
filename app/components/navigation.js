import React, { Component } from 'react'
import { StyleSheet, View, NavigationExperimental } from 'react-native';

import TabBar from './tabBar'

import HomeScreen from '../screens/home'
import StatisticScreen from '../screens/statistic'
import SettingScreen from '../screens/setting'

const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader
} = NavigationExperimental;


class Navigation extends Component {
    constructor(props) {
        super(props)

        this._renderHeader = this._renderHeader.bind(this)
        this._renderScene = this._renderScene.bind(this)
    }

    _renderHeader(props, backAction, tabKey) {
        return (
            <NavigationHeader
                {...props}

                onNavigateBack={() => backAction(tabKey)}
                renderTitleComponent={props => {
                    const title = props.scene.route.title
                    return <NavigationHeader.Title textStyle={styles.navTitle}>{title}</NavigationHeader.Title>
                }} />
        )
    }

    _renderScene(navigationState) {
        const scene = navigationState.scene.route.key;
        switch (scene) {
            case 'home': {
                return <HomeScreen />
            }

            case 'statistic': {
                return <StatisticScreen />
            }

            case 'setting': {
                return <SettingScreen />
            }

            default: {
                return <View style={styles.screen} />
            }
        }

    }

    render() {
        const {navigationState, backAction, changeTab} = this.props;
        const {tabs} = navigationState;
        const tabKey = tabs.routes[tabs.index].key;
        const icon = tabs.routes[tabs.index].icon;
        const scenes = navigationState[tabKey];

        return (
            <View style={styles.container}>
                <NavigationCardStack
                    key={'stact_' + tabKey }
                    onNavigateBack={() => backAction(tabKey)}
                    navigationState={scenes}
                    renderOverlay={ (props) => this._renderHeader(props, backAction, tabKey)}
                    renderScene={this._renderScene}
                />
                <TabBar
                    navigationState={tabs}
                    icon={icon}
                    changeTab={changeTab} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    navTitle: {
        color: '#494949'
    },

    screen: {
        flex: 1,
        backgroundColor: '#f2e394'
    }
})


export default Navigation