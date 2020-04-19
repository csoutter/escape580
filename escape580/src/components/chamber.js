import React, {useLayoutEffect, useCallback, useState} from 'react';

export function Chamber(props) {

const handleViewChange = props.handleViewChange === undefined ? null : props.handleViewChange;


 const handleKey = useCallback((e) => {
           var event = window.event ? window.event : e;
              console.log(event);
           switch(e.key) {
           case "ArrowRight":
              handleViewChange('level-four');
           console.log("right arrow key pressed");
           break;
           case "ArrowLeft":
           handleViewChange('level-one');
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
        <div id="chamber-image">
           <div id="d-landing">
                          <h id="h-entrance" >
                                Welcome to Level Two
                          </h>
                          <p id="p-landing">
                            You have entered the chamber of secrets. The monstrous basilisk lurks in the shadows
                             of the chamber, and if you look the basilisk in the eye, you will be frozen and unable
                             to move! Your job is to defeat the basilisk. Wow! Fawkes the Phoenix has flown into the
                             chamber and has now blinded the basilisk so that you no longer have to worry about being
                             frozen! You spot the sorting hat on the ground nearby… what do you do next?
                          </p>
                          <div id="d-options>">
                          <p>
                                                      Your options are:
                                                      <ul id="devils-ul">
                                                      <li>A. Put on the sorting hat and hope that it provides you with magical powers!  </li>
                                                      <li>S. Look inside the sorting hat… there’s something shiny in there that might help. </li>
                                                      <li>D. Throw the sorting hat at the basilisk to distract it so that you can run out of the chamber. </li>
                                                      <li>F. Put on the sorting hat and the power of gryffindor will help you defeat the basilisk.</li>
                                                      </ul>
                                                    </p>
                          </div>
                        </div>
        </div>
        );
}