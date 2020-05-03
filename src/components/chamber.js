import React, { useLayoutEffect, useCallback, useState } from 'react';
import Sound from 'react-sound';
import '../levels.css';
import transition from '../audio/transition.mov';
import chamber_intro from '../audio/chamber/chamber_intro.m4a';
import sort_hat_1 from '../audio/chamber/sorting_hat_powers.m4a';
import sort_hat_2 from '../audio/chamber/gryffindor_powers.m4a';
import sword from '../audio/chamber/sorting_hat_sword.m4a';
import throw_hat from '../audio/chamber/throw_hat.m4a';
import hat_reply from '../audio/chamber/hat_reply.m4a';
import powers_reply from '../audio/chamber/powers_reply.m4a';
import sword_reply from '../audio/chamber/sword_reply.m4a';
import gryffindor_reply from '../audio/chamber/gryffindor_reply.m4a';
import snake_hiss from '../audio/chamber/snakehiss2.mp3';
import sword_draw from '../audio/chamber/swordraw.mp3';
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

export function Chamber(props) {

   const handleViewChange = props.handleViewChange === undefined ? null : props.handleViewChange;
   const chamberTheme = "https://ia800103.us.archive.org/33/items/cd_harry-potter-and-the-chamber-of-secrets-or_john-williams/disc1/03.%20John%20Williams%20-%20The%20Chamber%20Of%20Secrets_sample.mp3";


   const intro = <React.Fragment>
      <Sound
         url={chamber_intro}
         playStatus={Sound.status.PLAYING}
         autoLoad={true}
         loop={false}
         volume={75}
      />
      <Sound
         url={chamberTheme}
         playStatus={Sound.status.PLAYING}
         autoLoad={true}
         loop={true}
         volume={75}
      />
   </React.Fragment>;

   const finishTransition = () => {
      setSound(intro);
   }

   const resumeBackgroundMusic = () => {
     setSound(<Sound
                       url={chamberTheme}
                       playStatus={Sound.status.PLAYING}
                       autoLoad={true}
                       loop={true}
                       volume={75}
                    />);}

   const repeatIntro = () => {
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
         onFinishedPlaying={resumeBackgroundMusic}
         autoLoad={true}
         loop={false}
         volume={100}
      />
   </React.Fragment>;

   const [sound, setSound] = useState(transit);

   const sword_comp = <React.Fragment>
      <Sound
         url={sword}
         playStatus={Sound.status.PLAYING}
         autoLoad={true}
         loop={false}
         volume={75} />
   </React.Fragment>;

   const sort_hat_1_comp = <React.Fragment>
      <Sound
         url={sort_hat_1}
         playStatus={Sound.status.PLAYING}
         autoLoad={true}
         loop={false}
         volume={100} />

   </React.Fragment>;

   const sort_hat_2_comp = <React.Fragment>
      <Sound
         url={sort_hat_2}
         playStatus={Sound.status.PLAYING}
         autoLoad={true}
         loop={false}
         volume={100} />
   </React.Fragment>;

   const throw_hat_comp = <React.Fragment>
      <Sound
         url={throw_hat}
         playStatus={Sound.status.PLAYING}
         autoLoad={true}
         loop={false}
         volume={100} />

   </React.Fragment>;

   const finishedLevel = () => {
      handleViewChange('level-three');
   }

   const handleSword = () => {
      setSound(<React.Fragment>
         <Sound
            url={sword_draw}
            playStatus={Sound.status.PLAYING}
            autoLoad={true}
            loop={false}
            volume={75} />
         <Sound
            url={sword_reply}
            playStatus={Sound.status.PLAYING}
            autoLoad={true}
            loop={false}
            volume={100}
            onFinishedPlaying={finishedLevel}
         />
      </React.Fragment>
      );
   }

   const handleHat = () => {
      setSound(<RenderReply reply={powers_reply} />);
   }

   const handleBasilisk = () => {
      setSound(<React.Fragment>
         <Sound
            url={hat_reply}
            playStatus={Sound.status.PLAYING}
            autoLoad={true}
            loop={false}
            volume={100} />
         <Sound
            url={snake_hiss}
            playStatus={Sound.status.PLAYING}
            autoLoad={true}
            loop={false}
            volume={75} />
      </React.Fragment>);
   }

   const handleGryffindor = () => {
      setSound(<RenderReply reply={gryffindor_reply} />)
   }

   const handleHelp = () => {
      Sound.playStatus = Sound.status.STOPPED;
      setSound(help);
   }

   const handleSpace = () => {
      let id = console.log(document.activeElement.id);
      switch (id) {
         case "hat":
            handleHat();
            break;
         case "sword":
            handleSword();
            break;
         case "basilisk":
            handleBasilisk();
            break;
         case "gryffindor":
            handleGryffindor();
            break;
      }
   }

   const handleSelect = (index) => {
      switch (index) {
         case -1:
            setSound(sort_hat_1_comp);
            break;
         case 4:
            handleSelect(-1);
            break;
         case 1:
            setSound(sword_comp);
            break;
         case 2:
            setSound(throw_hat_comp);
            break;
         case 3:
            setSound(sort_hat_2_comp);
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
         case "ArrowRight":
            repeatIntro();
            break;
         case "ArrowLeft":
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
      <div id="chamber-image">
         <div id="d-landing">
            <h id="h-entrance" >
               Welcome to Level Two
                          </h>
            <p id="p-landing">
                You have entered a magical portal that has transported you to the Chamber of Secrets.
                The monstrous basilisk lurks in the shadows
                of the chamber, and if you look the basilisk in the eye, you will be frozen and unable
                to move! Your job is to defeat the basilisk. Fawkes the Phoenix has flown into the
                chamber and has now blinded the basilisk so that you no longer have to worry about being
                frozen! You spot the Sorting Hat on the ground nearby… what do you do next?
                          </p>
            <div id="d-options>">
               <p>
                  <div id="d-options">
                     <button id="hat" tabIndex="1" onClick={handleHat}> Put on the Sorting Hat and hope that it provides you with magical powers!</button>
                     <button tabIndex="2" id="sword" onClick={handleSword}> Look inside the Sorting Hat… there’s something shiny in there that might help.</button>
                     <button tabIndex="3" id="basilisk" onClick={handleBasilisk}> Throw the Sorting Hat at the basilisk to distract it so that you can run out of the Chamber.</button>
                     <button tabIndex="4" id="gryffindor" onClick={handleGryffindor}> Put on the Sorting Hat and the power of Gryffindor will help you defeat the basilisk.</button>
                  </div>
               </p>
            </div>
         </div>
         {sound}
      </div>
   );
}