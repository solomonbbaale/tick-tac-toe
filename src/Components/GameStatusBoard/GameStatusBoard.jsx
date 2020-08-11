import React from 'react';

const GameStatusBoard = (props) => {

    let {gameTitle,boardMessage} = props;

    return ( <div style={{textAlign:"center"}}>
                <h1>{gameTitle}</h1>
                <div>
                    <h2>
                    {boardMessage}
                    </h2>
                </div>
            </div> );
}
 
export default GameStatusBoard;