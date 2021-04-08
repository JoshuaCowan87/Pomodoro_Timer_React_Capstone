import React, { useState } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import {minutesToDuration} from "../utils/duration/index";
import ShowTimeRemaining from "./ShowTimeRemaining";
import SessionTitle from "./SessionTitle";
import Pause from "./Pause";
import ProgressBar from "./ProgressBar";
import Audio from "./Audio"
import ModifyButtonsDuration from "./ModifyDurationButtons"


function Pomodoro() {
  
// State variables
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isStopped, setIsStopped] = useState(true);
  const [onBreak, setOnBreak] = useState(false);
  const [focusTime, setFocusTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [percentComplete, setPercentComplete] = useState(0);
  const [focusRun, setFocusRun] = useState(focusTime * 60);
  const [breakRun, setBreakRun] = useState(breakTime * 60);
  const [ariaValue, setAriaValue] = useState(0)
  

 
// Modify focus and break time
 function increaseFocus() {
  setFocusTime(focusTime + 5);
  setFocusRun((focusTime + 5)*60);}
const decreaseFocus = () => {
  setFocusTime(focusTime - 5);
  setFocusRun((focusTime - 5)*60)}
const increaseBreak = () => {
  setBreakTime(breakTime + 1)
  setBreakRun((breakTime + 1)*60)}
const decreaseBreak = () => {
  setBreakTime(breakTime - 1)
  setBreakRun((breakTime - 1)*60)}

// Stop Handler
const stopHandler = () => { 
  setIsTimerRunning(false)
  setOnBreak(false) 
  setFocusTime(25)
  setBreakTime(5)
  setFocusRun(focusTime * 60)
  setBreakRun(breakTime * 60)
  setIsStopped(true)
}

// Session Handler
const runSession = () => {
  if (focusRun > 0) {    
    setFocusRun((prevCount) => prevCount - 1);  
  }
  else { 
    setOnBreak(true);
      if (breakRun === breakTime*60) {
    {Audio}
    console.log("Switching to break time");
    setBreakRun((prevCount) => prevCount -1)
  }
    if (breakRun > 0) {
       setBreakRun((prevCount) => prevCount -1)
    }
  if (focusRun === 0 && breakRun === 0) {
       {Audio}
    console.log("Restarting Timer")
    setOnBreak(false);
    setFocusRun(focusTime * 60);
    setBreakRun(breakTime * 60);    
  }
    // progress bar values
  }
  if (!onBreak) {
   setAriaValue(100*(focusTime * 60 - focusRun)/(focusTime*60))
 } 
  else {setAriaValue(100*(breakTime * 60 - breakRun)/(breakTime*60))
       }
}
console.log(ariaValue)


  useInterval(() => {
      runSession();
    },
    isTimerRunning ? 1000 : null
  );

  function playPause() {
    setIsTimerRunning((prevState) => !prevState);
    setIsStopped(false)
  }

  return (
    <div className="pomodoro">
      <div>
        <ModifyDurationButtons 
        increaseFocus={increaseFocus}
        decreaseFocus={decreaseFocus}
        increaseBreak={increaseBreak}
        decreaseBreak={decreaseBreak}
        isTimerRunning={isTimerRunning}
        focusTime={focusTime}
        breakTime={breakTime} />
      </div>
      <div className="row">
        <div className="col">
          <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
{/* Play/Pause Button */}            
            <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={playPause}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !isTimerRunning,
                  "oi-media-pause": isTimerRunning,
                })}
              />
            </button>
{/* Stop Button     */}      
            <button
              type="button"
              className="btn btn-secondary"
              title="Stop the session"
              onClick={stopHandler}>
              <span className="oi oi-media-stop" />
            </button>
          </div>
        </div>
      </div>     
      <div>
        
        <div className="row mb-2">
          <div data-testid="session-title" className="col">           
 {/* Session Title       */}
              <SessionTitle
               onBreak={onBreak}
               focusTime={focusTime}
               breakTime={breakTime}
               isStopped={isStopped}/>
          </div>
{/* TimeRemaining  */}
          <div>
            <p className="lead" data-testid="session-sub-title">
             <ShowTimeRemaining 
               onBreak={onBreak}
               focusRun={focusRun}
               breakRun={breakRun} 
               isStopped={isStopped}/>     
            </p>
          </div>
        </div>
{/* Pause Sign */}        
        <div>
          <Pause 
            isTimerRunning={isTimerRunning}
            focusRun={focusRun}
            focusTime={focusTime}
            breakRun={breakRun}
            breakTime={breakTime}
            isStopped={isStopped}
            />
     
            
        </div>
        <div>
 {/* Progress Bar */}       
            <ProgressBar
              ariaValue={ariaValue}
              isStopped={isStopped}    
              />
     
      </div>
    </div>
   </div>
  );
}

export default Pomodoro;
