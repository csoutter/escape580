import React, {useLayoutEffect, useEffect, useCallback} from 'react';
import Sound from 'react-sound';
import boggartInstructions from '../audio/level3.m4a';
import rattling from "../audio/rattling.mp3";

export function Boggart(props) {

    const handleExitClick = () => {
        props.exit();
    }

    const handleViewChange = props.handleViewChange === undefined ? null : props.handleViewChange;

      const handleKey = useCallback((e) => {
           var event = window.event ? window.event : e;
              console.log(event);
           switch(e.key) {
           case "ArrowRight":
              handleViewChange('level-four');
           console.log("right arrow key pressed");
           break;
           case "ArrowLeft":
           handleViewChange('level-two');
           }
      }, [props]);

     useLayoutEffect(() => {
         document.addEventListener("keydown", handleKey);
               return function cleanup() {
               document.removeEventListener("keydown", handleKey);
             };
       });


    return (
      <div id="boggart-image">
        <div id="d-landing">
                  <h id="h-entrance" >
                        You made it to level 3!
                  </h>
                  <p id="p-landing">
                  Ah, you have encountered the boggart, a very mysterious creature! This creature knows all of your deepest, darkest fears and transforms into the thing that you are most afraid of. 
                  There is a special spell that you must use in order to defeat the boggart. Let’s see if you can figure out what spell to use… 
                  </p>
                  <div id="d-button-holder">
            <button id="b-landing">
                        Next
                        </button>
                        <button id="b-landing" onClick={handleExitClick}>
                         Exit Maze
                        </button>
            </div>
                       <Sound
                           url={rattling}
                           playStatus={Sound.status.PLAYING}
                           autoLoad={true}
                           loop={true}
                           volume="40"
                       />
                       <Sound
                           url={boggartInstructions}
                           playStatus={Sound.status.PLAYING}
                           autoLoad={true}
                           loop={false}
                           volume="100"
                       />
          </div>
      </div>
    );
}