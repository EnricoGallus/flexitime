import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import Stopwatch from './stopwatchLaps'

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Stopwatch />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        marginTop: 20,
    }
})

export default Home