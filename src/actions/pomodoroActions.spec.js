import { expect } from 'chai';
import * as ActionCreators from './pomodoroActions';
import * as ActionTypes from '../constants/actionTypes';

describe('Actions:RESET_COUNTDOWN', () => {
  const appState = {
    startTime: undefined,
    endTime:undefined,
    timeLeft: undefined  };

    it('should create an action to reset the countdown', () =>{
      const expected = {
        type: ActionTypes.RESET_COUNTDOWN, 
        settings: appState
      };

      expect(ActionCreators.resetCountdown(appState)).to.deep.equal(expected);
    });  
  });

// describe('Actions:START_COUNTDOWN_SUCCESS', () => {
//   const appState = {
//     startTime: undefined,
//     endTime:undefined,
//     timeLeft: 1500  };

//     it('should create an action to START_COUNTDOWN_SUCCESS', () =>{
//       const fieldName = 'currentTime';
//       const value = new Date(12, 15, 0, 0);

//       const expected = {
//         type:ActionTypes.START_COUNTDOWN_SUCCESS,
//         settings: appState,
//         fieldName,
//         value
//       };

//       expect(ActionCreators.startCountdown(appState, fieldName, value)).to.deep.equal(expected);
//     });
// });

// describe('Actions:RECALCULATE_COUNTDOWN', () =>{
//   const appState = {
//     startTime: new Date(12,15,0,0),
//     endTime: new Date(12,40,0,0),
//     timeLeft:1500
//   };
//   it('should create an action to RECALCULATE_COUNTDOWN', () =>{
//     const fieldName = 'currentTime';
//     const value = new Date(12,35,42,0);

//     const expected = {
//       type:ActionTypes.RECALCULATE_COUNTDOWN,
//       settings: appState,
//       fieldName,
//       value};

//       expect(ActionCreators.recalculateCountdown(appState, fieldName, value)).to.deep.equal(expected);
//   });
// });