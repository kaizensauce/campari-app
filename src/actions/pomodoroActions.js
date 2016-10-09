import * as types from '../constants/actionTypes';
import pomodoroService from '../services/pomodoro-service';
import dateHelper from '../utils/dateHelper';
import objectAssign from 'object-assign';
import initialState from '../reducers/initialState'

export function resetCountdown(settings){
  return{type:types.RESET_COUNTDOWN, settings};
}

export function startCountdown(settings){
   return function(dispatch){
      var pomodoro = {};
      if(settings.hasCompleted){
        pomodoro = initialState;
      }
      else{
        pomodoro = objectAssign({}, settings);
      }
      pomodoro.startTime = new Date();
      pomodoro.endTime = dateHelper.addMinutes(pomodoro.startTime, 1500);
      pomodoro.timeLeft = 1500;
      pomodoro.isRunning = true;
      pomodoro.taskSummary = settings.taskSummary;
      return pomodoroService.savePomodoro(pomodoro).then(savedPomodoro=>{
         dispatch(savedPomodoroSuccess(savedPomodoro));
      }).catch(error=>{
         throw(error);
    });
  };
}

export function completePomodoro(settings){
  return function(dispatch){
    var pomodoro = objectAssign({}, settings);
    pomodoro.confirmationNeeded = false;
    pomodoro.hasCompleted = true;
    return pomodoroService.updatePomodoro(pomodoro).then(savedPomodoro=>{
      dispatch(savedPomodoroSuccess(savedPomodoro));
    }).catch(error=>{
         throw(error);
    });
  };
}

export function updateField(settings, fieldName, value){
  return {type:types.UPDATE_FIELD, fieldName, value};
}

export function savedPomodoroSuccess(pomodoro){
  return {type:types.SAVED_POMODORO_SUCCESS, pomodoro};
}

export function recalculateCountdown(settings, fieldName, value){
  return function(dispatch){
      var pomodoro = objectAssign({}, settings.current);
      var currentTime = value;
      pomodoro.timeLeft = (pomodoro.endTime - currentTime)/1000;
      if(pomodoro.timeLeft < 0){
        pomodoro.timeLeft = 0;
        pomodoro.confirmationNeeded = true;
        pomodoro.isRunning = false;
      }
      pomodoroService.updatePomodoro(pomodoro)
      .then(savedPomodoro=>{
        dispatch(savedPomodoroSuccess(savedPomodoro));
      })
      .catch(error=>{throw error});
  }
}

export function loadPomodorosSuccess(pomodoros){
  return {type:types.LOAD_POMODOROS_SUCCESS, pomodoros};
}

export function bigDelete(settings){
  return function(dispatch){
    settings.forEach(function(pomodoro) {
      console.log(pomodoro);
      pomodoroService.deletePomodoro(pomodoro);
    }, this);
    dispatch(bigDeleteSuccess([]));
  };
}

export function bigDeleteSuccess(pomodoros){
  return {type:types.BIG_DELETE_SUCCESS, pomodoros};
}

export function loadPomodoros(){
  return function(dispatch){
    return pomodoroService.getAllPomodoros().then(pomodoros=>{
      dispatch(loadPomodorosSuccess(pomodoros));
    }).catch(error=>{
      throw(error);
    });
  };
}

export function updateDebugMode(enabled){
  return{type:types.UPDATE_DEBUG_MODE, enabled}
}