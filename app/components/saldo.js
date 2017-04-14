import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { elapsedTimeOfThisWeek } from '../helper/storageHelper'

class Saldo extends Component {
    constructor(props) {
        super(props)
        this.state = {saldo: null}
    }

    componentDidMount() {
        this.setState({saldo: this.getSaldoOfThisWeek(this.props.weeklyHours)});
    }

    getSaldoOfThisWeek(weeklyHours) {
        elapsedTimeOfThisWeek()
            .then((time) => this.setState({saldo: weeklyHours - time}))
            .then(res => this.setState({saldo: weeklyHours}));
    }

    render() {
        return (
            <View style={styles.saldoContainer}>
                <Text style={styles.saldoText}>{this.state.saldo}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    saldoContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 20,
    },
    saldoText: {
        fontSize: 20,
        color: "#000000"
    },
})

const mapStateToProps = (state) => {
    return {
        weeklyHours: -state.settingReducer.weeklyHours,
    }
}

export default connect(mapStateToProps, {})(Saldo);