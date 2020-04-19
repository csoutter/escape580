import React, {useLayoutEffect, useEffect, useState, useCallback} from 'react';
import Sound from 'react-sound';
import '../entrance.css';
import magicSound from '../audio/zapsplat_fantasy_reversed_backwards_magical_glissando_001_46178.mp3';
import entranceInstructions from '../audio/opening2.m4a';

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
   <div id="entrance-image">   
        <div id="d-landing">
            <h id="h-entrance" >
                  Welcome to the Maze
            </h>
            <p id="p-landing">
              (Spoken) So you think you are ready to tackle the maze...do you, wizard? Well, earlier this evening Professor Moody placed the Triwizard cup in the maze. Only he knows where to find it. Your task will be to enter the maze and face the dangers that lie there. 
              In order to win, you want to be the first to find the cup. But first, you must make it out...ALIVE! 
              To begin your quest, click the right arrow button.
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
                           loop={true}
                           volume="5"
                       />
                       <Sound
                           url={entranceInstructions}
                           playStatus={Sound.status.PLAYING}
                           autoLoad={true}
                           loop={false}
                           volume="100"
                       />
          </div>
        </div>
   );
}
