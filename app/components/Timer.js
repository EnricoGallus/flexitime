import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'

class Timer extends Component {
	constructor(props) {
	  super(props)
	}
	
	render() {
		return (
			<View>
                <TouchableHighlight>
                    <Text>Start</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Text>Pause</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Text>Stop</Text>
                </TouchableHighlight>
            </View>
		)
	}
}

export default Timer