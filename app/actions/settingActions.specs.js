import { weeklyHourChange, daysPerWeekChange, hoursPerDayChange, isGeofencingChange } from './settingActions'

describe('settings action testing', () => {
    test('weeklyHourChange return expected object', () => {
        const returnValue = 132;
        const result = weeklyHourChange(returnValue);
        expect(result.type, "WEEKLY_HOUR_CHANGE");
        expect(result.value, returnValue);
    });

    test('daysPerWeekChange return expected object', () => {
        const returnValue = 132;
        const result = daysPerWeekChange(returnValue);
        expect(result.type, "DAYS_PER_WEEK_CHANGE");
        expect(result.value, returnValue);
    });

    test('hoursPerDayChange return expected object', () => {
        const returnValue = 132;
        const result = hoursPerDayChange(returnValue);
        expect(result.type, "HOURS_PER_DAY_CHANGE");
        expect(result.value, returnValue);
    });

    test('isGeofencingChange return expected object', () => {
        const returnValue = 132;
        const result = isGeofencingChange(returnValue);
        expect(result.type, "ISGEOFENCING_CHANGE");
        expect(result.value, returnValue);
    });
});
