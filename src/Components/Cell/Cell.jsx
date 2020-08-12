import React from 'react';
import _ from 'lodash';

const Cell = ({colClass,playedTurn,identifier,playedPositions,gameStatus}) => {
    const cell = _.find(playedPositions,id=>id===identifier);
    const shouldNotExecuteHandler = (cell!== undefined || gameStatus===true)
    
    return (<div className={colClass} identifier={identifier} onClick={shouldNotExecuteHandler ? ()=>{}:(event)=>playedTurn(event,identifier)}></div> );
}
 
export default Cell;