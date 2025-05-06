import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Animacje
const drawLeft = keyframes`
  from { height: 0; }
  to { height: 100%; }
`;

const drawBottom = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const drawTop = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const drawRight = keyframes`
  from { height: 0; }
  to { height: 100%; }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

// Główny kontener
const Terminal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
`;

// Kontener z borderem
const Terminal__Border = styled.div`
  position: relative;
  width: 100%;
  border: 5px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  box-sizing: border-box;
  min-height: auto;
`;

// Style dla borderów
const Terminal__BorderLeft = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 1vmin;
  height: 0;
  background: white;
  animation: ${drawLeft} 1s forwards;
`;

const Terminal__BorderBottom = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1vmin;
  background: white;
  animation: ${drawBottom} 1s forwards;
`;

const Terminal__BorderTop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 1vmin;
  background: white;
  animation: ${drawTop} 1s 1s forwards;
`;

const Terminal__BorderRight = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 1vmin;
  height: 0;
  background: white;
  animation: ${drawRight} 1s 1s forwards;
`;

// Zawartość terminala
const Terminal__Content = styled.div`
  font-family: 'Courier New', monospace;
  font-weight: bold;
  color: white;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  font-size: calc(12px + 1.5vw);
  line-height: 1.5;

  @media (min-width: 768px) {
    white-space: pre-wrap;
    font-size: calc(16px + 1vw);
  }

  @media (max-width: 480px) {
    font-size: calc(10px + 2vw);
  }
`;

// Kursor (teraz miga cały czas)
const Terminal__Cursor = styled.span`
  animation: ${blink} 1s step-start infinite;
  color: white;
  font-weight: bold;
  margin-left: 0.3rem;
`;

const TerminalText = ({ 
  text, 
  charDelay = 70,
  startDelay = 0
  // Usunięto cursorBlinkDelay, bo kursor nie znika
}) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, charDelay);

    return () => clearInterval(interval);
  }, [text, charDelay]);

  return (
    <Terminal className="terminal">
      <Terminal__Border className="terminal__border">
        <Terminal__BorderLeft className="terminal__border-left" />
        <Terminal__BorderBottom className="terminal__border-bottom" />
        <Terminal__BorderTop className="terminal__border-top" />
        <Terminal__BorderRight className="terminal__border-right" />
        <Terminal__Content className="terminal__content">
          {displayedText}
          <Terminal__Cursor>|</Terminal__Cursor> {/* Kursor zawsze widoczny */}
        </Terminal__Content>
      </Terminal__Border>
    </Terminal>
  );
};

export default TerminalText;