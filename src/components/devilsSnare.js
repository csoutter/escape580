import React, { useLayoutEffect, useEffect, useCallback, useState } from 'react';
import Sound from 'react-sound';
import '../levels.css';
import transition from '../audio/transition.mov';
import devils_snare from '../audio/devils_snare2.m4a';
import rain_spell from '../audio/devilsSnare/rain_spoke.m4a';
import rain_sound from '../audio/devilsSnare/rain_soud.mov';
import explosion from '../audio/devilsSnare/explosion.mov';
import explosion_spell from '../audio/devilsSnare/explosion_spoke.m4a';
import sunlight_spell from '../audio/devilsSnare/sunlight_spoke.m4a';
import scream_spell from '../audio/devilsSnare/sceam_spoke.m4a';
import scream_sound from '../audio/devilsSnare/scream.mov';
import explosion_reply from '../audio/devilsSnare/explosion_reply_2.m4a';
import rain_reply from '../audio/devilsSnare/rain_spell_2.m4a';
import sunlight_reply from '../audio/devilsSnare/sunlight_reply_2.m4a';
import scream_reply from '../audio/devilsSnare/scream_reply_2.m4a';

function RenderReply(props) {
   return (<React.Fragment>
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

export function DevilsSnare(props) {

   const handleViewChange = props.handleViewChange === undefined ? null : props.handleViewChange;

   const snare_music = "https://ia601000.us.archive.org/9/items/cd_harry-potter-and-the-sorcerers-stone-origi_john-williams/disc1/15.%20John%20Williams%20-%20In%20the%20Devil%27s%20Snare%20-%20The%20Flying%20Keys_sample.mp3";

   const intro = <React.Fragment>
      <Sound
         url={devils_snare}
         playStatus={Sound.status.PLAYING}
         autoLoad={true}
         loop={false}
         volume={50}
      />
      <Sound
         url={snare_music}
         playStatus={Sound.status.PLAYING}
         autoLoad={true}
         loop={true}
         volume={75}
      />
   </React.Fragment>;

   const finishTransition = () => {
      setSound(intro);
   }

   const repeatIntro = () => {
      Sound.playStatus = Sound.status.STOPPED;
      setSound(
         <Sound
            url={devils_snare}
            playStatus={Sound.status.STOPPED}
            autoLoad={true}
            loop={false}
         />
      );

      setSound(
         <Sound
            url={snare_music}
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

   const rain = <React.Fragment>
      <Sound
         url={rain_spell}
         playStatus={Sound.status.PLAYING}
         autoLoad={true}
         loop={false}
         volume={75} />
      <Sound
         url={rain_sound}
         playStatus={Sound.status.PLAYING}
         autoLoad={true}
         loop={false}
         volume={75} />
   </React.Fragment>;

   const explosion_comp = <React.Fragment>
      <Sound
         url={explosion_spell}
         playStatus={Sound.status.PLAYING}
         autoLoad={true}
         loop={false}
         volume={100} />
      <Sound
         url={explosion}
         playStatus={Sound.status.PLAYING}
         autoLoad={true}
         loop={false}
         volume={25} />
   </React.Fragment>;

   const sunlight = <React.Fragment>
      <Sound
         url={sunlight_spell}
         playStatus={Sound.status.PLAYING}
         autoLoad={true}
         loop={false}
         volume={100} />
   </React.Fragment>;

   const scream = <React.Fragment>
      <Sound
         url={scream_spell}
         playStatus={Sound.status.PLAYING}
         autoLoad={true}
         loop={false}
         volume={100} />
      <Sound
         url={scream_sound}
         playStatus={Sound.status.PLAYING}
         autoLoad={true}
         loop={false}
         volume={25} />
   </React.Fragment>;

   const handleRain = () => {
      console.log(document.activeElement.id);
      setSound(<RenderReply reply={rain_reply} />);
   }

   const handleExplosion = () => {
      setSound(<RenderReply reply={explosion_reply} />);
   }

   const finishedLevel = () => {
      handleViewChange('level-two');
   }

   const handleSunlight = () => {
      setSound(<Sound
         url={sunlight_reply}
         playStatus={Sound.status.PLAYING}
         autoLoad={true}
         loop={false}
         volume={100}
         onFinishedPlaying={finishedLevel}
      />);
   }

   const handleScream = () => {
      setSound(<RenderReply reply={scream_reply} />);
   }

   const handleSpace = () => {
      let id = console.log(document.activeElement.id);
      switch (id) {
         case "rain":
            handleRain();
            break;
         case "sunlight":
            handleSunlight();
            break;
         case "explosion":
            handleExplosion();
            break;
         case "scream":
            handleScream();
            break;
      }
   }

   const handleSelect = (name) => {
      console.log(name);
      switch (name) {
         case -1:
            setSound(rain);
            break;
         case 4:
            handleSelect(-1);
            break;
         case 1:
            setSound(explosion_comp);
            break;
         case 2:
            setSound(sunlight);
            break;
         case 3:
            setSound(scream);
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
      <div id="devils_snare-image">
         <div id="d-landing">
            <h id="h-entrance" >
               Welcome to Level One
                      </h>
            <p id="p-landing">
               Oh no! You have slipped and fallen into a Devil’s Snare pit trap.
               Devil’s snare plant consists of thick, snake-like vines that twist
               around it’s victims unless they remember to relax and stop moving.
               The Devil’s Snare plant likes a dark, damp environment. You have
               already moved too much and the Devil’s snare plant has a strong grip
               around you, you must use a spell to escape!
                      </p>
            <div id="d-options">
               <button id="rain" tabIndex="1" onKeyPress={handleRain}> Rain Spell </button>
               <button tabIndex="2" id="explosion" onKeyPress={handleExplosion}>Explosion Spell</button>
               <button tabIndex="3" id="sunlight" onKeyPress={handleSunlight}>Sunlight Spell</button>
               <button tabIndex="4" id="scream" onKeyPress={handleScream}>Scream Spell</button>
            </div>
            {sound}
         </div>
      </div>
   );
}