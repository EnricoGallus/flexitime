import { startTimer, startPause, continueTimer, stopTimer } from './stopwatchActions'

describe('stopwatch action testing', () => {
    test('startTimer return expected object', () => {
        const returnValue = 132;
        const result = startTimer(returnValue);
        expect(result.type, "START_TIMER");
        expect(result.value, returnValue);
        expect(result.now, new Date().getTime());
    });

    test('startPause return expected object', () => {
        const returnValue = 132;
        const result = startPause(returnValue);
        expect(result.type, "START_PAUSE");
        expect(result.value, returnValue);
        expect(result.now, new Date().getTime());
    });

    test('continueTimer return expected object', () => {
        const returnValue = 132;
        const result = continueTimer(returnValue);
        expect(result.type, "CONTINUE_TIMER");
        expect(result.value, returnValue);
        expect(result.now, new Date().getTime());
    });

    test('stopTimer return expected object', () => {
        const value1 = 132;
        const value2 = 1322;
        const result = stopTimer(value1, value2);
        expect(result.type, "STOP_TIMER");
        expect(result.elapsedTime, value1);
        expect(result.elapsedPause, value2);
        expect(result.now, new Date());
    });
});
