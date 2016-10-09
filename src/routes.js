import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import PomodoroPage from './containers/PomodoroPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PomodoroPage}/>
  </Route>
);
