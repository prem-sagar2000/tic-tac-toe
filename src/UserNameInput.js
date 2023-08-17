import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function UserNameInput({App}) {
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const navigate = useNavigate();

  const handleStartGame = () => {
    if (player1Name && player2Name) {
        const player1Initial = player1Name.trim()[0].toUpperCase();
        const player2Initial = player2Name.trim()[0].toUpperCase();
        navigate('/app', { state: { player1Initial, player2Initial } });
        
    }
  };

  return (
    <div>
      <h2>Enter Player Names</h2>
      <div>
        <input
          type="text"
          placeholder="Player 1"
          value={player1Name}
          onChange={(e) => setPlayer1Name(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Player 2"
          value={player2Name}
          onChange={(e) => setPlayer2Name(e.target.value)}
        />
      </div>
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
}

export default UserNameInput;
