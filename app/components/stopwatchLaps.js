import React, {Component} from 'react'
import { connect } from 'react-redux'
import {
    Text,
    TouchableOpacity,
    ScrollView,
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

const showLaps = (arr) => {
    return arr.map((item, id) => {
        return (
            <Text style={styles.stopWatchLap} key={id}>{secondsToTime(item)}</Text>
        );
    });
};

class StopWatch extends Component {

    componentDidMount() {
        this.interval = setInterval(this.forceUpdate.bind(this), this.props.updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { progress, startedAt, laps, stoppedAt, baseTime } = this.props;
        const elapsed = getElapsedTime(baseTime, startedAt, stoppedAt);
        return (
            <View style={styles.stopWatch}>
                <View style={styles.stopWatchTimer}>
                    <Text style={styles.stopWatchTimerText}>{secondsToTime(elapsed)}</Text>
                </View>
                <View style={styles.stopWatchButtons}>
                    <View style={styles.stopWatchButtonWrap}>
                        <TouchableOpacity
                            disabled={progress}
                            style={[styles.stopWatchButton, {backgroundColor: '#0583F2'}]}
                            onPress={() => this.props.startTimer(elapsed)}>
                            <Text style={styles.stopWatchButtonText}>Start</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.stopWatchButtonWrap}>
                        <TouchableOpacity
                            disabled={!progress}
                            style={[styles.stopWatchButton, {backgroundColor: '#3C74A6'}]}
                            onPress={() => this.props.lapTimer()}
                            title="Lap"
                            accessibilityLabel="Lap">
                            <Text style={styles.stopWatchButtonText}>Lap</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.stopWatchButtonWrap}>
                        <TouchableOpacity
                            disabled={!progress}
                            style={[styles.stopWatchButton, {backgroundColor: '#1E3E59'}]}
                            onPress={() => this.props.stopTimer()}>
                            <Text style={styles.stopWatchButtonText}>Stop</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.stopWatchButtonWrap}>
                        <TouchableOpacity
                            style={[styles.stopWatchButton, {backgroundColor: '#AD0500'}]}
                            onPress={() => this.props.resetTimer()}>
                            <Text style={styles.stopWatchButtonText}>Reset</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style={styles.stopWatchLaps}>
                    {showLaps(laps)}
                </ScrollView>
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
    stopWatchLaps:{
        paddingLeft: 20
    },
    stopWatchLap: {
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10

    }


})

const mapStateProps = (state) => {
    return {
        progress: state.stopwatchReducer.progress,
        startedAt: state.stopwatchReducer.startedAt,
        laps: state.stopwatchReducer.laps,
        stoppedAt: state.stopwatchReducer.stoppedAt,
        baseTime: state.stopwatchReducer.baseTime
    }
}

export default connect(mapStateProps, {...stopWatchActions})(StopWatch);