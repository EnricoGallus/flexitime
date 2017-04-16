function getStartAndEndOfWeek(date) {
    // If no date object supplied, use current date
    // Copy date so don't modify supplied date
    let now = date ? new Date(date) : new Date();


    // Get the previous Monday from midnight
    let monday = new Date(now);
    monday.setDate(monday.getDate() - monday.getDay() + (monday.getDay() == 0 ? -6 : 1));
    monday.setHours(0,0,0,0);

    // Get next Sunday from 1 second before midnight
    let sunday = new Date(now);
    sunday.setDate(sunday.getDate() - sunday.getDay() + (sunday.getDay() == 0 ? 0 : 7));
    sunday.setHours(23,59,59,0);

    // Return array of date objects
    return {monday, sunday};
}

export function elapsedTimeOfThisWeek(timings) {
    let startAndEndOfThisWeek = getStartAndEndOfWeek();
    let elapsedTime = 0;

    timings.map((timing) => {
        let mondayTime = startAndEndOfThisWeek.monday.getTime();
        let sundayTime = startAndEndOfThisWeek.sunday.getTime();
        if (timing.savedAt >= mondayTime && timing.savedAt <= sundayTime)
            elapsedTime += timing.elapsedTime;
    });

    return elapsedTime;
}

export function getElapsedTime(baseTime, startedAt, stoppedAt = new Date().getTime()) {
    if (!startedAt) {
        return 0;
    } else {
        return stoppedAt - startedAt + baseTime;
    }
}

export function secondsToTime(s) {
    let ms = s % 1000;
    s = (s - ms) / 1000;
    let secs = s % 60;
    s = (s - secs) / 60;
    let mins = s % 60;
    let hrs = (s - mins) / 60;

    return `${hrs.padLeft(1)}h${mins.padLeft(2)}min`;
}

Number.prototype.padLeft = function (n, str) {
    return (this < 0 ? '-' : '') +
        Array(n-String(Math.abs(this)).length+1)
            .join(str||'0') +
        (Math.abs(this));
}

function calculateSaldo(weeklyHoursInHours, elapsedTimeInSeconds) {
    let weeklyHoursInSecondsNegative = weeklyHoursInHours * 3600000 * -1;
    let result = weeklyHoursInSecondsNegative + elapsedTimeInSeconds;
    return result;
}

export { getStartAndEndOfWeek, calculateSaldo }