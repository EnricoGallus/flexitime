import React, { Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native';
import SettingsList from 'react-native-settings-list'


class Setting extends Component {
   constructor(){
     super();
     this.state = {isGeofencing: false, weeklyHours: 40, daysPerWeek: 5, hoursPerDay: 8};
   }

   render() {
       return (
            <View style={styles.page}>
                <View style={styles.container}>
                    <SettingsList>
                        <SettingsList.Header headerText='Einstellung' headerStyle={styles.header}/>
                        <SettingsList.Item
                            id="weeklyHour"
                            isEditable={true}
                            hasNavArrow={false}
                            hasSwitch={false}
                            title='Wochenarbeitszeit'
                            value={this.state.weeklyHours.toString()}
                            onTextChange={(text) => this.setState({weeklyHours: text})} 
                            />
                        <SettingsList.Item
                            id="daysPerWeek"
                            isEditable={true}
                            hasSwitch={false}
                            hasNavArrow={false}
                            title='Tage/Woche'
                            value={this.state.daysPerWeek.toString()}
                            onTextChange={(text) => this.setState({daysPerWeek: text})} 
                            />
                        <SettingsList.Item
                            id="hoursPerDay"
                            title='Stunde/Tag'
                            isEditable={true}
                            hasSwitch={false}
                            hasNavArrow={false}
                            value={this.state.hoursPerDay.toString()}
                            onTextChange={(text) => this.setState({hoursPerDay: text})} />
                        <SettingsList.Header headerText='Enhanced' headerStyle={styles.header}/>
                        <SettingsList.Item
                            hasNavArrow={false}
                            switchState={this.state.isGeofencing}
                            switchOnValueChange={(value) => this.setState({isGeofencing: value})}
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
}

const styles = StyleSheet.create({
    page: {
        flex:1,
        backgroundColor:'gray'
    },
    container: {
        flex: 1,
        marginTop: 50
    },
    header: {
        color: 'white',
        marginTop: 50
    }
})

export default Setting;