import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({ back, msg, root }) =>  {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>{ msg }</h2>
      <p>
        <Link to={ root }>{ back }</Link>
      </p>
    </div>
  );
}

export default NotFound;
