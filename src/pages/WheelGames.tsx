import React, { useRef, useState } from 'react';
import './WheelGamesPage.css';

const WheelGamesPage = () => {
  const circleRef = useRef(null);
  const [selectedArray, setSelectedArray] = useState([]);

  const clubArray = [
    'Driver', '3Wood', '5Wood', 'Hybrid', '3-Iron', '4-Iron', '5-Iron', '6-Iron', '7-Iron', '8-Iron', '9-Iron', 'Putter'
  ];

  const specialArray = [
    '1) Miss the Green in regulation lose your driver',
    '2) Group picks your clubs for the hole',
    '3) Lose the hole, owe everyone a round',
    '4) If drink cart comes by you buy the round',
    '5) Cannot use your putter',
    '6) Must swing once opposite-handed',
    '7) Hit from the farthest tee',
    '8) Hit the green in regulation everyone owes you a drink',
    '9) Only use fairway woods the entire hole',
    '10) Only use one iron the entire hole',
    '11) Choose your partner\'s club once'
  ];

  const randomRotation = () => {
    let duration = 5;
    let randomNumber = (Math.random() * 5) * 360 + 720;

    circleRef.current.style.animationIterationCount = '1';
    circleRef.current.style.animationName = 'rotate';
    circleRef.current.style.animationDuration = `${duration}s`;
    circleRef.current.style.animationFillMode = 'forwards';
    circleRef.current.style.animationTimingFunction = 'ease-out';
    circleRef.current.style.setProperty('--random-rotation', `${randomNumber}deg`);
  };

  const resetAnimation = () => {
    circleRef.current.style.animationIterationCount = null;
    circleRef.current.style.animationName = null;
    circleRef.current.style.animationDuration = null;
    circleRef.current.style.animationFillMode = null;
    circleRef.current.style.animationTimingFunction = null;
  };

  const handleClick = (array) => {
    console.log(array);
    const circleItems = circleRef.current.children;
    const angle = 360 / array.length;

    Array.from(circleItems).forEach((item, index) => {
      const rotateValue = angle * index;
      item.style.transform = `rotate(${rotateValue}deg)`;
    });

    setSelectedArray(array);
    randomRotation();
    setTimeout(() => {
      resetAnimation();
    }, 8000);
  };

  const specialList = specialArray.map((special, index) => (
    <div className="special-item" key={index}>
      {special}
      <hr />
    </div>
  ));

  return (
    <div className="wheel-games-container">
      <div className="button-container">
        <div className="club-button">
          <button onClick={() => handleClick(clubArray)}>Pick a Club</button>
        </div>
        <div className="special-button">
          <button onClick={() => handleClick(specialArray)}>Pick Challenge</button>
        </div>
      </div>
      <h1>⏏</h1>
      <div className="spinning-wheel" ref={circleRef}>
        {selectedArray.length > 0 ? (
          selectedArray.map((item, index) => (
            <div className="circle-item" key={index}>
              {item}
            </div>
          ))
        ) : (
          <h3>Golf Gambler</h3>
        )}
      </div>
      <div className="selection-challenge-list">
        <h3>Challenges</h3>
        {specialList}
      </div>
    </div>
  );
};

export default WheelGamesPage;
