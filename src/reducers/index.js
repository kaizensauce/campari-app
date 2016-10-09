// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import pomodoro from './pomodoroReducer';
 import {routerReducer} from 'react-router-redux';
 
const rootReducer = combineReducers({
      pomodoro,
      routing: routerReducer
 });

  
 export default rootReducer;    