import React, {useRef, useEffect, useState} from 'react';
import soundBank from './soundBank'
import '../assets/styles/app.scss'
import Pad from './Pad.jsx'


function App(){
    const [volume,setVolume] = useState(1)
    const [padPlayed,setPadPlayed] = useState("")
      return (
      <div id="drum-machine">
          <div id="pad-bank">
            {soundBank.map(instrument => 
              <Pad instrument={instrument} key={instrument.id} volume={volume} setPadPlayed={setPadPlayed}/>)}
          </div>
          <div id="display">
            <h3>Volume</h3>
            <input type="range" step="0.01"  value={volume} max="1" min="0" className="volumeBar" onChange={(e)=> setVolume(e.target.value)}/>
            <div><h3>{padPlayed}</h3></div>
          </div>
      </div>
      );
}



export default App;
