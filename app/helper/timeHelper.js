export function getStartAndEndOfWeek(date) {
    // If no date object supplied, use current date
    // Copy date so don't modify supplied date
    let now = date ? new Date(date) : new Date();

    // set time to some convenient value
    now.setHours(0,0,0,0);

    // Get the previous Monday
    let monday = new Date(now);
    monday.setDate(monday.getDate() - monday.getDay() + 1);

    // Get next Sunday
    let sunday = new Date(now);
    sunday.setDate(sunday.getDate() - sunday.getDay() + 7);

    // Return array of date objects
    return {monday, sunday};
}

export function elapsedTimeOfThisWeek(timings) {
    let startAndEndOfThisWeek = getStartAndEndOfWeek();
    let elapsedTime = 0;

    timings.map((timing) => {
        if (timing.savedAt >= startAndEndOfThisWeek.monday.getTime() &&
            timing.savedAt <= startAndEndOfThisWeek.sunday.getTime())
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
    function pad(n, z) {
        z = z || 2;
        return ('00' + n).slice(-z);
    }

    let ms = s % 1000;
    s = (s - ms) / 1000;
    let secs = s % 60;
    s = (s - secs) / 60;
    let mins = s % 60;
    let hrs = (s - mins) / 60;

    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}.${pad(ms, 3)}`;
}

export function secondsToHours(s) {
    let ms = s % 1000;
    s = (s - ms) / 1000;
    let secs = s % 60;
    s = (s - secs) / 60;
    let mins = s % 60;
    return (s - mins) / 60;
}