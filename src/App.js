import React, {useState} from 'react';
import './App.css';
import DisplayComponent from './Components/DisplayComponent';
import BtnComponent from './Components/BtnComponent';

function App() {

  const [time, setTime] = useState({s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  let updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }

    if (updatedS === 100) {
      updatedM++;
      updatedS = 0;
    }

    updatedS++;
    return setTime({s: updatedS, m: updatedM, h: updatedH});
  }


  const stop = () => {
    clearInterval(interv)
    setStatus(0);
  }

  
  const reset = () => {
    clearInterval(interv)
    setStatus(0);
    setTime({ms: 0, s: 0, m: 0, h: 0});
  }

  const start = () => {
    run();
    setStatus(1)
    setInterv(setInterval(run, 10))
  }

  const wait = () => {
    clearInterval(interv)
    setStatus(0);
  
  }

  return (
      <div className="main-section">
        <div className="clock-holder">
          <div className="stopwatch">
            <DisplayComponent time={time}/>
            <BtnComponent status={status} wait={wait} stop={stop} start={start} reset={reset}/>
          </div>
        </div>
      </div>
  );
}

export default App;
