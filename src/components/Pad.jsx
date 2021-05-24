import React, {useState, useRef, useEffect} from 'react';

function Pad ({instrument,volume, setPadPlayed}){
  let padRef =useRef()
  let audioRef = useRef()
  const [activePad,setActivePad] = useState(false)
  useEffect(()=>{
    document.addEventListener('keydown',handleKeyEvent)
    return ()=>{
      document.removeEventListener('keydown',handleKeyEvent)
    }
  },[])
  const handleKeyEvent = (e) =>{
    if(e.keyCode==instrument.keyCode) playSound()
  }

  const playSound = () =>{
    setActivePad(true)
     audioRef.current.currentTime = 0
     audioRef.current.play()
     audioRef.current.volume= volume
     padRef.current.style.background = 'orange'
     setTimeout(()=>padRef.current.style.background = 'grey',200)
     setPadPlayed(instrument.id)
   }
    return(
      <div className="drum-pad" onClick={playSound} ref={padRef} >
          <audio id={instrument.keyTrigger} src={instrument.url} ref={audioRef}/>
          {instrument.id} <br/>
          {instrument.keyTrigger}
      </div>

    )
}

export default Pad