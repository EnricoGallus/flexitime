import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert
} from 'react-native';
import SettingsList from 'react-native-settings-list'
import store from 'react-native-simple-store'


class Setting extends Component {
   constructor(){
     super();
     this.state = {isGeofencing: false, weeklyHours: 40, daysPerWeek: 5, hoursPerDay: 8};
   }

   componentDidMount() {
        store
        .get('settings')
        .then(settings => { 
            this.setState({isGeofencing: settings.isGeofencing ? settings.isGeofencing : false});
            this.setState({weeklyHours: settings.weeklyHours ? settings.weeklyHours : 40});
            this.setState({daysPerWeek: settings.daysPerWeek ? settings.daysPerWeek : 5});
            this.setState({hoursPerDay: settings.hoursPerDay ? settings.hoursPerDay : 8});
        })
        .catch(error => {console.error(error.message);});
   }

   componentDidUpdate() {
       store
        .save('settings', {
           isGeofencing: this.state.isGeofencing,
           weeklyHours: this.state.weeklyHours,
           daysPerWeek: this.state.daysPerWeek,
           hoursPerDay: this.state.hoursPerDay
        })
       .catch(error => {console.error(error.message);});;
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