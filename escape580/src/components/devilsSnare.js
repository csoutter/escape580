import React, {useLayoutEffect} from 'react';

export function DevilsSnare(props) {

//    useLayoutEffect(() => {
//        document.body.style.background = props.background;
//    });

    const handleExitClick = () => {
        props.exit();
    }

    const handleKey = (e) => {
        if(e.key === "ArrowRight") {
        console.log("right arrow key pressed");
            //call props.handleViewChange here
        }
        };

    return (
      <div id="d-landing" onKeyDown={handleKey}>
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