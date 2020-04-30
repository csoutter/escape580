import React, { useLayoutEffect, useState, useCallback } from 'react';
import Sound from 'react-sound';
import boggartInstructions from '../audio/boggart/level3.m4a';
import rattling from "../audio/boggart/rattling.mp3";
import torture_reply from "../audio/boggart/torture_reply.m4a";
import dancing_reply from "../audio/boggart/dancing_reply.m4a";
import funny_reply from "../audio/boggart/funny_reply.m4a";
import tickle_reply from "../audio/boggart/tickle_reply.m4a";
import torture from "../audio/boggart/torture.mp3";
import tickle from "../audio/boggart/tickle.m4a";
import dancing from "../audio/boggart/dancing.m4a";
import funny from "../audio/boggart/laugh.mp3";
import torture_spell from "../audio/boggart/torture_spell.m4a";
import tickle_spell from "../audio/boggart/tickle_spell.m4a";
import dancing_spell from "../audio/boggart/dancing_spell.m4a";
import funny_spell from "../audio/boggart/funny_spell.m4a";
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

export function Boggart(props) {

  const handleExitClick = () => {
    props.exit();
  }

  const intro = <React.Fragment>
    <Sound
      url={rattling}
      playStatus={Sound.status.PLAYING}
      autoLoad={true}
      loop={true}
      volume={75}
    />
    <Sound
      url={boggartInstructions}
      playStatus={Sound.status.PLAYING}
      autoLoad={true}
      loop={false}
      volume={75}
    />
  </React.Fragment>;

  const handleViewChange = props.handleViewChange === undefined ? null : props.handleViewChange;

  const finishTransition = () => {
    setSound(intro);
  }
  const repeatIntro = () => {
    Sound.playStatus = Sound.status.STOPPED;
    setSound(
      <Sound
        url={rattling}
        playStatus={Sound.status.STOPPED}
        autoLoad={true}
        loop={false}
      />
    );

    setSound(
      <Sound
        url={boggartInstructions}
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
  const [correct, setCorrect] = useState(false);

  const tickle_comp = <React.Fragment>
    <Sound
      url={tickle_spell}
      playStatus={Sound.status.PLAYING}
      autoLoad={true}
      loop={false}
      volume={75} />
    <Sound
      url={tickle}
      playStatus={Sound.status.PLAYING}
      autoLoad={true}
      loop={false}
      volume={50} />
  </React.Fragment>;

  const funny_comp = <React.Fragment>
    <Sound
      url={funny_spell}
      playStatus={Sound.status.PLAYING}
      autoLoad={true}
      loop={false}
      volume={100} />
    <Sound
      url={funny}
      playStatus={Sound.status.PLAYING}
      autoLoad={true}
      loop={false}
      volume={25} />
  </React.Fragment>;

  const dancing_comp = <React.Fragment>
    <Sound
      url={dancing_spell}
      playStatus={Sound.status.PLAYING}
      autoLoad={true}
      loop={false}
      volume={100} />
    <Sound
      url={dancing}
      playStatus={Sound.status.PLAYING}
      autoLoad={true}
      loop={false}
      volume={25} />
  </React.Fragment>;

  const torture_comp = <React.Fragment>
    <Sound
      url={torture_spell}
      playStatus={Sound.status.PLAYING}
      autoLoad={true}
      loop={false}
      volume={100} />
    <Sound
      url={torture}
      playStatus={Sound.status.PLAYING}
      autoLoad={true}
      loop={false}
      volume={25} />
  </React.Fragment>;

  const handleTickle = () => {
    console.log(document.activeElement.id);
    setSound(<RenderReply reply={tickle_reply} />);
  }

  const handleDancing = () => {
    setSound(<RenderReply reply={dancing_reply} />);
  }

  const finishedLevel = () => {
    handleViewChange('level-four');
  }

  const handleFunny = () => {
    setSound(<Sound
      url={funny_reply}
      playStatus={Sound.status.PLAYING}
      autoLoad={true}
      loop={false}
      volume={100}
      onFinishedPlaying={finishedLevel}
    />);
  }

  const handleTorture = () => {
    setSound(<RenderReply reply={torture_reply} />);
  }

  const handleSpace = () => {
    let id = console.log(document.activeElement.id);
    switch (id) {
      case "tickle":
        handleTickle();
        break;
      case "funny":
        handleFunny();
        break;
      case "dancing":
        handleDancing();
        break;
      case "torture":
        handleTorture();
        break;
    }
  }

  const handleSelect = (name) => {
    console.log(name);
    switch (name) {
      case -1:
        setSound(tickle_comp);
        break;
      case 4:
        handleSelect(-1);
        break;
      case 1:
        setSound(funny_comp);
        break;
      case 2:
        setSound(dancing_comp);
        break;
      case 3:
        setSound(torture_comp);
        break;
    }
  }

  const handleKey = useCallback((e) => {
    var event = window.event ? window.event : e;
    console.log(event);
    if (event.key === 'Enter') {
      repeatIntro();
    }
    switch (e.key) {
      case "Tab":
        handleSelect(document.activeElement.tabIndex)
        break;
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
    <div id="boggart-image">
      <div id="d-landing">
        <h id="h-entrance" >
          Welcome to level three!
                  </h>
        <p id="p-landing">
          Ah, you have encountered the boggart, a very mysterious creature! This creature knows all of your deepest, darkest fears and transforms into the thing that you are most afraid of.
          There is a special spell that you must use in order to defeat the boggart. Let’s see if you can figure out what spell to use…
                  </p>
        <div id="d-options">
          <button id="tickle" tabIndex="1" onKeyPress={handleTickle}> Tickle Spell </button>
          <button tabIndex="2" id="funny" onKeyPress={handleFunny}>Funny Spell</button>
          <button tabIndex="3" id="dancing" onKeyPress={handleDancing}>Dancing Spell</button>
          <button tabIndex="4" id="torture" onKeyPress={handleTorture}>Torture Spell</button>
        </div>
        {sound}
      </div>
    </div>
  );
}
