import React, {useLayoutEffect, useEffect, useCallback} from 'react';

export function Riddle(props) {
    

    const handleExitClick = () => {
        props.exit();
    }
    

    const handleViewChange = props.handleViewChange === undefined ? null : props.handleViewChange;

      const handleKey = useCallback((e) => {
           var event = window.event ? window.event : e;
              console.log(event);
           switch(e.key) {
           case "ArrowRight":
              handleViewChange('level-five');
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
                        Answer the Sphinx's Riddle
                  </h>
                  <p id="p-landing">
                  First think of the person who lives in disguise,<br></br>
                  Who deals in secrets and tells naught but lies. <br></br>
                  Next, tell me what’s always the last thing to mend, <br></br>
                  The middle of middle and end of the end? <br></br>
                  And finally give me the sound often heard <br></br>
                  During the search for a hard-to-find word. <br></br>
                  Now string them together, and answer me this, <br></br>
                  Which creature would you be unwilling to kiss? <br></br>
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