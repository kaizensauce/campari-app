import React, {PropTypes} from 'react';
import dateHelper from '../utils/dateHelper';
import ToggleButton from 'react-toggle-button';

class PomodoroForm extends React.Component{
    
    constructor(props, context){
        super(props, context);
        this.resetCountdownClick = this.resetCountdownClick.bind(this);
        this.startCountdownClick = this.startCountdownClick.bind(this);
        this.completedYesClick = this.completedYesClick.bind(this);
        this.completedNoClick = this.completedNoClick.bind(this);
        this.taskSummaryChanged = this.taskSummaryChanged.bind(this);
        this.tick = this.tick.bind(this);    
        this.toggleDebug = this.toggleDebug.bind(this); 
        this.debug = false; 
    }

    resetCountdownClick(){
        this.props.resetCountdown(this.props.current);
    }

    startCountdownClick(){
        if(!this.timer){
            this.timer = setInterval(this.tick, 1000);
        }
        this.props.startCountdown(this.props.current, 'startTime', new Date());
    }

    completedYesClick(){
        this.props.completePomodoro(this.props.current);
    }

    completedNoClick(){

    }

    taskSummaryChanged(event){
        this.props.updateField('taskSummary', 'taskSummary', event.target.value);
    }

    tick(){
        if(this.props.current.isRunning){
            this.props.recalculateCountdown(this.props, 'currentTime', new Date());
        }
    }

    toggleDebug()
    {
        this.props.updateDebugMode(!this.props.debug);
    }



    render(){
        return(
            <div>
                <div className="debug-switch">
                    <ToggleButton value={this.props.debug} onToggle={this.toggleDebug}/>
                </div>
                {this.props.debug ? <div>{JSON.stringify(this.props)}</div> : null}
                <div className="task-input"><span>$</span><input type="text" value={this.props.taskSummary} onChange={this.taskSummaryChanged}></input>
                <button className={ this.props.current.isRunning ? "running" : "stopped" } type="submit" value="StartCountdown" onClick={this.startCountdownClick}/></div>
                <div className="countdown">{dateHelper.convertSecondsToMinutesAndSeconds(this.props.current.timeLeft)}</div>
                
                {this.props.current.confirmationNeeded ? 
                <div>
                    <span>Time's up. Please confirm you have completed a full pomodoro</span>
                    <button onClick={this.completedYesClick}>YES</button>
                    <button onClick={this.completedNoClick}>NO</button>
                </div> : null}
                {this.props.current.hasCompleted ? 
                <div>
                    <span>Congratulations!</span>
                </div> : null}
            </div>
        );
    }
}

PomodoroForm.propTypes = {
  current: PropTypes.object.isRequired,
  resetCountdown: PropTypes.func.isRequired,
  startCountdown: PropTypes.func.isRequired,
  recalculateCountdown: PropTypes.func.isRequired
};

export default PomodoroForm;