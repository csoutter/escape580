import React, {useLayoutEffect, useCallback, useState} from 'react';
import Sound from 'react-sound';
import instructions from "../audio/instructions.m4a";

export function Instructions(props) {

const handleViewChange = props.handleViewChange === undefined ? null : props.handleViewChange;


 const handleKey = useCallback((e) => {
           var event = window.event ? window.event : e;
              console.log(event);
           switch(e.key) {
           case " ":
              handleViewChange('enter');
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
                          <h id="h-entrance" >
                             Game Controls
                          </h>
                          <p id="p-instructions">
                          <p>
                            The navigation through each level of the maze will be done with the tab and space bar keys. 
                            Each level of the maze will begin with a description of the obstacle
                            for that maze level, after which you will have the options to hear each option for
                            how to proceed. <br/>
                            </p>
                            <p>
                            These options can be accessed by tabbing on the keyboard. The tab button will be the second button below the top
                            left button, or the escape key. After identifying the top left button, move down 2 keys with your finger and you should be
                            at the tab key.<br/>
                            </p>
                            <p>
                            After hearing an option that you
                            want to select as the right way to proceed, press the space bar to select that option.
                            You will then hear a response indicating if you chose the correct option. If it is not correct, continue tabbing and select another option.
                            </p>
                            <p>If you are ready to begin, press the space bar.</p>
                          </p>
                        </div>
                        <Sound
                           url={instructions}
                           playStatus={Sound.status.PLAYING}
                           autoLoad={true}
                           loop={false}
                           volume={100}
                        />
        </div>
        );
}