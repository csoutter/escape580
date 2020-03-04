import React, { useState, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import {AppView} from './appView';
import '../landing.css';

function Greeting(props) {

    const handleClick = () => {
        props.onClick();
    };
    return (
       <div id="d-landing">
         <h id="h-landing" >
               Escape 580
         </h>
         <p id="p-landing">
           (Spoken) Welcome to our game! As a player, you are a student at Hogwarts who is competing in the Tr-Wizard cup for the
           Goblet of Fire. You are about to enter the maze, where you will use your controller to navigate through
           the obstacles of the maze.
         </p>
         <button id="b-landing" onClick={handleClick}>
         Begin
         </button>
       </div>
    );
}

export function Landing(props) {

     const[view, setView] = useState('greetings');

     const handleClick = () => {
           console.log("accessed");
           setView('app-view');
         };

    const[viewDisplay, setDisplay]= useState(<Greeting onClick={handleClick}/>);

    useLayoutEffect(() => {
        switch(view) {
         case 'greetings':
         setDisplay(<Greeting onClick={handleClick}/>);
         break;
         case 'app-view':
         setDisplay(<AppView/>);
        }
    }, [view]);

 return (
    <div id="d-container">
        {viewDisplay}
    </div>
 );
}