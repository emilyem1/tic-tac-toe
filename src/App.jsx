import { useState } from 'react';
import './App.css';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('x');
  const [winner, setWinner] = useState(null);

  function squareClick(id) {

    // If squares or winner !== null return
    if (squares[id] || winner) return;

    // Copy array
    const updatedSquares = squares.slice();

    // Current square updated with player
    updatedSquares[id] = player;

    // Update array
    setSquares(updatedSquares);

    if (checkWin(updatedSquares, player)) {
      setWinner(player);
    } else if (updatedSquares.every(square => square)) {
      setWinner('draw');
    } else {
      setPlayer(player === 'x' ? 'o' : 'x');
    }
  }

  function checkWin(squares, player) {

    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    return winningConditions.some(condition =>
      condition.every(index => squares[index] === player)
    );
  }

  // Update the h1:
  function renderStatus() {
    if (winner) {
      return winner === 'draw' ? "draw!" : `winner: ${winner}`;
    }
    return player
  }

  function reset() {
    setSquares(Array(9).fill(null));
    setPlayer('x')
    setWinner(null)
  }

  return (
    <>
      <div className='status'>
        <h1 className='current-player'>{renderStatus()}</h1>
        <button onClick={reset}>Reset</button>
      </div>
      <div className='board'>
        <div className='square' onClick={() => squareClick(0)}>{squares[0]}</div>
        <div className='square' onClick={() => squareClick(1)}>{squares[1]}</div>
        <div className='square' onClick={() => squareClick(2)}>{squares[2]}</div>
        <div className='square' onClick={() => squareClick(3)}>{squares[3]}</div>
        <div className='square' onClick={() => squareClick(4)}>{squares[4]}</div>
        <div className='square' onClick={() => squareClick(5)}>{squares[5]}</div>
        <div className='square' onClick={() => squareClick(6)}>{squares[6]}</div>
        <div className='square' onClick={() => squareClick(7)}>{squares[7]}</div>
        <div className='square' onClick={() => squareClick(8)}>{squares[8]}</div>
      </div>
    </>
  );
}

export default App;
