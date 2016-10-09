import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {PomodoroPage} from './PomodoroPage';
import PomodoroForm from '../components/PomodoroForm';

describe('PomodoroPage />', () => {
  it('should contain <PomodoroForm />', () => {
    const actions = {
    };
    const pomodoro = {};
    const wrapper = shallow(<PomodoroPage actions={actions} pomodoro={pomodoro}/>);

    expect(wrapper.find(PomodoroForm)).to.be.length(1); 
  });
});
