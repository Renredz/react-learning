import { useState } from 'react';

// A square is "X", "O" or empty. The | means "or" (a union type).
type SquareValue = "X" | "O" | null;

// A prop can be a function. "() => void" = takes nothing, returns nothing.
type SquareProps = { value: SquareValue; onSquareClick: () => void };

type BoardProps = {
  xIsNext: boolean;
  squares: SquareValue[];                          // an array of SquareValue
  onPlay: (nextSquares: SquareValue[]) => void;    // a function that takes the new board
};

function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }: BoardProps) {
  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
    return;
  }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square  value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square  value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square  value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square  value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square  value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square  value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square  value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square  value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square  value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  );
} 

export default function Game() {
  const [history, setHistory] = useState<SquareValue[][]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;  
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: SquareValue[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares: SquareValue[]): SquareValue {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// <Square value="1+1" />     // shows what? The string 1+1
// <Square value={"1+1"} />   // shows what? Also the string 1+1
// <Square value={1 + 1} />   // what does TypeScript say, and why?  The value of this, which is 2

// Why does handleClick use squares.slice() instead of changing squares directly? This makes a copy of the array so we still have the onld one and can see what it has been earlier and if any changes occured. 
// Why does the board’s state live in Game and not in each Square? States live in Game so that each componens stands alone and communicates with Game, which can communicate with each component without them having to communicate with each other. This makes bugs easier to avoid and a more structured code. 
// - Mostly right. The key point: Game needs to see all the squares to find a winner and keep the history. Sibling components can’t share state with each other, so the state moves up to their common parent, and the parent passes it down as props. React calls this lifting state up.
// What does key={move} do? key tracks which elements have been changed and links them to their respective move. Since moves are set and cannot be re-ordered, this is fine here. 