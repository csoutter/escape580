import React, {useLayoutEffect, useEffect, useCallback} from 'react';
import Sound from 'react-sound';
import exitInstructions from '../audio/ending.m4a';
import clapping from "../audio/cheering.mp3";

export function Ending(props) {

    const handleExitClick = () => {
        props.exit();
    }

    const handleViewChange = props.handleViewChange === undefined ? null : props.handleViewChange;

      const handleKey = useCallback((e) => {
           var event = window.event ? window.event : e;
              console.log(event);
           switch(e.key) {
           case "ArrowRight":
              handleViewChange('landing');
           console.log("right arrow key pressed");
           break;
           case "ArrowLeft":
           handleViewChange('enter');
           case "Escape":
           props.exit();
           break;
           }
      }, [props]);

     useLayoutEffect(() => {
         document.addEventListener("keydown", handleKey);
               return function cleanup() {
               document.removeEventListener("keydown", handleKey);
             };
       });


    return (
      <div id="exit-image">
        <div id="d-landing">
                  <h id="h-entrance" >
                        You exited the maze!!
                  </h>
                  <p id="p-landing">
                  Congratulations, wizard, you made it out alive! The Triwizard cup is yours! 
                  You may have passed this test but you will have many more to face, young wizard. 
                  Onward and upward!
                  </p>
                  <div id="d-button-holder">
                      <button id="b-landing" onClick={handleExitClick}>
                           Start Over
                        </button>
                  </div>
                </div>
                <Sound
                           url={exitInstructions}
                           playStatus={Sound.status.PLAYING}
                           autoLoad={true}
                           loop={false}
                           volume="100"
                       />
                <Sound
                           url={clapping}
                           playStatus={Sound.status.PLAYING}
                           autoLoad={true}
                           loop={false}
                           volume="5"
                       />
      </div>
    );
}