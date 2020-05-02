import React, { useState, useLayoutEffect, useCallback, useEffect } from 'react';
import Sound from 'react-sound';
import {AppView} from './appView';
import '../landing.css';
import '../fonts/LUMOS.TTF';
import welcome from '../audio/welcome_to_game.m4a';
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
      url={welcome}
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
                    Escape the Maze: <br></br>A Hogwarts Quest
                </h>
                <p id="p-landing">
                Welcome to <span>Escape the Maze</span>! <br></br> 
             In this game, you are a student at Hogwarts School of Witchcraft and Wizardry. To prove your mastery of magic, you are 
             competing in the Triwizard Tournament. You are about to start the Third Task, the final task in this Tournament. 
             You will begin by entering a magical maze, with challenges and obstacles at every turn. 
             These will test your magical knowledge and quick thinking.
             You will use your keyboard to navigate through these obstacles.
             <br></br>Press the space bar to begin.
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