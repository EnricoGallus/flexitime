import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { navPush } from '../actions/NavActions'
import DashBoard from '../components/DashBoard'


const Home = (props) => {
	return (
		<View style={styles.container}>
			<DashBoard />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'center', 
		backgroundColor: 'grey'
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