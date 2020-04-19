import React, {useLayoutEffect, useEffect, useCallback} from 'react';

export function DevilsSnare(props) {

    const handleExitClick = () => {
        props.exit();
    }

    const handleViewChange = props.handleViewChange === undefined ? null : props.handleViewChange;

      const handleKey = useCallback((e) => {
           var event = window.event ? window.event : e;
              console.log(event);
           switch(e.key) {
           case "ArrowRight":
              handleViewChange('level-three');
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
                  <div id="d-button-holder">
                  <button id="b-landing">
                              Next
                              </button>
                              <button id="b-landing" onClick={handleExitClick}>
                               Exit Maze
                              </button>
                  </div>
                </div>
    );
}