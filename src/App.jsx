import { useState } from "react"
import Player from "./Components/Player"
import GameBoard from "./Components/GameBoard"
function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="0" isActive={activePlayer === 'O'} />

          {/* <li>
            <span className="player">
              <span className="player-name">Player 2</span>
              <span className="player-symbol">0</span>
            </span>
            <button>Edit</button>
          </li> */}
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>
    </main>
  )
}

export default App
