import React, {PropTypes} from 'react';
import PomodoroForm from '../components/PomodoroForm';
import PomodoroHistoryForm from '../components/PomodoroHistoryForm';
import * as actions from '../actions/pomodoroActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

export const PomodoroPage = (props) => {
  return (
    <div>
      <PomodoroForm current={props.pomodoro.current} debug={props.pomodoro.debug} updateDebugMode={props.actions.updateDebugMode} resetCountdown={props.actions.resetCountdown} startCountdown={props.actions.startCountdown} recalculateCountdown={props.actions.recalculateCountdown} updateField={props.actions.updateField} completePomodoro={props.actions.completePomodoro} />
      <PomodoroHistoryForm pomodoros={props.pomodoro.pomodoros} loadPomodoros={props.actions.loadPomodoros} bigDelete={props.actions.bigDelete}/>
    </div>
  );
};

PomodoroPage.propTypes = {
  actions: PropTypes.object.isRequired,
  pomodoro:PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    pomodoro: state.pomodoro,
    pomodoros:state.pomodoros
  };
}

function mapDispatchToProps(dispatch) { 
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PomodoroPage);
