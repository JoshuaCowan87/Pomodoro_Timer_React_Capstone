import React from "react";

const Pause = ({isTimerRunning, focusRun, focusTime, breakRun, breakTime, isStopped}) => {
  if (isStopped) return null
  else {
 if (!isTimerRunning) {
   return (
     <div className="row mb-2 d-block" id="paused">
        <div className="col">
          <h3>PAUSED</h3>
        </div>
      </div>
   )
 }
  else return null
}
}



export default Pause