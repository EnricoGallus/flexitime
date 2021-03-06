import {
    START_TIMER,
    START_PAUSE,
    CONTINUE_TIMER,
    STOP_TIMER
} from '../actions/stopwatchActions';


const INITIAL_STATE = {
    updateInterval: 1,
    progressTimer: false,
    progressPause: false,
    baseTime: undefined,
    startedTimerAt: undefined,
    stoppedTimerAt: undefined,
    basePause: undefined,
    startedPauseAt: undefined,
    stoppedPauseAt: undefined,
    timings: [],
};


export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "START_TIMER":
            return {
                ...state,
                progressTimer: true,
                baseTime: action.baseTime,
                startedTimerAt: action.now,
                stoppedTimerAt: undefined
            };
        case "START_PAUSE":
            return {
                ...state,
                progressPause: true,
                progressTimer: false,
                basePause: action.basePause,
                startedPauseAt: action.now,
                stoppedTimerAt: action.now,
                stoppedPauseAt: undefined
            };
        case "CONTINUE_TIMER":
            return {
                ...state,
                progressPause: false,
                progressTimer: true,
                baseTime: action.baseTime,
                startedTimerAt: action.now,
                stoppedTimerAt: undefined,
                stoppedPauseAt: action.now
            };
        case "STOP_TIMER":
            let timings = state.timings;
            timings.push({
                elapsedTime: action.elapsedTime,
                elapsedPause: action.elapsedPause,
                savedAt: action.now
            });
            return {
                ...state,
                timings: timings,
                progressPause: false,
                progressTimer: false,
                baseTime: 0,
                startedTimerAt: undefined,
                stoppedTimerAt: undefined,
                basePause: 0,
                startedPauseAt: undefined,
                stoppedPauseAt: undefined,
            };
        default:
            return state;
    }
}