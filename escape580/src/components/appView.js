import React, { useState, useLayoutEffect } from 'react';
import {Entrance} from './entrance';

export function AppView(props){

    const[view, setView] = useState('enter');
    const[viewDisplay, setDisplay] = useState(<Entrance/>);

    useLayoutEffect(() => {
       switch(view) {
         case 'enter':
         setDisplay(
         <Entrance/>
         );
         break;
         default:
         setDisplay(
         <Entrance/>
         );
       }
    }, [view]);

    return (
       {viewDisplay}
    );
}