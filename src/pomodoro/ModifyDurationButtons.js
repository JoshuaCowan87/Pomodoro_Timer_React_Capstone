import {minutesToDuration} from "../utils/duration/index";

const ModifyDurationButtons = ({breakTime, focusTime, increaseFocus, decreaseFocus, increaseBreak, decreaseBreak, isTimerRunning}) => {

    return (
        
        <div className="row">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              Focus Duration: {minutesToDuration(focusTime)}
            </span>
            <div className="input-group-append">
{/*decrease Focus*/}             
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                onClick={decreaseFocus}
                disabled={isTimerRunning || focusTime === 5}
              >
                <span className="oi oi-minus" />
              </button>
{/*increase Focus*/}              
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
                onClick={increaseFocus}
                disabled={isTimerRunning || focusTime === 60}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                
                Break Duration: {minutesToDuration(breakTime)}
              </span>
              <div className="input-group-append">
{/*decrease break*/}               
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  onClick={decreaseBreak}
                  disabled={isTimerRunning || breakTime === 1}
                >
                  <span className="oi oi-minus" />
                </button>
{/*increase break*/}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  onClick={increaseBreak}
                   disabled={isTimerRunning || breakTime === 15}
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}


export default ModifyDurationButtons;