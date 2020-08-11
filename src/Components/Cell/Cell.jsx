import React, { useEffect, useRef, useState } from 'react';
import _ from 'lodash';

const Cell = ({colClass,playedTurn,identifier,playedPositions}) => {
    let thing = _.find(playedPositions,id=>id===identifier);
    let ref = useRef(identifier);

    return (<div ref={ref} className={colClass} identifier={identifier} onClick={thing!==undefined? ()=>{}:(event)=>playedTurn(event,identifier)}></div> );
}
 
export default Cell;