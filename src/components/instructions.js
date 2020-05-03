import React, { useLayoutEffect, useCallback, useState } from 'react';
import Sound from 'react-sound';
import instructions from "../audio/instructions.m4a";
import howtoplay from "../audio/how-to-play.m4a";
export function Instructions(props) {

   const handleViewChange = props.handleViewChange === undefined ? null : props.handleViewChange;

   const instruct = <Sound
      url={howtoplay}
      playStatus={Sound.status.PLAYING}
      autoLoad={true}
      loop={true}
      volume={100}
   />;

   const [sound, setSound] = useState(instruct);
   const repeatIntro = () => {
      Sound.playStatus = Sound.status.STOPPED;
      setSound(
         <Sound
            url={instructions}
            playStatus={Sound.status.STOPPED}
            autoLoad={true}
            loop={false}
         />
      );

      setSound(instruct);
   }
   const handleKey = useCallback((e) => {
      var event = window.event ? window.event : e;
      console.log(event);
      switch (e.key) {
         case " ":
            handleViewChange('enter');
            break;
         case "ArrowRight":
            repeatIntro();
            break;
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
      <div id="instructions-image">
         <div id="d-instructions">
            <h id="h-landing" >
               How to Play
            </h>
            <p id="p-instructions">
               <p>
                  Each level of the maze will begin with a description of the obstacle
                  for that maze level. After this you will hear four options and will have to choose 
                  the correct option to proceed to the next level.
               </p>
               <p>
                  To repeat the description of the obstacle, press the "r" key at any time.
               </p>
               <p>
                  To hear all possible options in a level, press the "tab" key on your keyboard. Continue to press the tab key to hear more options. 
                  Once you have heard all options, pressing tab again will repeat the options. On most keyboards, the tab button will be the second button below the top
                  left button, or the escape key. After identifying the top left button, move down 2 keys with your finger and you should be at the tab key.<br />
               </p>
               <p>
                  To select the latest option you have heard, press the space bar key. This will select that option.
                  You will then hear a response indicating if you chose the correct option. 
                  If it is not correct, continue tabbing and select another option.
                  If you do not hear any response after pressing the space bar, press tab again and then press the space bar.
               </p>
               <p>
                  Press the "h" key at any time to hear a condensed version of these instructions
               </p>
               <p>If you are ready to begin, press the space bar.</p>
            </p>
         </div>
         {sound}
      </div>
   );
}