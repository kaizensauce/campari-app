import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div>
      <h1>KSauce</h1>

        <span><Link to="pomodoro">Pomodoro</Link></span>

    </div>
  );
};

export default HomePage;
