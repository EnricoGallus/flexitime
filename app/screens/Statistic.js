import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { navPush } from '../actions/NavActions'
import Button from '../components/Button'


const Statistic = (props) => {
	return (
		<View style={styles.container}>
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
)(Statistic)