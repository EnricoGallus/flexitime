import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  View,
} from 'react-native';
import SettingsList from 'react-native-settings-list'
import * as settingActions from '../actions/settingActions'


class Setting extends Component {
   render() {
       const { weeklyHours, daysPerWeek, hoursPerDay, isGeofencing } = this.props;
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
                            value={weeklyHours.toString()}
                            onTextChange={(text) => this.props.weeklyHourChange(text)}
                            />
                        <SettingsList.Item
                            id="daysPerWeek"
                            isEditable={true}
                            hasSwitch={false}
                            hasNavArrow={false}
                            title='Tage/Woche'
                            value={daysPerWeek.toString()}
                            onTextChange={(text) => this.props.daysPerWeekChange(text)}
                            />
                        <SettingsList.Item
                            id="hoursPerDay"
                            title='Stunde/Tag'
                            isEditable={true}
                            hasSwitch={false}
                            hasNavArrow={false}
                            value={hoursPerDay.toString()}
                            onTextChange={(text) => this.props.hoursPerDayChange(text)} />
                        <SettingsList.Header headerText='Enhanced' headerStyle={styles.header}/>
                        <SettingsList.Item
                            hasNavArrow={false}
                            switchState={isGeofencing}
                            switchOnValueChange={(value) => this.props.isGeofencingChange(value)}
                            hasSwitch={true}
                            title='Geofencing' />
                        <SettingsList.Item
                            hasNavArrow={true}
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
});

const mapStateToProps = (state) => {
    return {
        weeklyHours: state.settingReducer.weeklyHours,
        daysPerWeek: state.settingReducer.daysPerWeek,
        hoursPerDay: state.settingReducer.hoursPerDay,
        isGeofencing: state.settingReducer.isGeofencing,
    }
};

export default connect(mapStateToProps, {...settingActions})(Setting);