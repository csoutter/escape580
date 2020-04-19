import React, {useLayoutEffect, useEffect, useCallback, useState} from 'react';
import Sound from 'react-sound';
import '../levels.css';
import magicSound from '../audio/zapsplat_fantasy_reversed_backwards_magical_glissando_001_46178.mp3';
import devils_snare from '../audio/devils_snare.m4a';
import rain_spell from '../audio/devilsSnare/rain_spell.m4a';
import rain_sound from '../audio/devilsSnare/rain_soud.mov';
import explosion from '../audio/devilsSnare/explosion.mov';
import explosion_spell from '../audio/devilsSnare/explosion_spell.m4a';
import sunlight_spell from '../audio/devilsSnare/sunlight_spell.m4a';
import scream_spell from '../audio/devilsSnare/scream_spell.m4a';
import scream_sound from '../audio/devilsSnare/scream.mov';
import explosion_reply from '../audio/devilsSnare/explosion_reply.m4a';
import rain_reply from '../audio/devilsSnare/rain_reply.m4a';
import sunlight_reply from '../audio/devilsSnare/sunlight_reply.m4a';
import scream_reply from '../audio/devilsSnare/scream_reply.m4a'

function RenderReply(props) {
    return (
        <React.Fragment>
             <Sound
               url={props.reply}
               playStatus={Sound.status.PLAYING}
               autoLoad={true}
               loop={false}
               volume={100}
              />
        </React.Fragment>
    );
}

export function DevilsSnare(props) {

    const handleExitClick = () => {
        props.exit();
    }

    const intro = <Sound
                    url={devils_snare}
                    playStatus={Sound.status.PLAYING}
                    autoLoad={true}
                    loop={false}
                    volume={100}
                            />;

    const[sound, setSound] = useState(intro);

    const rain = <React.Fragment>
                                  <Sound
                                     url={rain_spell}
                                     playStatus={Sound.status.PLAYING}
                                     autoLoad={true}
                                     loop={false}
                                     volume={75} />
                                  <Sound
                                     url={rain_sound}
                                     playStatus={Sound.status.PLAYING}
                                     autoLoad={true}
                                     loop={false}
                                     volume={75} />

                                   </React.Fragment>;

    const explosion_comp =   <React.Fragment>
                                 <Sound
                                    url={explosion_spell}
                                    playStatus={Sound.status.PLAYING}
                                    autoLoad={true}
                                    loop={false}
                                    volume={100} />
                                 <Sound
                                    url={explosion}
                                    playStatus={Sound.status.PLAYING}
                                    autoLoad={true}
                                    loop={false}
                                    volume={25} />
                                  </React.Fragment>;

    const sunlight = <React.Fragment>
                       <Sound
                          url={sunlight_spell}
                          playStatus={Sound.status.PLAYING}
                          autoLoad={true}
                          loop={false}
                          volume={100} />
                     </React.Fragment>;

    const scream = <React.Fragment>
                        <Sound
                           url={scream_spell}
                           playStatus={Sound.status.PLAYING}
                           autoLoad={true}
                           loop={false}
                           volume={100} />
                        <Sound
                           url={scream_sound}
                           playStatus={Sound.status.PLAYING}
                           autoLoad={true}
                           loop={false}
                           volume={25} />
                    </React.Fragment>;


    const handleViewChange = props.handleViewChange === undefined ? null : props.handleViewChange;

    const selectedOption = () => {
    console.log("enter pressed");
    console.log(sound);
       switch(sound) {
       case rain:
       setSound(<RenderReply reply={rain_reply}/>);
       break;
       case sunlight:
       setSound(<RenderReply reply={sunlight_reply}/>);
       break;
       case scream:
       setSound(<RenderReply reply={scream_reply}/>);
       break;
       case explosion_comp:
       setSound(<RenderReply reply={explosion_reply}/>);
       break;
       }
    };

      const handleKey = useCallback((e) => {
           var event = window.event ? window.event : e;
              console.log(event);
           switch(e.key) {
           case "ArrowRight":
              handleViewChange('level-four');
           console.log("right arrow key pressed");
           break;
           case "ArrowLeft":
           handleViewChange('enter');
           break;
           case "a":
           setSound(rain);
           break;
           case "s":
           setSound(explosion_comp);
           break;
           case "d":
           setSound(sunlight);
           break;
           case "f":
           setSound(scream);
           break;
           case "Enter":
           selectedOption();
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
    <div id="devils_snare-image">
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
                      <p>
                        Your options are:
                        <ul id="devils-ul">
                        <li>A. Rain Spell </li>
                        <li>S. Explosion Spell</li>
                        <li>D. Sunlight Spell</li>
                        <li>F. Scream Spell</li>
                        </ul>
                      </p>
                      <div id="d-button-holder">
                      <button id="b-landing">
                                  Next
                                  </button>
                                  <button id="b-landing" onClick={handleExitClick}>
                                   Exit Maze
                                  </button>
                      </div>
                       {sound}
                    </div>
    </div>
    );
}