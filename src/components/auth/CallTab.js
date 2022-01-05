import React, { useState }  from 'react';
import '../../Tab.css';
import CallScriptDepre1 from './CallScriptDepre1';
import CallScriptDepre2 from './CallScriptDepre2';
import CallScriptDepre3 from './CallScriptDepre3';
import CallScriptDepre4 from './CallScriptDepre4';
import CallScriptDepre5 from './CallScriptDepre5';
import CallScriptDepre6 from './CallScriptDepre6';

//import { Auth } from 'aws-amplify';

function CallTab() {
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
          DepressionCall1  
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          DepressionCall2
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          DepressionCall3
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          DepressionCall4
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          DepressionCall5
        </button>
        <button
          className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(6)}
        >
          DepressionCall6
        </button>
        

      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "content  active-content" : "content"}>
        <CallScriptDepre1/>
        </div>
        <div className={toggleState === 2 ? "content  active-content" : "content"}>
        <CallScriptDepre2/>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
        <CallScriptDepre3/>
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
         <CallScriptDepre4/>
        </div>
        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
        <CallScriptDepre5/>
        </div>
        <div
          className={toggleState === 6 ? "content  active-content" : "content"}
        >
         <CallScriptDepre6/>
        </div>
        
      </div>
    </div>
  );
}

export default CallTab;
