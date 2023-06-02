import React, { useRef } from 'react';
import './WheelGamesPage.css'; //Import the CSS file for the component

const WheelGamesPage = () => {
  const clubArray = ["Driver", "3Wood", "5Wood", "Hybrid", "3-Iron", "4-Iron", "5-Iron", "6-Iron", "7-Iron", "8-Iron", "9-Iron", "Putter"];
  const specialArray = ["1) Miss the Green in regulation loose your driver", "2) Group picks your clubs for the hole", "3) Loose the hole, owe everyone a round", "4) If drink cart comes by you by the round", "5) Cannot use your putter", "6) Must swing once opposite handed", "7) Hit from the farthest tee", "8) Hit the green in regulation everyone owes you a drink", "9) Only use fairway woods entire hole", "10) Only use one iron entire hole", "11) Choose your partners club once"];
  const selectedArray = useRef<string[] | string[]>([]); // Update the type to allow string[] or string

  const circleRef = useRef<HTMLDivElement | null>(null);

  const randomRotation = () => {
    const duration = 5;
    const randomNumber = (Math.random() * 5 * 360) + 720;

    if (circleRef.current) {
      circleRef.current.style.animationIterationCount = "1";
      circleRef.current.style.animationName = "rotate";
      circleRef.current.style.animationDuration = `${duration}s`;
      circleRef.current.style.animationFillMode = "forwards";
      circleRef.current.style.animationTimingFunction = "ease-out";
      circleRef.current.style.setProperty('--random-rotation', `${randomNumber}deg`);
    }
  };

  const resetAnimation = () => {
    if (circleRef.current) {
      circleRef.current.style.animationIterationCount = null;
      circleRef.current.style.animationName = null;
      circleRef.current.style.animationDuration = null;
      circleRef.current.style.animationFillMode = null;
      circleRef.current.style.animationTimingFunction = null;
    }
  };

  const handleClick = (array: string[]) => {
    console.log(array);
    const circleItems = [...(circleRef.current?.children || [])];
    const angle = 360 / array.length;
  
    circleItems.forEach((item: Element, index: number) => {
      if (item instanceof HTMLElement) {
        const rotateValue = angle * index;
        item.style.transform = `rotate(${rotateValue}deg)`;
        item.textContent = array[index]; // Set the text content of the circle item
      }
    });
  
    selectedArray.current = array;
    randomRotation();
    setTimeout(() => {
      resetAnimation();
    }, 8000);
  };
  
  

  const specialList = specialArray.map((special, index) => (
    <div key={index}>
      <p dangerouslySetInnerHTML={{ __html: special }}></p>
      <hr />
    </div>
  ));

  return (
    <div className="wheel-games-container">
      <div className="club_button">
        <button onClick={() => handleClick(clubArray)}>Pick a Club</button>
      </div>
      <div className="special_button">
        <button onClick={() => handleClick(["|🏌1 | ","|🏌2 |","|🏌3 | ","|🏌4|","|🏌5 |","|🏌6 |","|🏌7 |","|🏌8 |","|🏌9 |","|🏌10|","|🏌11 |","|🏌12|"])}>Pick Challenge</button>
      </div>
      <h1>⏏</h1>
      <div className="spinning_wheel" ref={circleRef}>
      {selectedArray.current && selectedArray.current.length > 0 ? (
  selectedArray.current.map((item, index) => (
    <div className="circle-item" key={index}>
      {item}
    </div>
  ))
) : (
  <div className="circle-item">Golf Gambler</div>
)}

      </div>
      <div className="selection_challenge_list">
        <h3>Challenges</h3>
        {specialList}
      </div>
    </div>
  );
};

export default WheelGamesPage;
