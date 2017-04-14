import React, {Component} from 'react'
import { connect } from 'react-redux'
import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet
} from 'react-native'
import Dimensions from 'Dimensions';
import * as stopWatchActions from '../actions/stopwatchActions'

const WIDTH = Dimensions.get('window').width;


const getElapsedTime = (baseTime, startedAt, stoppedAt = new Date().getTime()) => {
    if (!startedAt) {
        return 0;
    } else {
        return stoppedAt - startedAt + baseTime;
    }
};

const secondsToTime = (s) => {
    function pad(n, z) {
        z = z || 2;
        return ('00' + n).slice(-z);
    }

    let ms = s % 1000;
    s = (s - ms) / 1000;
    let secs = s % 60;
    s = (s - secs) / 60;
    let mins = s % 60;
    let hrs = (s - mins) / 60;

    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}.${pad(ms, 3)}`;
};

class StopWatch extends Component {

    componentDidMount() {
        console.log(this.props.updateInterval);
        this.interval = setInterval(this.forceUpdate.bind(this), this.props.updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { progressTimer, progressPause, startedAt, laps, stoppedAt, baseTime } = this.props;
        const elapsed = getElapsedTime(baseTime, startedAt, stoppedAt);
        const elapsedPause = 0;
        return (
            <View style={styles.stopWatch}>
                <View style={styles.stopWatchTimer}>
                    <Text style={styles.stopWatchTimerText}>{secondsToTime(elapsed)}</Text>
                </View>
                <View style={styles.stopWatchPause}>
                    <Text style={styles.stopWatchPauseText}>{secondsToTime(elapsedPause)}</Text>
                </View>
                <View style={styles.stopWatchButtons}>
                    { !progressTimer && !progressPause ?
                        <TouchableOpacity
                            style={[styles.stopWatchButton, {backgroundColor: '#0583F2'}]}
                            onPress={() => this.props.startTimer(elapsed)}>
                            <Text style={styles.stopWatchButtonText}>Start</Text>
                        </TouchableOpacity>
                        : null
                    }
                    { progressTimer && !progressPause ?
                        <TouchableOpacity
                            style={[styles.stopWatchButton, {backgroundColor: '#3C74A6'}]}
                            onPress={() => this.props.lapTimer()}
                            title="Lap"
                            accessibilityLabel="Lap">
                            <Text style={styles.stopWatchButtonText}>Lap</Text>
                        </TouchableOpacity>
                        : null
                    }
                    { !progressTimer && progressPause ?
                        <TouchableOpacity
                            style={[styles.stopWatchButton, {backgroundColor: '#1E3E59'}]}
                            onPress={() => this.props.stopTimer()}>
                            <Text style={styles.stopWatchButtonText}>Stop</Text>
                        </TouchableOpacity>
                        : null
                    }
                    { progressTimer || progressPause ?
                        <TouchableOpacity
                            style={[styles.stopWatchButton, {backgroundColor: '#AD0500'}]}
                            onPress={() => this.props.resetTimer()}>
                            <Text style={styles.stopWatchButtonText}>Reset</Text>
                        </TouchableOpacity>
                        : null
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    stopWatch: {
        flex: 1
    },
    stopWatchTimer: {
        justifyContent: 'center',
        alignSelf: 'center'
    },
    stopWatchTimerText: {
        fontSize: 50,
        color: "#000000"
    },
    stopWatchPause: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 20,
    },
    stopWatchPauseText: {
        fontSize: 20,
        color: "#000000"
    },
    stopWatchButtons: {
        flexDirection: 'row',
        height: 46,
    },
    stopWatchButton: {
        flex: 1,
        height: 46,
        width: WIDTH / 4,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    stopWatchButtonText: {
        fontSize: 20,
        color: "#ffffff",
        justifyContent: 'center',
        alignSelf: 'center'

    },
})

const mapStateProps = (state) => {
    return {
        progressTimer: state.stopwatchReducer.progressTimer,
        progressPause: state.stopwatchReducer.progressPause,
        startedAt: state.stopwatchReducer.startedAt,
        laps: state.stopwatchReducer.laps,
        stoppedAt: state.stopwatchReducer.stoppedAt,
        baseTime: state.stopwatchReducer.baseTime
    }
}

export default connect(mapStateProps, {...stopWatchActions})(StopWatch);