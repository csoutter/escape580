import React, { useState, useLayoutEffect, useCallback, useEffect } from 'react';
import Sound from 'react-sound';
import {AppView} from './appView';
import '../landing.css';
import '../fonts/LUMOS.TTF';
import magicSound from '../audio/zapsplat_fantasy_reversed_backwards_magical_glissando_001_46178.mp3';
import epicMusic from '../audio/bensound-epic.mp3';
import landingInstructions from "../audio/landing.m4a";
import game_entrance from '../audio/game_entrance.m4a';

function Greeting(props) {

    const hpTheme = "https://ia801309.us.archive.org/28/items/HarryPotter-hedwigTheme/Harry_Potter_Theme_Song_Hedwigs_Theme.mp3";

    const handleViewChange = props.onClick === undefined ? null : props.onClick;

    const intro = <React.Fragment>
    <Sound
      url={hpTheme}
      playStatus={Sound.status.PLAYING}
      autoLoad={true}
      loop={true}
      volume={75}
    />
     <Sound
      url={game_entrance}
      playStatus={Sound.status.PLAYING}
      autoLoad={true}
      loop={false}
      volume={50}
     />
    </React.Fragment>;

    const handleClick = () => {
        props.onClick();
    };

      const handleKey = useCallback((e) => {
             var event = window.event ? window.event : e;
                console.log(event);
             if(e.key === " ") {
                     console.log("right arrow key pressed");
                      handleViewChange("enter");
                     }
        }, [props]);

       useLayoutEffect(() => {
           document.addEventListener("keydown", handleKey);
                 return function cleanup() {
                 document.removeEventListener("keydown", handleKey);
               };
         });
    return (
       <div id="landing-image">
           <div id="d-landing">
            <h id="h-landing" >
                Escape 580
            </h>
            <p id="p-landing">
            Welcome to our game! As a player, you are a student at Hogwarts who is competing in the Triwizard cup.
            You are about to enter the maze, where you will use your keyboard to navigate through the obstacles of the maze. 
            Press the space bar to begin.
            </p>
        </div>
        {intro}
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