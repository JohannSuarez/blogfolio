import React from 'react';
import './UnderConstruction.css';
import construction from '../images/under_construction.png'

function UnderConstruction() {
  return (
    <div className="UnderConstruction">
      <h1>Under Construction</h1>
      <p>This page is still being built. Please check back later!</p>
      <img src={construction} alt="Under Construction" />
    </div>
  );
}

export default UnderConstruction;
