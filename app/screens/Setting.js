'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert
} from 'react-native';
import SettingsList from 'react-native-settings-list';


class Setting extends Component {
   constructor(){
     super();
     this.onValueChange = this.onValueChange.bind(this);
     this.state = {
		 	switchValue: false,
			weeklyHours: 40,
			daysPerWeek: 5,
			hoursPerDay: 8
		 };
   }    
   render() {
	   return (
			<View style={{backgroundColor:'gray',flex:1}}>
				<View style={{flex:1, marginTop:50}}>
					<SettingsList>
						<SettingsList.Header headerText='Einstellung' headerStyle={styles.header}/>
						<SettingsList.Item
							hasNavArrow={false}
							hasSwitch={false}
							title='Wochenarbeitszeit'
							isEditable={true}
							placeholder={this.state.weeklyHours.toString()}
							onPress={() => this.setState({weeklyHours: this.state.weeklyHours}) } />
						<SettingsList.Item
							hasNavArrow={false}
							isEditable={true}
							hasSwitch={false}
							title='Tage/Woche'
							placeholder={this.state.daysPerWeek.toString()}
							onPress={() => this.setState({daysPerWeek: this.state.daysPerWeek}) }  />
						<SettingsList.Item
							hasNavArrow={false}
							hasSwitch={false}
							title='Stunde/Tag'
							isEditable={true}
							placeholder={this.state.hoursPerDay.toString()}
							onPress={() => this.setState({hoursPerDay: this.state.hoursPerDay}) }  />
						<SettingsList.Header headerText='Enhanced' headerStyle={styles.header}/>
						<SettingsList.Item
							hasNavArrow={false}
							switchState={this.state.switchValue}
							switchOnValueChange={this.onValueChange}
							hasSwitch={true}
							title='Geofencing' />
						<SettingsList.Item
							hasNavArrow={true}
							switchState={this.state.switchValue}
							switchOnValueChange={this.onValueChange}
							hasSwitch={false}
							title='????Übernahme/Stunden????' />
					</SettingsList>
				</View>
			</View>
	   );
   }

   onValueChange(value){
     this.setState({switchValue: value});
   }
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'center', 
		backgroundColor: '#f2ae72'
	},
	header: {
		color: 'white', 
		marginTop: 50
	}
})

export default Setting;