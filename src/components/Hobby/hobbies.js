import React, { useEffect, useState } from 'react';
import './hobbies.css';
import hobbiesData from './hobbies.json';

const Hobbies = () => {
  const [poetries, setPoetries] = useState([]);
  const [showAllPoetries, setShowAllPoetries] = useState(false);

  useEffect(() => {
    setPoetries(hobbiesData.poetries);
  }, []);

  const toggleShowAll = () => {
    setShowAllPoetries(!showAllPoetries);
  };

  return (
    <div className="hobbies-container">
      <div className="hobbies-title">Poetry Writing</div>
      {showAllPoetries && (
        <div className="poetries-list">
          {poetries.slice(0).map((poetry, index) => (
            <div key={index} className="poetry-card">
              <div className="poetry-index">#{index + 1}</div>
              <p className="poetry-text">{poetry}</p>
            </div>
          ))}
        </div>
      )}
      <button className="read-more" onClick={toggleShowAll}>
        {showAllPoetries ? "Show Less" : "Want to read poetry?"}
      </button>
    </div>
  );
};

export default Hobbies;
