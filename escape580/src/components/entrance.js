import React, {useLayoutEffect, useEffect, useState, useCallback} from 'react';
import Sound from 'react-sound';
import '../entrance.css';
import magicSound from '../audio/zapsplat_fantasy_reversed_backwards_magical_glissando_001_46178.mp3';

export function Entrance(props) {

   const handleViewChange = props.handleViewChange === undefined ? null : props.handleViewChange;

    const handleKey = useCallback((e) => {
         var event = window.event ? window.event : e;
            console.log(event);
         if(e.key === "ArrowRight") {
                 console.log("right arrow key pressed");
                  handleViewChange("level-one");
                 }
          switch(e.key) {
                    case "ArrowRight":
                    console.log("right arrow key pressed");
                    handleViewChange("level-one");
                    break;
                    case "ArrowLeft":
                    handleViewChange('landing');
                    }
    }, [props]);

   useLayoutEffect(() => {
       document.addEventListener("keydown", handleKey);
             return function cleanup() {
             document.removeEventListener("keydown", handleKey);
           };
     });

    const handleExitClick = () => {
        props.exit();
    };

    const handleNextClick = () => {
        props.handleViewChange('level-one');
    };

   return (
   <div id="d-landing">
            <h id="h-entrance" >
                  Welcome to the Maze
            </h>
            <p id="p-landing">
              (Spoken) You have just entered the maze.
            </p>
            <div id="d-button-holder">
            <button id="b-landing" onClick={handleNextClick} >
                        Next
                        </button>
                        <button id="b-landing" onClick={handleExitClick}>
                         Exit Maze
                        </button>
            </div>
                       <Sound
                           url={magicSound}
                           playStatus={Sound.status.PLAYING}
                           autoLoad={true}
                           loop={false}
                       />
          </div>
   );
}
