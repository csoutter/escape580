import React, { useLayoutEffect, useEffect, useCallback } from 'react';
import Sound from 'react-sound';
import exitInstructions from '../audio/ending.m4a';
import clapping from "../audio/cheering.mp3";
import fireworks from "../audio/fireworks.mp3";
import congrats from '../audio/congrats.m4a'
export function Ending(props) {

  const handleExitClick = () => {
    props.exit();
  }

  const handleViewChange = props.handleViewChange === undefined ? null : props.handleViewChange;

  const handleKey = useCallback((e) => {
    var event = window.event ? window.event : e;
    console.log(event);
    switch (e.key) {
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
          You are the Champion!!
                  </h>
        <p id="p-landing">
          Congratulations! You made it out of the maze alive.
          By completing this Hogwarts Quest, you are the Champion!
          In these challenges, you have proved yourself as a budding wizard.
          As a reward, you will have eternal fame and glory.
          You may have passed this test but you will have many more to face! Onward and upward!
        </p>
        <p>Press the escape key to restart the game</p>
      </div>
      <Sound
        url={congrats}
        playStatus={Sound.status.PLAYING}
        autoLoad={true}
        loop={false}
        volume="100"
      />
      <Sound
        url={fireworks}
        playStatus={Sound.status.PLAYING}
        autoLoad={true}
        loop={true}
        volume="30"
      />
      <Sound
        url={clapping}
        playStatus={Sound.status.PLAYING}
        autoLoad={true}
        loop={false}
        volume="25"
      />
    </div>
  );
}