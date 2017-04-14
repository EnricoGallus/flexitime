export function startTimer(baseTime = 0) {
    return {
        type: "START_TIMER",
        baseTime: baseTime,
        now: new Date().getTime()
    };
}

export function startPause(basePause = 0) {
    return {
        type: "START_PAUSE",
        basePause: basePause,
        now: new Date().getTime()
    };
}

export function continueTimer(baseTime) {
    return {
        type: "CONTINUE_TIMER",
        baseTime: baseTime,
        now: new Date().getTime()
    };
}

export function stopTimer() {
    return {
        type: "STOP_TIMER",
        now: new Date().getTime()
    }
}