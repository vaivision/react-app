import React, { useState }  from 'react';
import '../../Tab.css';

import DepressionCall1 from './DepressionCall1';
import DepressionCall2 from './DepressionCall2';
import DepressionCall3 from './DepressionCall3';
import DepressionCall4 from './DepressionCall4';
import DepressionCall5 from './DepressionCall5';
import DepressionCall6 from './DepressionCall6';
import WeeklyCheckin from './WeeklyCheckin';
//import { Auth } from 'aws-amplify';

function InnerTabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          WeeklyCheckin
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          DepressionCall1
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          DepressionCall2
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          DepressionCall3
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          DepressionCall4
        </button>
        <button
          className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(6)}
        >
          DepressionCall5
        </button>
        <button
          className={toggleState === 7 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(7)}
        >
          DepressionCall6
        </button>

      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "content  active-content" : "content"}>
          <WeeklyCheckin/>
        </div>
        <div className={toggleState === 2 ? "content  active-content" : "content"}>
          <DepressionCall1/>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
        <DepressionCall2/>
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <DepressionCall3/>
        </div>
        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
         <DepressionCall4/>
        </div>
        <div
          className={toggleState === 6 ? "content  active-content" : "content"}
        >
          <DepressionCall5/>
        </div>
        <div
          className={toggleState === 7 ? "content  active-content" : "content"}
        >
          <DepressionCall6/>
        </div>
      </div>
    </div>
  );
}

export default InnerTabs;
