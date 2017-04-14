import { AsyncStorage } from 'react-native';
import { getStartAndEndOfWeek } from '../helper/timeHelper'

export function saveTiming(timing) {
    AsyncStorage.getItem('timings')
        .then(timings => {
            timings = JSON.parse(timings);
            timings && timings.length ? timings.push(timing) : timings = [timing];
            AsyncStorage.setItem('timings', JSON.stringify(timings));
        })
        .catch(exception => console.log(exception));
}

export async function elapsedTimeOfThisWeek() {
    let startAndEndOfThisWeek = getStartAndEndOfWeek();
    let elapsedTime = 0;
    let timings = await AsyncStorage.getItem('timings');
    JSON.parse(timings).map((timing) => {
        if (timing.savedAt >= startAndEndOfThisWeek.firstday &&
            timing.savedAt <= startAndEndOfThisWeek.lastday)
            elapsedTime += timing.elapsedTime;
    });
    return elapsedTime;
}
