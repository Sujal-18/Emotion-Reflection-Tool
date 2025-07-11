import React, { useState } from 'react';
import axios from 'axios';
import EmotionResult from './components/EmotionResult';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import TextareaAutosize from 'react-textarea-autosize';
import './App.css';

const App: React.FC = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ emotion: string; confidence: number } | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await axios.post('http://localhost:8000/analyze', { text });
      setResult(response.data);
    } catch (err) {
      setError('Failed to analyze emotion. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider>
      <div className="container">
        <ThemeToggle />
        <h1>Emotion Reflection</h1>
        <form onSubmit={handleSubmit}>
          <TextareaAutosize
            minRows={3}
            placeholder="How are you feeling today?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault(); // prevent newline
                handleSubmit(e);    // manually submit
              }
            }}
            required
            className="textarea"
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Analyzing...' : 'Submit'}
          </button>
        </form>

        {error && <p className="error">{error}</p>}
        {result && <EmotionResult emotion={result.emotion} confidence={result.confidence} />}
      </div>
    </ThemeProvider>
  );
};

export default App;
