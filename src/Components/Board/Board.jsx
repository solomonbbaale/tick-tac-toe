import React from 'react';
import Cell from '../Cell/Cell';

const Board = ({gameWidth,gameHeight,playedTurn,playedPositions,gameStatus}) => {

    const rows = Array(gameHeight).fill().map((_, i) => i+1);
    const cols = Array(gameWidth).fill().map((_,i)=>i+1);

    const BoardGrid = rows.map(r=> {
      let rowClass =  'row'
      rowClass = r!== gameHeight?`${rowClass}  border-b`:rowClass;
          return  (<div className={rowClass} key={'row'+r}>
          {cols.map(col=> {
            let colClass= 'col';
            colClass = col!== gameWidth?`${colClass}  border-r`:colClass;
            const key = 'col '+col+ r;
           return <Cell gameStatus={gameStatus} playedPositions={playedPositions}  colClass={colClass} key={key} identifier={key} playedTurn={playedTurn}></Cell>
          })}
          </div>);
       
    })
   
  return (<div className='container'>
          {BoardGrid}
          </div>)
}
 
export default Board;