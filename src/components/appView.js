import React, { useState, useLayoutEffect } from 'react';
import Sound from 'react-sound';
import {Entrance} from './entrance';
import {Landing} from './landing';
import {DevilsSnare} from './devilsSnare';
import { Sphinx } from './sphinx';
import { Riddle } from './riddle';
import {Prophecy } from "./prophecy";
import {Ending} from "./ending";
import { Boggart } from './boggart';
import { Chamber } from './chamber';
import { Instructions } from './instructions';
import transition from '../audio/transition.mov';


export function AppView(props){

    const[view, setView] = useState('instructions');
    const[viewDisplay, setDisplay] = useState(<Entrance/>);

    const handleViewChange = (view) => {
        setView(view);
    };

    const handleExitClick = () => {
            setView('landing');
        }

    useLayoutEffect(() => {
          switch(view) {
            case 'enter':
            setDisplay(
            <Entrance
            background="url('../images/harry_in_maze.jpg')"
            handleViewChange={handleViewChange}
            exit={handleExitClick}
            />
            );
            break;
            case 'instructions':
            setDisplay(
            <Instructions
             exit={handleExitClick}
            handleViewChange={handleViewChange}
            />);
            break;
            case 'landing':
            setDisplay(
            <Landing/>
            );
            break;
            case 'level-one':
            //future implementations: call randomization function here to determine
            //which component will be displayed
           setDisplay(
            <DevilsSnare
            background="url('../images/devilsSnare.jpg')"
            exit={handleExitClick}
            handleViewChange={handleViewChange}
            />
            );
            break;
            case 'level-two':
            setDisplay(<Chamber
            exit={handleExitClick}
            handleViewChange={handleViewChange}
            />);
            break;
            case 'level-three':
                setDisplay(
                    <Boggart
                    background="url('../images/boggart.jpg')"
                    exit={handleExitClick}
                    handleViewChange={handleViewChange}
                    />
                );
                break;
            case 'level-four':
           setDisplay(
            <Sphinx
            background="url('../images/Sphinx.png')"
            exit={handleExitClick}
            handleViewChange={handleViewChange}
            />
            );
            break;
            case 'riddle':
            setDisplay(
            <Riddle
            background="url('../images/Sphinx.png')"
            exit={handleExitClick}
            handleViewChange={handleViewChange}
            />
            );  
            break;
            case 'level-five':
           setDisplay(
            <Prophecy
            background="url('../images/prophecy.png')"
            exit={handleExitClick}
            handleViewChange={handleViewChange}
            />
            );
            break;
            case 'ending':
           setDisplay(
            <Ending
            background="url('../images/prophecy.png')"
            exit={handleExitClick}
            handleViewChange={handleViewChange}
            />
            );
            break;
            default:
            setDisplay(
            <Entrance background="url('../images/harry_in_maze.jpg')" handleViewChange={handleViewChange}/>
            );
          }
       }, [view]);

    return (
    <React.Fragment>
        {viewDisplay}
    </React.Fragment>
    );
}