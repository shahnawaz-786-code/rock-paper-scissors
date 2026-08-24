import React from 'react';

export default function ChoiceButton({ choice, onSelect }) {
  return (
    <button className="choice-btn" onClick={() => onSelect(choice)}>
      <span className="emoji">{choice.emoji}</span>
      <span>{choice.name}</span>
    </button>
  );
}