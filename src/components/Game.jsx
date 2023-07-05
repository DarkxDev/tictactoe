import { useState } from 'react';
import Board from './Board';
import calculateWinner from '../calculateWinner';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleOnClick = (value) => {
    const currentBoard = [...board];
    if (winner || currentBoard[value]) return;
    currentBoard[value] = xIsNext ? 'X' : 'O';

    setBoard(currentBoard);
    setXisNext(!xIsNext);
  };

  const handleNewGame = () => {
    setBoard(Array(9).fill(null));
    setXisNext(true);
  };

  return (
    <div>
      <Board squares={board} onClick={handleOnClick} />
      <div>
        <p>
          {winner ? `${winner} wins!` : `Next Player: ${xIsNext ? 'X' : 'O'}`}
        </p>
        <button onClick={handleNewGame}>New Game</button>
      </div>
    </div>
  );
};

export default Game;
