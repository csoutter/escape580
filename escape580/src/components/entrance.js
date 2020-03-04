import React, {useLayoutEffect, useEffect } from 'react';
import '../entrance.css';

export function Entrance(props) {

    useLayoutEffect(() => {
        document.body.style.background = props.background;
    });

    const handleClick = () => {
        props.handleViewChange('landing');
    }

   return (
   <div id="d-landing">
            <h id="h-entrance" >
                  Welcome to the Maze
            </h>
            <p id="p-landing">
              (Spoken) You have just entered the maze.
            </p>
            <div id="d-button-holder">
            <button id="b-landing">
                        Next
                        </button>
                        <button id="b-landing" onClick={handleClick}>
                         Exit Maze
                        </button>
            </div>

          </div>
   );
}