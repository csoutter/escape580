import React, {useLayoutEffect, useEffect, useCallback} from 'react';
import prophecyinstructions from '../audio/level4.mp3';
import thunder from "../audio/prophecy/thunder.wav";
import foreboding from "../audio/prophecy/foreboding.wav"
// "Something Evil Approaches, A.wav" by InspectorJ (www.jshaw.co.uk) of Freesound.org
import Sound from 'react-sound';

export function Prophecy(props) {

    const handleExitClick = () => {
        props.exit();
    }

    const handleViewChange = props.handleViewChange === undefined ? null : props.handleViewChange;

      const handleKey = useCallback((e) => {
           var event = window.event ? window.event : e;
              console.log(event);
           switch(e.key) {
           case "ArrowRight":
               handleViewChange('ending');
           console.log("right arrow key pressed");
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
      <div id="prophecy-image">

      <div id="d-landing">
                  <h id="h-entrance" >
                        Welcome to Level Five
                  </h>
                  <p id="p-landing">
                    WHO IS THE PROPHECY ABOUT??????
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
                           url={foreboding}
                           playStatus={Sound.status.PLAYING}
                           autoLoad={true}
                           loop={true}
                           volume="40"
                       />
                       <Sound
                           url={thunder}
                           playStatus={Sound.status.PLAYING}
                           autoLoad={true}
                           loop={false}
                           volume="80"
                       />
                       <Sound
                           url={prophecyinstructions}
                           playStatus={Sound.status.PLAYING}
                           autoLoad={true}
                           loop={false}
                           volume="100"
                           playbackRate=".7"
                       />
                </div>
                </div>
    );
}