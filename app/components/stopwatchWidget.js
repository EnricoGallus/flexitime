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
import ElapsedTime from './elapsedTimeWidget'
import { getElapsedTime, secondsToTime } from '../helper/timeHelper'

const WIDTH = Dimensions.get('window').width;


class StopWatch extends Component {

    componentDidMount() {
        this.interval = setInterval(this.forceUpdate.bind(this), this.props.updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const {
            progressTimer, progressPause,
            startedTimerAt, stoppedTimerAt, baseTime,
            startedPauseAt, stoppedPauseAt, basePause
            } = this.props;
        const elapsedTime = getElapsedTime(baseTime, startedTimerAt, stoppedTimerAt);
        const elapsedPause = getElapsedTime(basePause, startedPauseAt, stoppedPauseAt);
        return (
            <View style={styles.container}>
                <View style={styles.timers}>
                    <View style={styles.stopWatchTimer}>
                        <Text style={styles.stopWatchTimerHeader}>Tagesarbeitszeit</Text>
                        <Text style={styles.stopWatchTimerText}>{secondsToTime(elapsedTime)}</Text>
                    </View>
                    <View style={styles.stopWatchPause}>
                        <Text style={styles.stopWatchPauseText}>Pause: {secondsToTime(elapsedPause)}</Text>
                    </View>
                </View>
                <ElapsedTime key={progressTimer} />
                <View style={styles.stopWatchButtons}>
                    { !progressTimer && !progressPause ?
                        <TouchableOpacity
                            style={[styles.stopWatchButton, {backgroundColor: '#0583F2'}]}
                            onPress={() => this.props.startTimer(elapsedTime)}
                            title="Start"
                            accessibilityLabel="Start">
                            <Text style={styles.stopWatchButtonText}>Start</Text>
                        </TouchableOpacity>
                        : null
                    }
                    { progressTimer && !progressPause ?
                        <TouchableOpacity
                            style={[styles.stopWatchButton, {backgroundColor: '#3C74A6'}]}
                            onPress={() => this.props.startPause(elapsedPause)}
                            title="Pause"
                            accessibilityLabel="Pause">
                            <Text style={styles.stopWatchButtonText}>Pause</Text>
                        </TouchableOpacity>
                        : null
                    }
                    { !progressTimer && progressPause ?
                        <TouchableOpacity
                            style={[styles.stopWatchButton, {backgroundColor: '#1E3E59'}]}
                            onPress={() => this.props.continueTimer(elapsedTime)}
                            title="Continue"
                            accessibilityLabel="Continue">
                            <Text style={styles.stopWatchButtonText}>Continue</Text>
                        </TouchableOpacity>
                        : null
                    }
                    {
                        <TouchableOpacity
                            disabled={!progressTimer && !progressPause}
                            style={[styles.stopWatchButton, !progressTimer && !progressPause ? {backgroundColor: 'grey'} : {backgroundColor: '#AD0500'}]}
                            onPress={() => {this.props.stopTimer(elapsedTime, elapsedPause); }}
                            title="Stop"
                            accessibilityLabel="Stop">
                            <Text style={styles.stopWatchButtonText}>Stop</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    },
    timers: {
        marginTop: 50,
        marginBottom: 20,
    },
    stopWatchTimer: {
        justifyContent: 'center',
        alignSelf: 'center'
    },
    stopWatchTimerHeader: {
        textAlign: 'center',
        fontSize: 25,
        color: "black"
    },
    stopWatchTimerText: {
        fontSize: 50,
        color: "black"
    },
    stopWatchPause: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 20,
    },
    stopWatchPauseText: {
        fontSize: 20,
        color: "black"
    },
    stopWatchButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'stretch',
        height: 46,
    },
    stopWatchButton: {
        height: 46,
        width: WIDTH / 2.5,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'black',
    },
    stopWatchButtonText: {
        fontSize: 20,
        color: "white",
        justifyContent: 'center',
        alignSelf: 'center'
    },
});

const mapStateToProps = (state) => {
    return {
        updateInterval: state.stopwatchReducer.updateInterval,
        progressTimer: state.stopwatchReducer.progressTimer,
        progressPause: state.stopwatchReducer.progressPause,
        startedTimerAt: state.stopwatchReducer.startedTimerAt,
        stoppedTimerAt: state.stopwatchReducer.stoppedTimerAt,
        baseTime: state.stopwatchReducer.baseTime,
        startedPauseAt: state.stopwatchReducer.startedPauseAt,
        stoppedPauseAt: state.stopwatchReducer.stoppedPauseAt,
        basePause: state.stopwatchReducer.basePause,
    }
};

export default connect(mapStateToProps, {...stopWatchActions})(StopWatch);