import { getStartAndEndOfWeek } from './timeHelper'

describe('timeHelper testing', () => {
    test('getStartAndEndOfWeek should return monday and sunday for friday the 14th of february', () => {
        Date.now = jest.fn(() => 1487076708) //14.02.2017


        let result = getStartAndEndOfWeek();
        expect(result.firstday, "WEEKLY_HOUR_CHANGE");
        expect(result.lastday, returnValue);
    });

});
