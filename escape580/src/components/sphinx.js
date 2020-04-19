import React, {useLayoutEffect, useEffect, useCallback} from 'react';
import sphinxInstructions from '../audio/level4.mp3';
import level4announce from '../audio/level4announce.mp3'
import hiss from "../audio/hiss.mp3";
import snake from "../audio/snakepit.wav";
import Sound from 'react-sound';


export function Sphinx(props) {
    

    const handleExitClick = () => {
        props.exit();
    }
    

    const handleViewChange = props.handleViewChange === undefined ? null : props.handleViewChange;

      const handleKey = useCallback((e) => {
           var event = window.event ? window.event : e;
              console.log(event);
           switch(e.key) {
           case "ArrowRight":
              handleViewChange('riddle');
           console.log("riddle");
           break;
           case "ArrowLeft":
           handleViewChange('enter');
           }
      }, [props]);

     useLayoutEffect(() => {
         document.addEventListener("keydown", handleKey);
               return function cleanup() {
               document.removeEventListener("keydown", handleKey);
             };
       });


    return (
      <div id="sphinx-image">
      <div id="d-landing">
                  <h id="h-entrance" >
                        Welcome to Level Four
                  </h>
                  <p id="p-landing">
                  You are very near your goal. The quickest way is past me, a powerful sphinx.
                   I will not move, no, not unless you can answer my riddle. 
                   Answer on your first guess — I let you pass. Answer wrongly — I attack. 
                   Remain silent — I will let you walk away from me unscathed. 
                   Press the right arrow to hear the riddle
                  </p>
                  <div id="d-button-holder">
                  <button id="b-landing">
                        Next
                        </button>
                        <button id="b-landing" onClick={handleExitClick}>
                         Exit Maze
                        </button>
            </div>
                        {/* <Sound
                           url={level4announce}
                           playStatus={Sound.status.PLAYING}
                           autoLoad={true}
                           loop={false}
                           volume="100"
                       /> */}
                       <Sound
                           url={snake}
                           playStatus={Sound.status.PLAYING}
                           autoLoad={true}
                           loop={true}
                           volume="40"
                       />
                       <Sound
                           url={hiss}
                           playStatus={Sound.status.PLAYING}
                           autoLoad={true}
                           loop={false}
                           volume="10"
                       />
                       <Sound
                           url={sphinxInstructions}
                           playStatus={Sound.status.PLAYING}
                           autoLoad={true}
                           loop={false}
                           volume="100"
                           pitch="high"
                           playbackRate=".8"
                       />
          </div>
        </div>
    );
}