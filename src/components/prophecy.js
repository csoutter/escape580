import React, { useLayoutEffect, useEffect, useCallback, useState } from 'react';
import Sound from 'react-sound';
import '../levels.css';
import prophecyinstructions from '../audio/prophecy/prophecyinstructions.m4a';
import theprophecy from '../audio/prophecy/prophecy.m4a';
import thunder from "../audio/prophecy/thunder.wav";
import foreboding from "../audio/prophecy/foreboding.wav";
import transition from '../audio/transition.mov';
// "Something Evil Approaches, A.wav" by InspectorJ (www.jshaw.co.uk) of Freesound.org

import hermione_g from '../audio/prophecy/hermione.m4a';
import hermione_reply from '../audio/prophecy/hermione_reply.m4a';

import p_pettigrew from '../audio/prophecy/pettigrew.m4a';
import pettigrew_reply from '../audio/prophecy/pettigrew_reply.m4a';

import neville_l from '../audio/prophecy/neville.m4a';
import neville_reply from '../audio/prophecy/neville_reply.m4a';

import s_snape from '../audio/prophecy/snape.m4a';
import snape_reply from '../audio/prophecy/snape_reply.m4a';

import help_message from '../audio/help.m4a';


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

export function Prophecy(props) {

  const handleViewChange = props.handleViewChange === undefined ? null : props.handleViewChange;
  const finishedinstructions = () => {
    setSound(<Sound
      url={theprophecy}
      playStatus={Sound.status.PLAYING}
      autoLoad={true}
      loop={false}
      volume={100}
      onFinishedPlaying={finishedprophecy}
      playbackRate='.8'
    />);

  }

  const finishedprophecy = () => {
    setSound(<RenderReply reply={foreboding} />);
  }

  const intro = <React.Fragment>
    <Sound
      url={prophecyinstructions}
      playStatus={Sound.status.PLAYING}
      onFinishedPlaying={finishedinstructions}
      autoLoad={true}
      loop={false}
      volume={100} />
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
  </React.Fragment>;

  const finishTransition = () => {
    setSound(intro);
  };
  const repeatIntro = () => {
    Sound.playStatus = Sound.status.STOPPED;
    setSound(
      <Sound
        url={prophecyinstructions}
        playStatus={Sound.status.STOPPED}
        autoLoad={true}
        loop={false}
      />
    );

    setSound(
      <Sound
        url={foreboding}
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
  const help = <React.Fragment>
    <Sound
      url={help_message}
      playStatus={Sound.status.PLAYING}
      onFinishedPlaying={repeatIntro}
      autoLoad={true}
      loop={false}
      volume={100}
    />
  </React.Fragment>;
  const hermione = <React.Fragment>
    <Sound
      url={hermione_g}
      playStatus={Sound.status.PLAYING}
      autoLoad={true}
      loop={false}
      volume={100} />
  </React.Fragment>;

  const pettigrew = <React.Fragment>
    <Sound
      url={p_pettigrew}
      playStatus={Sound.status.PLAYING}
      autoLoad={true}
      loop={false}
      volume={100}
      />
  </React.Fragment>;

  const neville = <React.Fragment>
    <Sound
      url={neville_l}
      playStatus={Sound.status.PLAYING}
      autoLoad={true}
      loop={false}
      volume={100}
       />

  </React.Fragment>;

  const snape = <React.Fragment>
    <Sound
      url={s_snape}
      playStatus={Sound.status.PLAYING}
      autoLoad={true}
      loop={false}
      volume={100} />
  </React.Fragment>;

  const handleHermione = () => {
    // Hermione hates Divination, and the prophecy refers to a "he." Try again!
    setSound(<RenderReply reply={hermione_reply} />);
  }
  const handlePettigrew = () => {
    // Peter has been the subject of a different prophecy, but not this one. Try again!
    setSound(<RenderReply reply={pettigrew_reply} />);
  }

  const handleNeville = () => {
    // Neville was born at the end of July, and his parents defied Lord Voldemort as members of the Order of the Phoenix. The prophecy could have been about him. Good job!
    setSound(<Sound
      url={neville_reply}
      playStatus={Sound.status.PLAYING}
      autoLoad={true}
      loop={false}
      volume={100}
      onFinishedPlaying={finishedLevel}

    />);
  }

  const handleSnape = () => {
    // This prophecy isn't about Snape, but he did overhear a part of it in the Hogs Head. Try again!
    setSound(<Sound
      url={snape_reply}
      playStatus={Sound.status.PLAYING}
      autoLoad={true}
      loop={false}
      volume={100}
    />);
  }


  const finishedLevel = () => {
    handleViewChange('ending');
  }

  const [sound, setSound] = useState(transit);
  const [correct, setCorrect] = useState(false);

  const handleHelp = () => {
    Sound.playStatus = Sound.status.STOPPED;
    setSound(help);
  }

  const handleSpace = () => {
    let id = console.log(document.activeElement.id);
    switch (id) {
      case "hermione":
        handleHermione();
        break;
      case "pettigrew":
        handlePettigrew();
        break;
      case "neville":
        handleNeville();
        break;
      case "snape":
        handleSnape();
        break;
    }
  }

  const handleSelect = (name) => {
    console.log(name);
    switch (name) {
      case -1:
        setSound(hermione);
        break;
      case 4:
        handleSelect(-1);
        break;
      case 1:
        setSound(pettigrew);
        break;
      case 2:
        setSound(neville);
        break;
      case 3:
        setSound(snape);
        break;
    }
  }

  const handleKey = useCallback((e) => {
    var event = window.event ? window.event : e;
    console.log(event);
    switch (e.key) {
      case "Tab":
        handleSelect(document.activeElement.tabIndex)
        break;
      case " ":
        handleSpace();
        break;
      case "r":
        repeatIntro();
        break;
      case "h":
        handleHelp();
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
    <div id="prophecy-image">
      <div id="d-landing">
        <h id="h-entrance" >
          Welcome to Level Five 
                      </h>
        <p id="p-landing">
          You are now at the final challenge of this Hogwarts Quest. After answering the sphinx's riddle, you have been transported to the Hall of Prophecies.
          The walls are crashing down and the prophecy orbs are rolling off their shelves!
          One of the orbs near you shatters and you can hear a thrilling prophecy.
          It seems to be about Harry Potter, but who else could it be about? You must answer correctly to go back to the maze and win the Triwizard Tournament!
          This is the prophecy you hear:
          <br></br>
          <em>The one with the power to vanquish the Dark Lord approaches... born to those who have thrice defied him,
          born as the seventh month dies... and the Dark Lord will mark him as his equal, but he will have power the Dark Lord knows not...
          and either must die at the hand of the other for neither can live while the other survives...
          the one with the power to vanquish the Dark Lord will be born as the seventh month dies...</em>
                      </p>
        <div id="d-options">
          <button id="hermione" tabIndex="1" onClick={handleHermione}> Hermione Granger </button>
          <button tabIndex="2" id="pettigrew" onClick={handlePettigrew}>Peter Pettigrew</button>
          <button tabIndex="3" id="neville" onClick={handleNeville}>Neville Longbottom</button>
          <button tabIndex="4" id="snape" onClick={handleSnape}>Severus Snape</button>
        </div>
        {sound}
      </div>
    </div>
  );
}