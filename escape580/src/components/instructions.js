import React, {useLayoutEffect, useCallback, useState} from 'react';

export function Instructions(props) {

const handleViewChange = props.handleViewChange === undefined ? null : props.handleViewChange;


 const handleKey = useCallback((e) => {
           var event = window.event ? window.event : e;
              console.log(event);
           switch(e.key) {
           case "ArrowRight":
              handleViewChange('enter');
           console.log("right arrow key pressed");
           break;
           case "ArrowLeft":
           handleViewChange('landing');
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
                            The navigation through each level of the maze will be done with left and right
                            arrow keys. Each level of the maze will begin with a description of the obstacle
                            for that maze level, after which you will have the options to hear each option for
                            how to proceed. <br/>
                            </p>
                            <p>
                            These options can be accessed with the A, S, D, and F keys on the keyboard. Take
                            some time to place four fingers on those keys now. On most keyboards, the F key is one of
                            two keys in the third row of keys from the bottom that has a raised portion on it.
                            In this row, the f key is the leftmost key out of the two keys that have a raised portion.
                            Throughout the game, have a finger resting on the f key, and have fingers resting on the three
                            keys located directly beside the f key on that same row. <br/>
                            </p>
                            <p>
                            After hearing an option that you
                            want to select as the right way to proceed, press the space bar to select that option.
                            You will then hear a response indicating if you chose the correct option. If so, you
                            will be able to navigate to the next level using the right arrow key.
                            </p>
                          </p>
                        </div>
        </div>
        );
}