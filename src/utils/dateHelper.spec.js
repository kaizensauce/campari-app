import {expect} from 'chai';
import DateHelper from './dateHelper';

describe('Date Helper', () => {
  describe('getFormattedDateTime', () => {
    it('returns mm/dd hh:mm:ss formatted time when passed a date', () => {
      // arrange
      // The 7 numbers specify the year, month, day, hour, minute, second, and millisecond, in that order
      const date = new Date(99, 0, 24, 11, 33, 30, 0);

      // assert
      expect(DateHelper.getFormattedTime(date)).to.equal('11:33:30');
    });

    it('pads single digit minute and second values with leading zeros', () => {
      // arrange
      // The 7 numbers specify the year, month, day, hour, minute, second, and millisecond, in that order
      const date = new Date(99, 0, 4, 11, 3, 2, 0);

      // assert
      expect(DateHelper.getFormattedTime(date)).to.equal('11:03:02');
    });

    
    it('pads single digit minute and second values with leading zeros', () => {
      // arrange
      // The 7 numbers specify the year, month, day, hour, minute, second, and millisecond, in that order
      const date = new Date(99, 0, 4, 11, 3, 2, 0);

      // assert
      expect(DateHelper.getFormattedTime(date)).to.equal('11:03:02');
    });
  });

    describe('convertSecondsToMinutesAndSeconds', () => {
    it('returns dd hh:mm:ss formatted time when passed seconds', () => {
      // arrange
    const seconds = 1550;

      // assert
      expect(DateHelper.convertSecondsToMinutesAndSeconds(seconds)).to.equal('25:50');
    });
  });
});
