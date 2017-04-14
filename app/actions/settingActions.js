export function weeklyHourChange(weeklyHour) {
    return {
        type: "WEEKLY_HOUR_CHANGE",
        value: weeklyHour,
    };
}

export function daysPerWeekChange(daysPerWeek) {
    return {
        type: "DAYS_PER_WEEK_CHANGE",
        value: daysPerWeek,
    };
}

export function hoursPerDayChange(hoursPerDay) {
    return {
        type: "HOURS_PER_DAY_CHANGE",
        value: hoursPerDay,
    };
}

export function isGeofencingChange(isGeofencing) {
    return {
        type: "ISGEOFENCING_CHANGE",
        value: isGeofencing
    }
}