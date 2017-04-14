import {
    START_TIMER,
    LAP_TIMER,
    STOP_TIMER,
    RESET_TIMER
} from '../actions/stopwatchActions';


const INITIAL_STATE = {
    progressTimer: false,
    progressPause: false,
    startedAt: undefined,
    laps: [],
    stoppedAt: undefined,
    baseTime: undefined
};


export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "START_TIMER":
            return {
                ...state,
                progressTimer: true,
                baseTime: action.baseTime,
                startedAt: action.now,
                stoppedAt: undefined
            };
        case "LAP_TIMER":
            return {
                ...state,
                progressPause: true,
                progressTimer: false,
                laps: [...state.laps, (action.now - state.startedAt)  ]
            };
        case "STOP_TIMER":
            return {
                ...state,
                progressPause: false,
                progressTimer: true,
                stoppedAt: action.now
            };
        case "RESET_TIMER":
            return {
                ...state,
                progressPause: false,
                progressTimer: false,
                baseTime: 0,
                laps: [],
                startedAt: state.startedAt ? action.now : undefined,
                stoppedAt: state.stoppedAt ? action.now : undefined
            };
        default:
            return state;
    }
}