import React, { useState, useLayoutEffect } from 'react';
import {Entrance} from './entrance';
import {Landing} from './landing';

export function AppView(props){

    const[view, setView] = useState('enter');
    const[viewDisplay, setDisplay] = useState(<Entrance/>);

    const handleViewChange = (view) => {
        setView(view);
    }
    useLayoutEffect(() => {
    console.log('changing view');
       switch(view) {
         case 'enter':
         setDisplay(
         <Entrance background="url('../images/harry_in_maze.jpg')" handleViewChange={handleViewChange}/>
         );
         break;
         case 'landing':
         setDisplay(
         <Landing/>
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