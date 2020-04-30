import React, { useLayoutEffect, useEffect, useCallback, useState } from 'react';
import Sound from 'react-sound';
import '../levels.css';
import sphinxInstructions from '../audio/sphinx/level4.mov';
import level4announce from '../audio/sphinx/level4announce.mp3'
import hiss from "../audio/sphinx/hiss.mp3";
import snake from "../audio/sphinx/snakepit.wav";
import spacebar from "../audio/sphinx/spacebar.m4a";
import transition from '../audio/transition.mov';

function RenderReply(props) {
  return (
    <React.Fragment>
      <Sound
        url={props.reply}
        playStatus={Sound.status.PLAYING}
        autoLoad={true}
        loop={false}
        volume={100}
      />
    </React.Fragment>
  );
}

export function Sphinx(props) {

  const handleViewChange = props.handleViewChange === undefined ? null : props.handleViewChange;
  const finishedinstructions = () => {
    setSound(<React.Fragment><Sound
      url={spacebar}
      playStatus={Sound.status.PLAYING}
      // onFinishedPlaying={finishedspace}
      autoLoad={true}
      loop={false}
      volume={100}
      playbackRate='.8' />
      <Sound
        url={snake}
        playStatus={Sound.status.PLAYING}
        autoLoad={true}
        loop={true}
        volume={100}
        playbackRate='.8'
      /></React.Fragment>);

  }

  // const finishedspace = () => {
  //     setSound(<Sound
  //       url={snake}
  //       playStatus={Sound.status.PLAYING}
  //       autoLoad={true}
  //       loop={true}
  //       volume={100}
  //       playbackRate='.8'
  //     />);
  //     }

  const intro = <React.Fragment>
    <Sound
      url={sphinxInstructions}
      playStatus={Sound.status.PLAYING}
      onFinishedPlaying={finishedinstructions}
      autoLoad={true}
      loop={false}
      playbackRate=".7"
      volume={100} />
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
      volume="80"
    />
  </React.Fragment>;

  const finishTransition = () => {
    setSound(intro);
  };

  const repeatIntro = () => {
    Sound.playStatus = Sound.status.STOPPED;
    setSound(
       <Sound
          url={sphinxInstructions}
          playStatus={Sound.status.STOPPED}
          autoLoad={true}
          loop={false}
       />
    );

    setSound(
       <Sound
          url={snake}
          playStatus={Sound.status.STOPPED}
          autoLoad={true}
          loop={false}
       />
    );

    setSound(intro);
 }

  const transit = <React.Fragment>
    <Sound
      url={transition}
      playStatus={Sound.status.PLAYING}
      onFinishedPlaying={finishTransition}
      autoLoad={true}
      loop={false}
      volume={50}
    />
  </React.Fragment>;

  const [sound, setSound] = useState(transit);

  const handleSpace = () => {
    handleViewChange('riddle');
  }

  const handleKey = useCallback((e) => {
    var event = window.event ? window.event : e;
    console.log(event);
    if (event.key === 'Enter') {
      repeatIntro();
    }
    switch (e.key) {
      case " ":
        handleSpace();
        break;
      case "Escape":
        props.exit();
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
           Press the spacebar to hear the riddle
                    </p>
        <div id="d-button-holder">
        </div>
        {sound}

      </div>
    </div>
  );
}