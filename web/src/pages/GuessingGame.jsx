// src/components/GuessGame.jsx
import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:3001/api/guesses';

export default function GuessGame() {
  const [guess, setGuess] = useState('');
  const [confidence, setConfidence] = useState('');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(setHistory);
  }, []);

  const handleSubmit = async () => {
    const question = "What % of Earth's water is freshwater?";
    const actual = 2.5;
    const correct = Math.abs(Number(guess) - actual) < 1;

    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, guess, confidence, actual, correct }),
    });
    const [saved] = await res.json();
    setHistory([...history, saved]);
    setGuess('');
    setConfidence('');
  };

  return (
    <div>
      <h2>What % of Earth's water is freshwater?</h2>
      <input value={guess} onChange={e => setGuess(e.target.value)} placeholder="Your guess (%)" />
      <input value={confidence} onChange={e => setConfidence(e.target.value)} placeholder="Confidence (0-100)" />
      <button onClick={handleSubmit}>Submit</button>

      <ul>
        {history.map(h => (
          <li key={h.id}>
            <b> {h.question} </b>
            Guessed {h.guess} (confidence {h.confidence}) — {h.is_correct ? '✅' : '❌'}
          </li>
        ))}
      </ul>
    </div>
  );
}