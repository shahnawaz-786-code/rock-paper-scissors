import React, { useState } from 'react';
import { CHOICES } from './constants/choices';
import ScoreBoard from './components/ScoreBoard';
import ChoiceButton from './components/ChoiceButton';
import ResultDisplay from './components/ResultDisplay';
import './App.css';

export default function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [score, setScore] = useState({ player: 0, computer: 0, ties: 0 });

  const handlePlay = (choice) => {
    const randomPick = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    
    setUserChoice(choice);
    setComputerChoice(randomPick);

    if (choice.id === randomPick.id) {
      setResult("It's a draw!");
      setScore((prev) => ({ ...prev, ties: prev.ties + 1 }));
    } else if (choice.beats === randomPick.id) {
      setResult('You Win! 🎉');
      setScore((prev) => ({ ...prev, player: prev.player + 1 }));
    } else {
      setResult('Computer Wins! 💻');
      setScore((prev) => ({ ...prev, computer: prev.computer + 1 }));
    }
  };

  const handleReset = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult('');
    setScore({ player: 0, computer: 0, ties: 0 });
  };

  return (
    <main className="app-container">
      <h1>Rock Paper Scissors</h1>
      
      <ScoreBoard score={score} />

      <div className="buttons-group">
        {CHOICES.map((choice) => (
          <ChoiceButton key={choice.id} choice={choice} onSelect={handlePlay} />
        ))}
      </div>

      <ResultDisplay 
        userChoice={userChoice} 
        computerChoice={computerChoice} 
        result={result} 
      />

      <button className="reset-btn" onClick={handleReset}>
        Reset Score
      </button>
    </main>
  );
}