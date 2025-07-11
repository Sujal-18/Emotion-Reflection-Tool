import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import './EmotionResult.css';

interface Props {
  emotion: string;
  confidence: number;
}

const EmotionResult: React.FC<Props> = ({ emotion, confidence }) => {
  const [text] = useTypewriter({
    words: [`Detected Emotion: ${emotion}\nConfidence: ${(confidence * 100).toFixed(2)}%`],
    loop: false,
    typeSpeed: 60,
    deleteSpeed: 0,
  });

  return (
    <div className="result-card">
      <h2>Emotion Analysis</h2>
      <p style={{ whiteSpace: 'pre-line' }}>{text}</p>

    </div>
  );
};

export default EmotionResult;
