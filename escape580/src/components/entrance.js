import React, {useLayoutEffect, useEffect } from 'react';
import Sound from 'react-sound';
import '../entrance.css';
import magicSound from '../audio/zapsplat_fantasy_reversed_backwards_magical_glissando_001_46178.mp3';

export function Entrance(props) {

//    useLayoutEffect(() => {
//    document.body.style.backgroundImage = props.background;
//    });

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