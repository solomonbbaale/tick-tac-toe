import React, { useEffect, useState,Fragment} from 'react';
import GameBoard from './Components/Board/Board';
import _ from 'lodash';
import './App.css';
import GameStatusBoard from './Components/GameStatusBoard/GameStatusBoard';

function App() {
  const gameWidth = 3;
  const gameHeight = 3;
  const gameTitle = "Tick Tack 😮";
  const [winningPositions,setWinningPositions] = useState([[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]);
  const [turn,setTurn]=useState(0);
  const Players = [{'name':"Solomon",'id':1,'playerPiece':'x'},{'name':'Ronnie','id':2,'playerPiece':'o'}];
  const [gamePositions,setPositions] =  useState([]);
  const [playedPositions,setPlayedPositions] = useState([]);
  const [currentPlayer,setCurrentPlayer] = useState({});
  const [gameStarted,setGameStarted] = useState(false);
  const [gameStatus,setGameStatus] = useState(false);
  const [DashBoardMessage,setDashBoardMessage]=useState('About To start');

  useEffect(()=>
  { 
    setGameStarted(true);
    setTurn(1)
  },[]);

  useEffect(()=>{
    if(gameStatus){
    setDashBoardMessage("GAME OVER WINS "+currentPlayer.name.toUpperCase())
    }
  },
  [gameStatus]);

  useEffect(()=>{
  
    if(!gameStatus){
      const positions =  getPositions();
      setPositions(old=>[...old,...positions]);
      setCurrentPlayer(p=>getCurrentPlayer(turn));
      const title = `${currentPlayer.name}'s Turn`;
      setDashBoardMessage(title)
    }
  
  },[turn,gameStarted]);

  const mouseOverCell = (event)=>{
    event.target.classList.toggle('Active');
  }

  const shouldEndGame=(identifier)=>{

    const isGameOver=  setGameWinningStatus(identifier);

    if(isGameOver){

      setGameStatus(isGameOver);
    }

    return isGameOver;
  }

  const playedTurn=(event,identifier)=>{

      if(gameStatus) return;

      if(gamePositions.length>0){
      
      const target = event.target;

      setPlayedPositions(previous=>[...previous,identifier]);

      event.target.innerText= currentPlayer.playerPiece;

      setGameWinningStatus(identifier);

      setTurn(turn => turn = turn + 1);

      setCurrentPlayer(p=>getCurrentPlayer(turn));
    }
  }
  
  const getCurrentPlayer=(turn)=>{
    const current = getCurrentTurn(turn);

    return _.find(Players,x=>x.id=== current);
  }

  const setGameWinningStatus=(identifier)=>{

    if(gamePositions.length > 0 ){
        if(gameStarted){
          const playedPieceIndex = _.findIndex(gamePositions, p=>p.attributes['identifier'].value===identifier);
          const availableWinningCombinations = winningPositions.filter(combination=> combination.some(e=>e===playedPieceIndex));

            _.forEach(availableWinningCombinations,(combination)=>{
              const result =_.every(combination,(p)=>gamePositions[playedPieceIndex].innerText!==''&&gamePositions[playedPieceIndex].innerText===gamePositions[p].innerText);
                if(result){
                  setGameStatus(result);
                  setDashBoardMessage("GAME OVER WINS "+currentPlayer.name.toUpperCase());
                  return true;
                }
            });
        }

        return false;
    }

    return false;
}

const getPositions =  () => document.querySelectorAll('.col');

const getCurrentTurn=(turn) => turn!==0&&(turn%Players.length) === 0?2:1;

return (
  <Fragment>
   <GameStatusBoard gameTitle={gameTitle} boardMessage={DashBoardMessage}></GameStatusBoard>
   <GameBoard gameStatus={gameStatus} playedPositions={playedPositions} playedTurn={playedTurn} gameHeight={gameHeight} gameWidth={gameWidth} mouseOverCell={mouseOverCell}></GameBoard>
  </Fragment>

);

}

export default App;