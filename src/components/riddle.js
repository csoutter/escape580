import React, {useLayoutEffect, useEffect, useCallback, useState} from 'react';
import Sound from 'react-sound';
import '../levels.css';
import riddle from "../audio/sphinx/riddle.mp3";
import snake from "../audio/sphinx/snakepit.wav";
import transition from '../audio/transition.mov';


import dementor_answer from '../audio/sphinx/dementor_answer.m4a';
import dementor_sound from '../audio/sphinx/dementor_sound.wav';
import dementor_reply from '../audio/sphinx/dementor_reply.m4a';

import mummy_answer from '../audio/sphinx/mummy.m4a';
import mummy_sound from '../audio/sphinx/mummy.wav';
import mummy_reply from '../audio/sphinx/mummy-reply.m4a';

import spider_answer from '../audio/sphinx/spider.m4a';
import spider_sound from '../audio/sphinx/spider-sound.mp3';
import spider_reply from '../audio/sphinx/spider_reply.m4a';

import skrewt_answer from '../audio/sphinx/skrewt.m4a';
import skrewt_sound from '../audio/sphinx/skrewt.wav';
import skrewt_reply from '../audio/sphinx/skrewt_reply.m4a';


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

export function Riddle(props) {

    const handleViewChange = props.handleViewChange === undefined ? null : props.handleViewChange;

    const intro = <React.Fragment>
                    <Sound
                    url={riddle}
                    playStatus={Sound.status.PLAYING}
                    autoLoad={true}
                    loop={false}
                    playbackRate=".7"
                    volume={100} />
                    <Sound
                    url={snake}
                    playStatus={Sound.status.PLAYING}
                    autoLoad={true}
                    loop={true}
                    volume={50} />
                    </React.Fragment>;

    const finishTransition = () => {
           setSound(intro);
    };

    const transit = <React.Fragment>
                     <Sound
                       url={transition}
                       playStatus={Sound.status.PLAYING}
                       onFinishedPlaying ={finishTransition}
                       autoLoad={true}
                       loop={false}
                       volume={50}
                     />
                     </React.Fragment>;

    const[sound, setSound] = useState(transit);
    const[correct, setCorrect] = useState(false);

    const mummy = <React.Fragment>
                    <Sound
                        url={mummy_answer}
                        playStatus={Sound.status.PLAYING}
                        autoLoad={true}
                        loop={false}
                        volume={75} />
                    <Sound
                        url={mummy_sound}
                        playStatus={Sound.status.PLAYING}
                        autoLoad={true}
                        loop={false}
                        volume={75} />
                </React.Fragment>;

    const spider =  <React.Fragment>
                        <Sound
                        url={spider_answer}
                        playStatus={Sound.status.PLAYING}
                        autoLoad={true}
                        loop={false}
                        volume={100} 
                        playbackRate='.5'/>
                        <Sound
                        url={spider_sound}
                        playStatus={Sound.status.PLAYING}
                        autoLoad={true}
                        loop={false}
                        volume={25} />
                    </React.Fragment>;

    const skrewt = <React.Fragment>
                        <Sound
                          url={skrewt_answer}
                          playStatus={Sound.status.PLAYING}
                          autoLoad={true}
                          loop={false}
                          volume={100}
                          playbackRate='.8' />
                          <Sound
                          url={skrewt_sound}
                          playStatus={Sound.status.PLAYING}
                          autoLoad={true}
                          loop={false}
                          volume={30} />
                    </React.Fragment>;

    const dementor = <React.Fragment>
                        <Sound
                           url={dementor_sound}
                           playStatus={Sound.status.PLAYING}
                           autoLoad={true}
                           loop={false}
                           volume={25} />
                        <Sound
                           url={dementor_answer}
                           playStatus={Sound.status.PLAYING}
                           autoLoad={true}
                           loop={false}
                           volume={100} />
                    </React.Fragment>;

    const handleMummy = () => {
        console.log(document.activeElement.id);
        // While a mummy can be a disguise, this is not the right answer. Answer again quickly before the sphinx attacks you!
       setSound(<RenderReply reply={mummy_reply}/>);
    }

    const handleSpider= () => {
        // A spy will try to find out your secrets, and "er" is a sound made when searching for a word. 
        // The middle of middle is “i”, and the end of end is “d”, so this forms the word spider! you are correct!
        setSound(<Sound
            url={spider_reply}
            playStatus={Sound.status.PLAYING}
            autoLoad={true}
            loop={false}
            volume={100}
            onFinishedPlaying={finishedLevel}
            playbackRate='.8'
          />);
    }

    const handleSkrewt = () => {
        // A blast-ended skrewt is more likely to burn you than find out your secrets! Answer again quickly before the sphinx attacks you!
       setSound(<Sound
                  url={skrewt_reply}
                  playStatus={Sound.status.PLAYING}
                  autoLoad={true}
                  loop={false}
                  volume={100}
                />);
    }

    const handleDementor = () => {
        // A dementor is a creature you wouldn't want to kiss, as you would lose your soul! But "e" is the end of middle, and the beginning of end.
        setSound(<RenderReply reply={dementor_reply}/>);
    }

    const finishedLevel = () => {
        handleViewChange('level-five');
    }

    const handleSpace = () => {
       let id =  console.log(document.activeElement.id);
       switch(id) {
       case "mummy":
           handleMummy();
           break;
       case "spider":
           handleSpider();
           break;
       case "skrewt":
           handleSkrewt();
           break;
       case "dementor":
           handleDementor();
           break;
       }
    }

    const handleSelect = (name) => {
        console.log(name);
        switch(name) {
            case -1:
            setSound(mummy);
            break;
            case 4:
            handleSelect(-1);
            break;
            case 1:
            setSound(spider);
            break;
            case 2:
            setSound(dementor);
            break;
            case 3:
            setSound(skrewt);
            break;
        }
    }

      const handleKey = useCallback((e) => {
           var event = window.event ? window.event : e;
              console.log(event);
           switch(e.key) {
           case "Tab":
           handleSelect(document.activeElement.tabIndex)
           break;
           case " ":
           handleSpace();
           break;
           case "Escape":
           props.exit();
           }
      }, [props]);

     useLayoutEffect(() => {
         document.addEventListener("keydown", handleKey);
               return function cleanup() {
               document.removeEventListener("keydown", handleKey);
             };
       });

    return (
    <div id="sphinx-image">
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
                        <div id="d-options">
                       <button id="mummy" tabIndex = "1" onClick={handleMummy}> Mummy </button>
                       <button tabIndex="2" id="spider" onClick={handleSpider}>Spider</button>
                       <button tabIndex="3" id="dementor" onClick={handleDementor}>Dementor</button>
                       <button tabIndex="4" id="skrewt" onClick={handleSkrewt}>Blast-Ended Skrewt</button>
                       </div>
                       {sound}
                       {sound}
                    </div>
    </div>
    );
}