import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, ScrollView, Text, TouchableHighlight } from 'react-native'

class Statistic extends Component {

    groupByMonths() {
        const map = new Map();
        this.props.timings.forEach((item) => {

            const key = new Date(item.savedAt).getMonth();
            if (!map.has(key)) {
                map.set(key, [item]);
            } else {
                map.get(key).push(item);
            }

        });

        const months = [];
        for (let key of map.keys()) {
            let monthValue = 0;
            map.get(key).map((item) => monthValue += item.elapsedTime);
            months.push({ month: new Date(2010, key).toLocaleString('en-us', {month:"long"}), monthValue})
        }

        return months;
    }

    render() {
        const monthGroup = this.groupByMonths();
        return (
            <View style={styles.container}>
                <ScrollView>
                {   monthGroup.map((child) => {
                        return (
                                <TouchableHighlight
                                    key={child.month}
                                    style={styles.button}>
                                    <View>
                                        <Text style={styles.monthText}>{child.month} - {child.monthValue}</Text>
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
    monthText: {
        textAlign: 'center',
        fontSize: 25
    }
})

const mapStateToProps = (state) => {
    return {
        timings: state.stopwatchReducer.timings,
    }
}


export default connect(mapStateToProps, {})(Statistic)