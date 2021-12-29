import React, { useState }  from 'react';
import '../../Tab.css';
import PreAssesment from './PreAssesment';
import PastDetails from './PastDetails';
import Assesment from './Assesment';
import Checkins from './Checkins';
import InnerTabs from './InnerTabs';
import CallTab from './CallTab';
//import { Auth } from 'aws-amplify';

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container1">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Dashboard
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          PreAssesment
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Callscript
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Assesment
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          Check-ins
        </button>
        <button
          className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(6)}
        >
          History
        </button>

      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "content  active-content" : "content"}>
          <InnerTabs/>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
         <PreAssesment></PreAssesment>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <CallTab></CallTab>
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <Assesment></Assesment>
        </div>
        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
          <Checkins></Checkins>
        </div>
        <div
          className={toggleState === 6 ? "content  active-content" : "content"}
        >
          <PastDetails></PastDetails>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
