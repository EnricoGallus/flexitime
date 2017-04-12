import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import { Stopwatch } from 'react-native-stopwatch-timer'

class DashBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
                timerStart: false,
                pauseStart: false,
                timerReset: false,
                pauseReset: false
            };
    }

    start() {
        this.setState({timerStart: true, timerReset: false, pauseReset: false});
    }

    continue() {
        this.setState({timerStart: true, pauseStart: false});
    }

    pause() {
        this.setState({timerStart: false, pauseStart: true});
    }

    stop() {
        this.setState({timerStart: false, pauseStart: false, timerReset: true, pauseReset: true});
    }

    getPassedTime = (time) => {
        return time;
    }

    getPausedTime = (time) => {
        return time;
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Stopwatch laps start={this.state.timerStart}
                    reset={this.state.timerReset}
                    options={timer}
                    getTime={this.getTime}/>
                <Stopwatch laps start={this.state.pauseStart}
                    reset={this.state.pauseReset}
                    options={pause}
                    getTime={this.getTime}/>
                <Text style={styles.placeholder} />
                <Text style={styles.weekTime}>geschaffte Zeit{this.state.test}</Text>
                <Text style={styles.saldoTime}>saldo</Text>
                <View style={styles.buttons}>
                    {!this.state.timerStart && !this.state.pauseStart ?
                        <TouchableHighlight style={styles.control} onPress={() => this.start()}>
                            <Text style={styles.center}>Start</Text>
                        </TouchableHighlight >
                    : null
                    }
                    {this.state.pauseStart ?
                        <TouchableHighlight style={styles.control} onPress={() => this.continue()}>
                            <Text style={styles.center}>Continue</Text>
                        </TouchableHighlight >
                    : null
                    }
                    {this.state.timerStart ?
                        <TouchableHighlight style={styles.control} onPress={() => this.pause()}>
                            <Text style={styles.center}>Pause</Text>
                        </TouchableHighlight>
                    : null
                    }
                    {this.state.timerStart || this.state.pauseStart ?
                        <TouchableHighlight style={styles.control} onPress={() => this.stop()}>
                            <Text style={styles.center}>Stop</Text>
                        </TouchableHighlight>
                    : null
                    }
                </View>
            </View>
        )
    }
}

const timer = {
  text: {
    fontSize: 40,
    textAlign: 'right'
  }
};

const pause = {
  text: {
    fontSize: 15,
    textAlign: 'right'
  }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    buttons: {
        flex: 50,
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    control: {
        flex: 50,
        height: 100,
        justifyContent: 'center',
        backgroundColor: 'green'
    },
    center: {
        textAlign: 'center',
    },
    weekTime: {
        fontSize: 40,
        textAlign: 'right',
        backgroundColor: 'brown'
    },
    saldoTime: {
        fontSize: 30,
        textAlign: 'center',
        backgroundColor: 'orange'
    },
    placeholder: {
        flex: 10
    }
})

export default DashBoard