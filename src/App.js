import React, { useEffect, useState } from 'react';
import GameBoard from './Components/Board/Board';
import _ from 'lodash';
import Cell from './Components/Cell/Cell';
import './App.css';

function App() {
  const gameWidth = 3;
  const gameHeight = 3;
  let [turn,setTurn]=useState(0);
  let Players = [{'name':"solomon",'id':1,'playerPiece':'x'},{'name':'ronnie','id':2,'playerPiece':'o'}];
  let [playedPositions,setPlayedPositions] = useState([]);
  let [gameStatus,setGameStatus] =useState('started');

  useEffect(()=>{console.log('turn changed')},[turn])
  
  useEffect(()=>{
    setTurn(1);
    setTurn(turn => turn = turn + 1);
  },[])
  
  let mouseOverCell = (event)=>{
    event.target.classList.toggle('Active');
  }

let playedTurn=(event,identifier)=>{
  let target = event.target;

  setPlayedPositions(previous=>[...previous,identifier]);

  let player = getCurrentPlayer(turn);

  event.target.innerText= player.playerPiece;

  setTurn(turn => turn = turn + 1);
}

let getCurrentPlayer=(turn)=>{
  let current = getCurrentTurn(turn);

  return _.find(Players,x=>x.id=== current);
}

let getCurrentTurn=(turn) => (turn%Players.length) === 0?1:2;
console.log(playedPositions)
return (
          <GameBoard playedPositions={playedPositions} playedTurn={playedTurn} gameHeight={gameHeight} gameWidth={gameWidth} mouseOverCell={mouseOverCell}></GameBoard>
  );
}

export default App;
