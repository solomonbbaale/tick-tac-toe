import React,{useEffect,useState} from 'react';
import Cell from '../Cell/Cell';

const Board = ({gameWidth,gameHeight,mouseOverCell,playedTurn,playedPositions}) => {

    let rows = Array(gameHeight).fill().map((_, i) => i+1);
    let cols = Array(gameWidth).fill().map((_,i)=>i+1);

    let BoardGrid = rows.map(r=> {
      let rowClass =  'row'
      rowClass = r!== gameHeight?`${rowClass}  border-b`:rowClass;
          return  (<div className={rowClass} key={'row'+r}>
          {cols.map(col=> {
            let colClass= 'col';
            colClass = col!== gameWidth?`${colClass}  border-r`:colClass;
           return <Cell playedPositions={playedPositions} colClass={colClass} key={'col '+col+ r} identifier={'col '+col + r} playedTurn={playedTurn}></Cell>
          })}
          </div>);
       
    })
   
  return (<div className='container'>
          {BoardGrid}
          </div>)
}
 
export default Board;