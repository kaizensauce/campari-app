import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const App = (props) => {
  return (
     <div>
       <Link to="/">Pomodoro</Link>
       {' | '}
       <Link to="/about">History</Link>
       <br/>
       {props.children}
     </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
