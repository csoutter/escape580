import React, { useState, useLayoutEffect } from 'react';
import Sound from 'react-sound';
import {AppView} from './appView';
import '../landing.css';
import magicSound from '../audio/zapsplat_fantasy_reversed_backwards_magical_glissando_001_46178.mp3';
import epicMusic from '../audio/bensound-epic.mp3';

function Greeting(props) {

const[sound, setSound] = useState('');

    const handleClick = () => {
        props.onClick();
    };

    return (
       <div id="d-landing">
         <h id="h-landing" >
               Escape 580
         </h>
         <p id="p-landing">
           (Spoken) Welcome to our game! As a player, you are a student at Hogwarts who is competing in the Tr-Wizard cup. You are about to enter the maze, where you will use your controller to navigate through
           the obstacles of the maze.
         </p>
         <button id="b-landing" onClick={handleClick}>
         Begin
         </button>
         <Sound
              url={magicSound}
              playStatus={Sound.status.PLAYING}
              autoLoad={true}
              loop={false}
          />
       </div>
    );
}

export function Landing(props) {

     const[view, setView] = useState('greetings');

     const handleClick = () => {
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
         break;
         default:
         setDisplay(<Greeting onClick={handleClick}/>);
        }
    }, [view]);

 return (
    <div id="d-container">
        {viewDisplay}
    </div>
 );
}