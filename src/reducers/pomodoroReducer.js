
import {RESET_COUNTDOWN, RECALCULATE_COUNTDOWN, LOAD_POMODOROS_SUCCESS, START_COUNTDOWN_SUCCESS, UPDATE_FIELD, BIG_DELETE_SUCCESS, SAVED_POMODORO_SUCCESS, UPDATE_DEBUG_MODE} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function pomodoroReducer(state = initialState.pomodoro, action) {
  switch (action.type) {
    case RESET_COUNTDOWN:
      return objectAssign({}, state, {timeLeft:1500, isRunning:false});
    case RECALCULATE_COUNTDOWN:
      var newState = objectAssign({}, state);
      var currentTime = action.value;
      var timeLeft = (state.current.endTime - currentTime)/1000;
      debugger;
      if(timeLeft < 0){
        timeLeft = 0;
        newState.current.confirmationNeeded = true;
        newState.current.isRunning = false;
      }
      newState.current.timeLeft = timeLeft;
      return newState;
    case LOAD_POMODOROS_SUCCESS:
      return objectAssign({}, state, {pomodoros:action.pomodoros});
    case START_COUNTDOWN_SUCCESS:
      return objectAssign({}, state, {current: {endTime:new Date(action.pomodoro.endTime), startTime:new Date(action.pomodoro.startTime), timeLeft:action.pomodoro.timeLeft, isRunning:true}});
    case SAVED_POMODORO_SUCCESS:
      var datifiedPomodoro = objectAssign({}, action.pomodoro);
      datifiedPomodoro.endTime = new Date(datifiedPomodoro.endTime);
      return objectAssign({}, state, {current: datifiedPomodoro});
    case UPDATE_FIELD:
      var newState2 = objectAssign({}, state);
      newState2.current[action.fieldName] = action.value;
      return newState2;
    case BIG_DELETE_SUCCESS:
      return objectAssign({}, state, {pomodoros:action.pomodoros});
    case UPDATE_DEBUG_MODE:
      return objectAssign({}, state, {debug:action.enabled});
    default:
      return state; 
  }
}
