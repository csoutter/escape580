import React, {useLayoutEffect, useEffect, useCallback} from 'react';

export function Ending(props) {

    const handleExitClick = () => {
        props.exit();
    }

    const handleViewChange = props.handleViewChange === undefined ? null : props.handleViewChange;

      const handleKey = useCallback((e) => {
           var event = window.event ? window.event : e;
              console.log(event);
           switch(e.key) {
           case "ArrowRight":
              handleViewChange('ending');
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
                        You exited the maze!!
                  </h>
                  <p id="p-landing">
                  Congratulations, wizard, you made it out alive! The Triwizard cup is yours! 
                  You may have passed this test but you will have many more to face, young wizard. 
                  Onward and upward!
                  </p>
                  <div id="d-button-holder">
                      <button id="b-landing" onClick={handleExitClick}>
                           Start Over
                        </button>
                  </div>
                </div>
    );
}