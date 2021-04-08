import {minutesToDuration} from "../utils/duration/index";


const SessionTitle = ({onBreak, focusTime, breakTime, isStopped}) => {
  if (isStopped) return null
  else {
  if (!onBreak) {
    return `Focusing for ${minutesToDuration(focusTime)} minutes`
  }
  else {
    return `On Break for ${minutesToDuration(breakTime)} minutes`
  }
  }
}


export default SessionTitle