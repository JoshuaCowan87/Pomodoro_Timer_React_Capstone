import React from "react"

function Audio (){
  
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
 
    return (
      <div>
        <audio className="audio-element">
          <source src="https://bigsoundbank.com/UPLOAD/mp3/1482.mp3"></source>
        </audio>
      </div>
    )  
}


export default Audio