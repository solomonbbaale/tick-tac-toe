import React, { useRef } from 'react';
import _ from 'lodash';

const Cell = ({colClass,playedTurn,identifier,playedPositions,gameStatus}) => {
    let cell = _.find(playedPositions,id=>id===identifier);
    let shouldNotExecuteHandler = (cell!== undefined || gameStatus===true)
    
    return (<div className={colClass} identifier={identifier} onClick={shouldNotExecuteHandler ? ()=>{}:(event)=>playedTurn(event,identifier)}></div> );
}
 
export default Cell;