import {
    START_TIMER,
    LAP_TIMER,
    STOP_TIMER,
    RESET_TIMER
} from '../actions/stopwatchActions';


const INITIAL_STATE = {
    progress: false,
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
                progress: true,
                baseTime: action.baseTime,
                startedAt: action.now,
                stoppedAt: undefined
            };
        case "LAP_TIMER":
            return {
                ...state,
                laps: [...state.laps, (action.now - state.startedAt)  ]
            };
        case "RESET_TIMER":
            return {
                ...state,
                baseTime: 0,
                laps: [],
                startedAt: state.startedAt ? action.now : undefined,
                stoppedAt: state.stoppedAt ? action.now : undefined
            };
        case "STOP_TIMER":
            return {
                ...state,
                progress: false,
                stoppedAt: action.now
            }
        default:
            return state;
    }
}