import React, { Component } from 'react';
import {
    Text,
    TouchableHighlight,
    View,
    StyleSheet
} from 'react-native';

class MonthYearRow extends Component {

    render() {
        const { info, viewMonthDetail } = this.props;
        return (
            <TouchableHighlight
                onPress={viewMonthDetail.bind(this, info.month, info.year)}
                style={styles.button}>
                <View>
                    <Text style={styles.periodText}>{info.month}/{info.year}:     {info.monthValue}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        height: 100,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    periodText: {
        textAlign: 'center',
        fontSize: 25
    }
});

export { MonthYearRow }