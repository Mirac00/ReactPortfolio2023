import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

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

// Style dla borderów z poprawionymi opóźnieniami
const Terminal__BorderLeft = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 1vmin;
  height: 0;
  background: white;
  ${props => props.$show && css`animation: ${drawLeft} 1s forwards;`} /* Bez opóźnienia */
`;

const Terminal__BorderBottom = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1vmin;
  background: white;
  ${props => props.$show && css`animation: ${drawBottom} 1s forwards;`} /* Bez opóźnienia */
`;

const Terminal__BorderTop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 1vmin;
  background: white;
  ${props => props.$show && css`animation: ${drawTop} 1s 1s forwards;`} /* Opóźnienie 1s (czeka na lewy) */
`;

const Terminal__BorderRight = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 1vmin;
  height: 0;
  background: white;
  ${props => props.$show && css`animation: ${drawRight} 1s 1s forwards;`} /* Opóźnienie 1s (razem z górnym) */
`;

// Zawartość terminala
const Terminal__Content = styled.div`
  font-family: 'Courier New', monospace;
  font-weight: bold;
  color: white;
  text-align: center;
  white-space: pre-wrap;
  overflow: hidden;
  width: 100%;
  font-size: calc(12px + 1.5vw);
  line-height: 1.5;
  display: block;
  word-break: keep-all;
`;

// Kursor (blinker)
const Terminal__Cursor = styled.span`
  display: inline-block;
  width: 0.5em;
  height: 1em;
  background: white;
  animation: ${blink} 1s step-end infinite;
  vertical-align: middle;
  margin-left: 2px;
`;

const TerminalText = ({ 
  text, 
  charDelay = 70,
  startDelay = 0
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [needsTwoLines, setNeedsTwoLines] = useState(false);
  const [showBorders, setShowBorders] = useState(false);
  const [mainText, setMainText] = useState('');
  const [lastTwoWords, setLastTwoWords] = useState('');
  const contentRef = useRef(null);
  const terminalRef = useRef(null);
  const isInitialMount = useRef(true);
  const resizeTimeout = useRef(null);

  // Funkcja dzieląca tekst na główną część i ostatnie dwa słowa
  const splitText = (text) => {
    const words = text.trim().split(' ');
    if (words.length <= 2) return { main: '', last: text };
    
    const lastTwo = words.slice(-2).join(' ');
    const main = words.slice(0, -2).join(' ');
    
    return { main, last: lastTwo };
  };

  // Sprawdzanie czy tekst potrzebuje dwóch linii
  const checkTextWidth = () => {
    if (!contentRef.current || !terminalRef.current) return;

    // Tworzymy element do pomiaru
    const measureEl = document.createElement('div');
    measureEl.style.position = 'absolute';
    measureEl.style.visibility = 'hidden';
    measureEl.style.whiteSpace = 'nowrap';
    measureEl.style.fontFamily = "'Courier New', monospace";
    measureEl.style.fontWeight = 'bold';
    measureEl.style.fontSize = window.getComputedStyle(contentRef.current).fontSize;
    document.body.appendChild(measureEl);

    // Sprawdzamy pełną szerokość
    measureEl.textContent = displayedText + '|';
    const fullWidth = measureEl.offsetWidth;
    const terminalWidth = terminalRef.current.offsetWidth - 40;

    if (fullWidth <= terminalWidth) {
      setMainText(displayedText);
      setLastTwoWords('');
      setNeedsTwoLines(false);
    } else {
      const { main, last } = splitText(displayedText);
      
      // Sprawdzamy szerokość głównej części
      measureEl.textContent = main;
      const mainWidth = measureEl.offsetWidth;
      
      if (mainWidth <= terminalWidth) {
        setMainText(main);
        setLastTwoWords(last);
        setNeedsTwoLines(true);
      } else {
        setMainText(displayedText);
        setLastTwoWords('');
        setNeedsTwoLines(false);
      }
    }

    // Czyszczenie
    document.body.removeChild(measureEl);
  };

  // Efekt dla animacji tekstu
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        const newText = prev + text.charAt(index);
        return newText;
      });
      index++;
      if (index >= text.length) {
        clearInterval(interval);
        setShowBorders(true);
      }
    }, charDelay);

    return () => clearInterval(interval);
  }, [text, charDelay]);

  // Inicjalne sprawdzenie szerokości
  useLayoutEffect(() => {
    if (isInitialMount.current) {
      checkTextWidth();
      isInitialMount.current = false;
    }
  }, []);

  // Obsługa zmiany rozmiaru okna
  useEffect(() => {
    const handleResize = () => {
      clearTimeout(resizeTimeout.current);
      resizeTimeout.current = setTimeout(() => {
        checkTextWidth();
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout.current);
    };
  }, []);

  // Sprawdzanie przy zmianie tekstu
  useLayoutEffect(() => {
    if (displayedText.length > 0) {
      checkTextWidth();
    }
  }, [displayedText]);

  return (
    <Terminal className="terminal" ref={terminalRef}>
      <Terminal__Border className="terminal__border">
        <Terminal__BorderLeft className="terminal__border-left" $show={showBorders} />
        <Terminal__BorderBottom className="terminal__border-bottom" $show={showBorders} />
        <Terminal__BorderTop className="terminal__border-top" $show={showBorders} />
        <Terminal__BorderRight className="terminal__border-right" $show={showBorders} />
        <Terminal__Content 
          className="terminal__content" 
          ref={contentRef}
        >
          {mainText}
          {lastTwoWords && (
            <>
              <br />
              {lastTwoWords}
            </>
          )}
          <Terminal__Cursor />
        </Terminal__Content>
      </Terminal__Border>
    </Terminal>
  );
};

export default TerminalText;