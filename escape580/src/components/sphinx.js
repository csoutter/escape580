import React, {useLayoutEffect, useEffect, useCallback, useState} from 'react';
import Sound from 'react-sound';
import '../levels.css';
import sphinxInstructions from '../audio/sphinx/level4.mov';
import level4announce from '../audio/sphinx/level4announce.mp3'
import hiss from "../audio/sphinx/hiss.mp3";
import snake from "../audio/sphinx/snakepit.wav";
import spacebar from "../audio/sphinx/spacebar.m4a";


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

export function Sphinx(props) {

    const handleViewChange = props.handleViewChange === undefined ? null : props.handleViewChange;
    const finishedinstructions = () => {
      setSound(<React.Fragment><Sound
        url={spacebar}
        playStatus={Sound.status.PLAYING}
        // onFinishedPlaying={finishedspace}
        autoLoad={true}
        loop={false}
        volume={100}
        playbackRate='.8'/>
        <Sound
          url={snake}
          playStatus={Sound.status.PLAYING}
          autoLoad={true}
          loop={true}
          volume={100}
          playbackRate='.8'
        /></React.Fragment>);
      
    }

    // const finishedspace = () => {
    //     setSound(<Sound
    //       url={snake}
    //       playStatus={Sound.status.PLAYING}
    //       autoLoad={true}
    //       loop={true}
    //       volume={100}
    //       playbackRate='.8'
    //     />);
    //     }

    const intro = <React.Fragment>
                    <Sound
                    url={sphinxInstructions}
                    playStatus={Sound.status.PLAYING}
                    onFinishedPlaying={finishedinstructions}
                    autoLoad={true}
                    loop={false}
                    playbackRate=".7"
                    volume={100} />
                    <Sound
                           url={snake}
                           playStatus={Sound.status.PLAYING}
                           autoLoad={true}
                           loop={true}
                           volume="40"
                       />
                       <Sound
                           url={hiss}
                           playStatus={Sound.status.PLAYING}
                           autoLoad={true}
                           loop={false}
                           volume="80"
                       />
                    </React.Fragment>;

    const[sound, setSound] = useState(intro);
    

    const handleSpace = () => {
        handleViewChange('riddle');
    }


      const handleKey = useCallback((e) => {
           var event = window.event ? window.event : e;
              console.log(event);
           switch(e.key) {
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
                          Welcome to Level Four
                    </h>
                    <p id="p-landing">
                    You are very near your goal. The quickest way is past me, a powerful sphinx.
                     I will not move, no, not unless you can answer my riddle. 
                     Answer on your first guess — I let you pass. Answer wrongly — I attack. 
                     Remain silent — I will let you walk away from me unscathed. 
                     Press the spacebar to hear the riddle
                    </p>
                    <div id="d-button-holder">
                     </div>
                     {sound}
                     {sound}
                         
            </div>
          </div>
    );
}












// // import React, {useLayoutEffect, useEffect, useCallback, useState} from 'react';
// // // import sphinxInstructions from '../audio/sphinx/level4.mov';
// // // import level4announce from '../audio/sphinx/level4announce.mp3'
// // // import hiss from "../audio/sphinx/hiss.mp3";
// // // import snake from "../audio/sphinx/snakepit.wav";
// // // import spacebar from "../audio/sphinx/spacebar.m4a";
// // import Sound from 'react-sound';


// function RenderReply(props) {
//     return (
//         <React.Fragment>
//              <Sound
//                url={props.reply}
//                playStatus={Sound.status.PLAYING}
//                autoLoad={true}
//                loop={false}
//                volume={100}
//               />
//         </React.Fragment>
//     );
// }


// export function Sphinx(props) {
    

//     const handleExitClick = () => {
//         props.exit();
//     }
//     const finishedinstructions = () => {
//         setSound(<RenderReply reply={spacebar}/>);
        
//       }
//     const intro = <React.Fragment>
//                     <Sound
//                            url={snake}
//                            playStatus={Sound.status.PLAYING}
//                            autoLoad={true}
//                            loop={true}
//                            volume="40"
//                        />
//                        <Sound
//                            url={hiss}
//                            playStatus={Sound.status.PLAYING}
//                            autoLoad={true}
//                            loop={false}
//                            volume="10"
//                        />
//                        <Sound
//                            url={sphinxInstructions}
//                            playStatus={Sound.status.PLAYING}
//                            onFinishedPlaying={finishedinstructions}
//                            autoLoad={true}
//                            loop={false}
//                            volume="100"
//                            pitch="high"
//                            playbackRate=".8"
//                        />
//                     </React.Fragment>;
  

//     const handleViewChange = props.handleViewChange === undefined ? null : props.handleViewChange;
//     const[sound, setSound] = useState(intro);

//       const handleKey = useCallback((e) => {
//            var event = window.event ? window.event : e;
//               console.log(event);
//            switch(e.key) {
//            case " ":
//                 handleViewChange('riddle');
//                 break;
//            case "Escape":
//                 props.exit();
//            }
//       }, [props]);

      
//      useLayoutEffect(() => {
//          document.addEventListener("keydown", handleKey);
//                return function cleanup() {
//                document.removeEventListener("keydown", handleKey);
//              };
//        });


//     return (
//       <div id="sphinx-image">
//       <div id="d-landing">
//                   <h id="h-entrance" >
//                         Welcome to Level Four
//                   </h>
//                   <p id="p-landing">
//                   You are very near your goal. The quickest way is past me, a powerful sphinx.
//                    I will not move, no, not unless you can answer my riddle. 
//                    Answer on your first guess — I let you pass. Answer wrongly — I attack. 
//                    Remain silent — I will let you walk away from me unscathed. 
//                    Press the spacebar to hear the riddle
//                   </p>
//                   <div id="d-button-holder">
//                   <button id="b-landing">
//                         Next
//                         </button>
//                         <button id="b-landing" onClick={handleExitClick}>
//                          Exit Maze
//                         </button>
//                    </div>
                       
//           </div>
//         </div>
//     );
// }