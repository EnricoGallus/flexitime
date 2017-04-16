import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

class Record extends Component {
    render() {
        return (
            <View style={styles.container}>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        marginTop: 20
    },
});

export default Record;