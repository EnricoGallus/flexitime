import {
    WEEKLY_HOUR_CHANGE,
    DAYS_PER_WEEK_CHANGE,
    HOURS_PER_DAY_CHANGE,
    ISGEOFENCING_CHANGE
} from '../actions/settingActions';


const INITIAL_STATE = {
    weeklyHours: 40,
    daysPerWeek: 5,
    hoursPerDay: 8,
    isGeofencing: false,
};


export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "WEEKLY_HOUR_CHANGE":
            return {
                ...state,
                weeklyHours: action.value,
            };
        case "DAYS_PER_WEEK_CHANGE":
            return {
                ...state,
                daysPerWeek: action.value,
            };
        case "HOURS_PER_DAY_CHANGE":
            return {
                ...state,
                hoursPerDay: action.value,
            };
        case "ISGEOFENCING_CHANGE":
            return {
                ...state,
                isGeofencing: action.value,
            };
        default:
            return state;
    }
}