import React from 'react';

export default function ResultDisplay({ userChoice, computerChoice, result }) {
  if (!userChoice || !computerChoice) return null;

  return (
    <div className="result-card">
      <div className="hands">
        <div>
          <p>You</p>
          <span className="large-emoji">{userChoice.emoji}</span>
        </div>
        <div>
          <p>Computer</p>
          <span className="large-emoji">{computerChoice.emoji}</span>
        </div>
      </div>
      <h2 className="result-text">{result}</h2>
    </div>
  );
}