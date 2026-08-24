import React from 'react';

export default function ScoreBoard({ score }) {
  return (
    <div className="scoreboard">
      <div className="score-card">
        <span>Player</span>
        <strong>{score.player}</strong>
      </div>
      <div className="score-card">
        <span>Ties</span>
        <strong>{score.ties}</strong>
      </div>
      <div className="score-card">
        <span>Computer</span>
        <strong>{score.computer}</strong>
      </div>
    </div>
  );
}