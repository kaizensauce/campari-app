export default class DateHelper {
  // See tests for desired format.
  static getFormattedTime(rawDate) {
    if(!rawDate){return;}
    var date = new Date(rawDate);
    return `${this.padLeadingZero(date.getHours())}:${this.padLeadingZero(date.getMinutes())}:${this.padLeadingZero(date.getSeconds())}`;
  }

  static padLeadingZero(value) {
    return value > 9 ? value : `0${value}`;
  }

  static convertSecondsToMinutesAndSeconds(rawSeconds){
    let minutes = Math.floor(rawSeconds  / 60);
    let seconds = Math.floor(rawSeconds - (minutes * 60));

    var minutesString = minutes < 10 ?  "0" + minutes : minutes;
    var secondsString = seconds < 10 ?  "0" + seconds : seconds;
    return minutesString+':'+secondsString;
  }

  static addMinutes(date, seconds) {
    return new Date(date.getTime() + seconds*1000);
  }
}
