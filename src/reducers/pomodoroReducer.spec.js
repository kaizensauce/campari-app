import { expect } from 'chai';
import * as ActionTypes from '../constants/actionTypes';
import reducer from './pomodoroReducer';

// describe('Reducers::Pomodoro:Unknown', () => {
//   const getInitialState = () => {
//     return {
//             startTime: undefined,
//             endTime: undefined,
//             timeLeft: undefined,
//             isRunning: false
//         };
//   };

//   it('should set initial state by default', () => {
//     const action = { type: 'unknown' };
//     const expected = getInitialState();

//     expect(reducer(getInitialState(), action)).to.deep.equal(expected); // Notice use of deep because it's a nested object
//   });  
// });

describe('Reducers::Pomodoro:ResetCountdown', () => {
  const getInitialState = () => {
    return {
            startTime: undefined,
            endTime: undefined,
            timeLeft: undefined,
            isRunning: true
        };
  };

  const getExpectedState = () => {
   return {
            startTime: undefined,
            endTime: undefined,
            timeLeft: 1500,
            isRunning:false
        };
  };

  it('should set reset countdown', () => {
    const action = { type: ActionTypes.RESET_COUNTDOWN, settings:getInitialState()};
    const expected = getExpectedState();

    expect(reducer(getInitialState(), action)).to.deep.equal(expected); // Notice use of deep because it's a nested object
  });  
});

// describe('Reducers::Pomodoro:Start', () => {
//   const getInitialState = () => {
//     return {startTime: undefined, endTime: undefined, timeLeft: 1500, isRunning:false};
//   };

//   const getExpectedState = () => {
//    return {startTime: new Date(2015,1,1,12, 20, 0, 0), endTime: new Date(2015,1,1,12, 45, 0, 0), timeLeft: 1500, isRunning:true};
//   };

//   it('should set start time and end time', () => {
//     const startTime = new Date(2015,1,1,12, 20, 0, 0);
//     const action = { type: ActionTypes.START_COUNTDOWN, settings:getInitialState(), fieldName: 'startTime', value: startTime};
//     const expected = getExpectedState();

//     expect(reducer(getInitialState(), action)).to.deep.equal(expected); // Notice use of deep because it's a nested object
//   });  
// });

describe('Reducers::Pomodoro::RecalculateCountdown',() =>{
  const getInitialState = () =>{
    return{current:{startTime: new Date(2015,1,1,12,20,0,0), endTime: new Date(2015,1,1,12,45,0,0), timeLeft:1500, isRunning:true}};
  };
  const getExpectedState = () =>{
    return {current:{startTime: new Date(2015,1,1,12,20,0,0), endTime: new Date(2015,1,1,12,45,0,0), timeLeft:600, isRunning:true}};
  };

  it('should recalculate the countdown time', () =>{
    const currentTime = new Date(2015,1,1,12,35);
    const action = {type:ActionTypes.RECALCULATE_COUNTDOWN, settings:getInitialState(), fieldName: 'currentTime', value:currentTime};
    const expected = getExpectedState();

    expect(reducer(getInitialState(), action)).to.deep.equal(expected);
  });
});