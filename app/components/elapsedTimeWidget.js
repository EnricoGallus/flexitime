import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { secondsToTime, calculateSaldo, elapsedTimeOfThisWeek } from '../helper/timeHelper'

class ElapsedTime extends Component {
    constructor(props) {
        super(props);
        this.elapsedTime = elapsedTimeOfThisWeek(this.props.timings);
        this.state = {
            elapsedTime: this.elapsedTime,
            saldo: calculateSaldo(this.props.weeklyHours, this.elapsedTime)
        }
    }

    render() {
        return (
            <View>
                <View style={styles.elapsedTimeContainer}>
                    <Text style={styles.elapsedTimeHeader}>Wochenarbeitszeit</Text>
                    <Text style={styles.elapsedTimeText}>{secondsToTime(this.state.elapsedTime)}</Text>
                </View>
                <View style={styles.saldoContainer}>
                    <Text style={styles.saldoText}>{secondsToTime(this.state.saldo)}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    elapsedTimeContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 20,
    },
    elapsedTimeText: {
        fontSize: 50,
        color: "black"
    },
    elapsedTimeHeader: {
        fontSize: 25,
        color: "black",
        textAlign: 'center',
    },
    saldoContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 40,
    },
    saldoText: {
        fontSize: 25,
        color: "black"
    },
});

const mapStateToProps = (state) => {
    return {
        weeklyHours: state.settingReducer.weeklyHours,
        timings: state.stopwatchReducer.timings
    }
};

export default connect(mapStateToProps, {})(ElapsedTime);