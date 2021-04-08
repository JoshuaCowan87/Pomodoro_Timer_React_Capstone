import {secondsToDuration} from "../utils/duration/index";

const ShowTimeRemaining = ({focusRun, breakRun, onBreak, isStopped}) => {
    if (isStopped) {
      return null
    }
  else {
     if (!onBreak) {
     return `${secondsToDuration(focusRun)} remaining`     
   }
    else {
       return `${secondsToDuration(breakRun)} remaining`
              }
  }  
}


export default ShowTimeRemaining;