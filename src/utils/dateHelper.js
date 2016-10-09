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
    let seconds = rawSeconds - (minutes * 60);

    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return minutes+':'+Math.round(seconds);
  }

  static addMinutes(date, seconds) {
    return new Date(date.getTime() + seconds*1000);
  }
}
