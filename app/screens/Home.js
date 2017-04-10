import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { navPush } from '../actions/NavActions'
import Timer from '../components/Timer'


const Home = (props) => {
	return (
		<View style={styles.container}>
			<Timer />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'center', 
		backgroundColor: '#f2ae72'
	}
})


export default connect(
	state => ({

	}),

	dispatch => ({
		onClick: (route) => {
			dispatch(navPush(route))
		}
	})
)(Home)