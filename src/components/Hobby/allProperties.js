import React, { useEffect, useState } from 'react';
// import './hobbies.css';
import hobbiesData from './hobbies.json';

const AllPoetries = () => {
  const [poetries, setPoetries] = useState([]);

  useEffect(() => {
    setPoetries(hobbiesData.poetries);
  }, []);

  return (
    <div className="hobbies-container">
      <div className="hobbies-title">All Poetry</div>
      <div className="poetries-list">
        {poetries.map((poetry, index) => (
          <div key={index} className="poetry-card">
            <div className="poetry-index">Poetry #{index + 1}</div>
            <p className="poetry-text">{poetry}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPoetries;
