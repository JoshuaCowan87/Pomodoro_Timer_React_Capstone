
import React, { useState } from "react";
import classNames from "../utils/class-names";


const ProgressBar = ({ariaValue, isStopped}) => {
  if (isStopped) return null 
  else {
  return (
      <div className="row mb-2">
    <div className="col">
  <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={ariaValue}
                style={{ width: `${ariaValue}%`}}
              />  
 
            </div>
          </div>
      </div>
   )

}
}

export default ProgressBar;