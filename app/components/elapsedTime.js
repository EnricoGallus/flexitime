import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { secondsToTime, secondsToHours, elapsedTimeOfThisWeek } from '../helper/timeHelper'

class ElapsedTime extends Component {
    constructor(props) {
        super(props);
        this.state = {elapsedTime: 0}
    }

    componentDidMount() {
        this.setState({elapsedTime: elapsedTimeOfThisWeek(this.props.timings)});
    }

    render() {
        return (
            <View>
                <View style={styles.elapsedTimeContainer}>
                    <Text style={styles.elapsedTimeText}>{secondsToTime(this.state.elapsedTime)}</Text>
                </View>
                <View style={styles.saldoContainer}>
                    <Text style={styles.saldoText}>{-this.props.weeklyHours + secondsToHours(this.state.elapsedTime)}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    elapsedTimeContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 10,
    },
    elapsedTimeText: {
        fontSize: 50,
        color: "#000000"
    },
    saldoContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 40,
    },
    saldoText: {
        fontSize: 35,
        color: "#000000"
    },
});

const mapStateToProps = (state) => {
    return {
        weeklyHours: state.settingReducer.weeklyHours,
        timings: state.stopwatchReducer.timings
    }
};

export default connect(mapStateToProps, {})(ElapsedTime);