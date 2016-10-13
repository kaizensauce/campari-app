import React, {PropTypes} from 'react';
import dateHelper from '../utils/dateHelper';

class PomodoroHistoryForm extends React.Component{
    
    constructor(props, context){
        super(props, context);
        this.loadPomodorosClick = this.loadPomodorosClick.bind(this);
        this.bigDeleteClick = this.bigDeleteClick.bind(this);
    }

    loadPomodorosClick(){
        this.props.loadPomodoros();
    }

    bigDeleteClick(){
        this.props.bigDelete(this.props.pomodoros);
    }

    render(){
        const pomodoros = this.props.pomodoros;
        return(
            <div className="history">
                <div>
                    {pomodoros.filter(p=> new Date(p.startTime).getDay() == new Date().getDay()).map(function(pomodoro, i){

                 return <div className={'completed-' + pomodoro.hasCompleted} key={i}>
                            <span>{dateHelper.getFormattedTime(pomodoro.startTime)} --> {dateHelper.getFormattedTime(pomodoro.endTime)}</span> 
                            <span>{pomodoro.taskSummary}  </span>
                            <span>({dateHelper.convertSecondsToMinutesAndSeconds(pomodoro.timeLeft)})</span>
                        </div>;
                 })}                
                 </div>
                 <input type="submit" className="refresh" value="Refresh History" onClick={this.loadPomodorosClick}/>
                <input className="delete-all" type="submit" value="DeleteAll" onClick={this.bigDeleteClick}/>
            </div>
        );
    }
}

PomodoroHistoryForm.propTypes = {
  pomodoros: PropTypes.array.isRequired,
  loadPomodoros : PropTypes.func.isRequired
};

export default PomodoroHistoryForm;