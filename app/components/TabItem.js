import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const TabItem = (props) => {
	const selectedButton = props.selected ? {'backgroundColor': '#DDD'} : null

	return (
		<TouchableOpacity activeOpacity={0.7} style={[styles.tabButton, selectedButton]} onPress={() => props.changeTab(props.tab)}>
			<Icon name={props.icon} style={styles.icon} />
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	tabButton: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FFF'
	},

	tabText: {
		color: '#494949'
	},

	icon: {
		fontSize: 30
	}
})

export default TabItem