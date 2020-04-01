import React, { useState, useLayoutEffect } from 'react';
import {Entrance} from './entrance';
import {Landing} from './landing';
import {DevilsSnare} from './devilsSnare';

export function AppView(props){

    const[view, setView] = useState('enter');
    const[viewDisplay, setDisplay] = useState(<Entrance/>);

    const handleViewChange = (view) => {
        setView(view);
    }

    const handleExitClick = () => {
            setView('landing');
        }

    useLayoutEffect(() => {
       console.log('changing view');
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