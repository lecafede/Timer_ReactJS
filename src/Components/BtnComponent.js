import React from 'react';

function BtnComponent(props) {
  return (
      <div>
        {props.status === 0 ?  
        <div>
          <button onClick={props.start} className="stopwatch-btn stopwatch-btn-gre">Start</button> 
          <button onDoubleClick={props.wait} className="stopwatch-btn stopwatch-btn-gre">Wait</button> 
          <button onClick={props.reset} className="stopwatch-btn stopwatch-btn-yel">Reset</button>
        </div> : null}
        {props.status === 1 ?  
          <div>
            <button onClick={props.stop} className="stopwatch-btn stopwatch-btn-red">Stop</button>
            <button onDoubleClick={props.wait} className="stopwatch-btn stopwatch-btn-gre">Wait</button> 
            <button onClick={props.reset} className="stopwatch-btn stopwatch-btn-yel">Reset</button>
          </div> : null
        }
      </div>

  );
}

export default BtnComponent;
