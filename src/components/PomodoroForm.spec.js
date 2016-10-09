import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import PomodoroForm from './PomodoroForm';

describe('PomodoroForm />', () => {
  it('should contain <button />', () => {
    const pomodoro =  {debug:false};
    const actions = {
      resetCountdown: () => {},
      startCountdown: () => {},
      recalculateCountdown: () => {},
      updateField: () => {}
  };
    const wrapper = shallow(<PomodoroForm current={pomodoro} resetCountdown={actions.resetCountdown} startCountdown={actions.startCountdown} recalculateCountdown={actions.recalculateCountdown} updateField={actions.updateField}/>);
    expect(wrapper.find('button')).to.be.length(1); 
  });
});
