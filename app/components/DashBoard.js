import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Stopwatch from './stopwatchLaps';

class DashBoard extends Component {
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
        marginTop: 50,
        flexDirection: 'column',
        justifyContent: 'center',
    },
})

export default DashBoard;