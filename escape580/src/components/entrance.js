import React, {useLayoutEffect, useEffect, useState, useCallback} from 'react';
import Sound from 'react-sound';
import '../entrance.css';
import magicSound from '../audio/zapsplat_fantasy_reversed_backwards_magical_glissando_001_46178.mp3';
import entranceInstructions from '../audio/opening.m4a';
import maze_entrance from '../audio/maze_entrance.m4a'

export function Entrance(props) {

   const handleViewChange = props.handleViewChange === undefined ? null : props.handleViewChange;

   const maze_march = "https://ia600104.us.archive.org/23/items/cd_harry-potter-and-the-goblet-of-fire_patrick-doyle-jarvis-cocker-jason-buckle/disc1/16.%20Patrick%20Doyle%20-%20Hogwarts%27%20March_sample.mp3";

   const handleKey = useCallback((e) => {
         var event = window.event ? window.event : e;
            console.log(event);
          switch(e.key) {
                    case " ":
                    console.log("right arrow key pressed");
                    handleViewChange("level-one");
                    break;
                    case "ArrowLeft":
                    handleViewChange('instructions');
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
              So you think you are ready to tackle the maze...do you, wizard? Well, earlier this evening Professor Moody placed the Triwizard cup in the maze. Only he knows where to find it. Your task will be to enter the maze and face the dangers that lie there. 
              In order to win, you want to be the first to find the cup. But first, you must make it out...ALIVE! 
              To begin your quest, press the space bar.
            </p>
                       <Sound
                           url={maze_march}
                           playStatus={Sound.status.PLAYING}
                           autoLoad={true}
                           loop={true}
                           volume={25}
                       />
                       <Sound
                           url={maze_entrance}
                           playStatus={Sound.status.PLAYING}
                           autoLoad={true}
                           loop={false}
                           volume={50}
                       />
          </div>
        </div>
   );
}
