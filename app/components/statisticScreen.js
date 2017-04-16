import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, ScrollView, Text, TouchableHighlight } from 'react-native'
import { navPush } from '../actions/navActions'

class Statistic extends Component {

    componentWillMount() {
        this.monthGroup = this.groupByMonths();
    }

    groupByMonths() {
        const map = new Map();
        this.props.timings.forEach((item) => {
            const savedAt = new Date(item.savedAt);
            const month = savedAt.getMonth() + 1;
            const year = savedAt.getFullYear();
            const key = month + "_" + year;
            if (!map.has(key)) {
                map.set(key, [item]);
            } else {
                map.get(key).push(item);
            }

        });

        const periods = [];
        for (let key of map.keys()) {
            let period = key.split("_");
            let monthValue = 0;
            map.get(key).map((item) => monthValue += item.elapsedTime);
            periods.push({ month: period[0], year: period[1], monthValue})
        }

        return periods;
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                {   this.monthGroup.map((child) => {
                        return (
                                <TouchableHighlight
                                    onPress={() => this.props.onClick({key: "monthDetail", title: "Month Detail", month: child.month, year: child.year})}
                                    key={child.month + "_" + child.year}
                                    style={styles.button}>
                                    <View>
                                        <Text style={styles.periodText}>{child.month}/{child.year}:     {child.monthValue}</Text>
                                    </View>
                                </TouchableHighlight>
                        )
                    })
                }
                </ScrollView>
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
})

export default connect(
    state => ({
        timings: state.stopwatchReducer.timings,
    }),

    dispatch => ({
        onClick: (route) => {
            dispatch(navPush(route))
        }
    })
)(Statistic)