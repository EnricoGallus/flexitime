import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Record extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.month + " " + this.props.year} </Text>
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