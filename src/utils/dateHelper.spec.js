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
      const seconds = 1550;
      expect(DateHelper.convertSecondsToMinutesAndSeconds(seconds)).to.equal('25:50');
    });

    it('Returns a leading zero when seconds is below 10', () =>{
      const seconds = 8;
      expect(DateHelper.convertSecondsToMinutesAndSeconds(seconds)).to.equal('00:08');
    });

    it("Returns a leading zero when the minutes has a value and seconds is below 10", ()=>{
      const seconds = 64;
      expect(DateHelper.convertSecondsToMinutesAndSeconds(seconds)).to.equal('01:04');
    });

  it("Returns a round number of seconds if the input has decimal.", ()=>{
      const seconds = 64.33;
      expect(DateHelper.convertSecondsToMinutesAndSeconds(seconds)).to.equal('01:04');
    });
  });
});
