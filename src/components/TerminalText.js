import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Animacje
const drawHorizontal = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const drawVertical = keyframes`
  from { height: 0; }
  to { height: 100%; }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

// Kontenery
const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const SideContainer = styled.div`
  flex: 1;
  position: relative;
`;

const TerminalBorder = styled.div`
  position: relative;
  border: 5px solid transparent;
  padding: 1.5rem;
  box-sizing: border-box;
  min-width: ${({ $measuredWidth }) => $measuredWidth ? `${$measuredWidth}px` : 'auto'};
  margin: 0 auto;
`;

// Elementy ramki
const BorderLeft = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 1vmin;
  height: 0;
  background: white;
  ${({ $animate }) =>
    $animate &&
    css`
      animation: ${drawVertical} 1s forwards;
    `}
`;

const BorderBottom = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1vmin;
  background: white;
  ${({ $animate }) =>
    $animate &&
    css`
      animation: ${drawHorizontal} 1s forwards;
    `}
`;

const BorderTop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 1vmin;
  background: white;
  ${({ $animate }) =>
    $animate &&
    css`
      animation: ${drawHorizontal} 1s 1s forwards;
    `}
`;

const BorderRight = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 1vmin;
  height: 0;
  background: white;
  ${({ $animate }) =>
    $animate &&
    css`
      animation: ${drawVertical} 1s 1s forwards;
    `}
`;

// Zawartość terminala
const TerminalContent = styled.div`
  font-family: 'Courier New', monospace;
  font-weight: bold;
  color: white;
  text-align: left;
  font-size: calc(12px + 1.5vw);
  line-height: 1.5;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  width: max-content;
  max-width: 100%;

  @media (max-width: 434px) {
    flex-direction: column;
    min-height: 3em;
    width: 100%;
  }
`;

const TextPart = styled.span`
  white-space: nowrap;
  padding-right: 0.5em;
`;

const Cursor = styled.span`
  display: inline-block;
  width: 0.4em;
  height: 1em;
  background: white;
  animation: ${blink} 1s step-end infinite;
  vertical-align: middle;
  margin-left: 3px;
`;

const TerminalText = ({ part1 = "Hello, I'm", part2 = 'Sławek Zając', animate = true }) => {
  const [displayedPart1, setDisplayedPart1] = useState('');
  const [displayedPart2, setDisplayedPart2] = useState('');
  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursor2, setShowCursor2] = useState(false);
  const [showBorders, setShowBorders] = useState(false);
  const [measuredWidth, setMeasuredWidth] = useState(0);
  const hiddenRef = useRef(null);

  // Pomiar szerokości tekstu
  useLayoutEffect(() => {
    if (hiddenRef.current) {
      const width = hiddenRef.current.offsetWidth;
      setMeasuredWidth(width);
    }
  }, []);

  useEffect(() => {
    let part1Interval;
    let part2Interval;
    let part1Index = 0;
    let part2Index = 0;
    let initialDelay;

    const startAnimation = () => {
      initialDelay = setTimeout(() => {
        animatePart1();
      }, 1500);
    };

    const animatePart1 = () => {
      part1Interval = setInterval(() => {
        setDisplayedPart1((prev) => prev + part1.charAt(part1Index));
        part1Index++;
        if (part1Index >= part1.length) {
          clearInterval(part1Interval);
          setTimeout(() => {
            setShowCursor1(false);
            setShowCursor2(true);

            const isMobile = window.innerWidth <= 434;
            const delay = isMobile ? 1500 : 0;

            setTimeout(() => {
              animatePart2();
            }, delay);
          }, 500);
        }
      }, 55); // 2x szybsza animacja tekstu
    };

    const animatePart2 = () => {
      part2Interval = setInterval(() => {
        setDisplayedPart2((prev) => prev + part2.charAt(part2Index));
        part2Index++;
        if (part2Index >= part2.length) {
          clearInterval(part2Interval);
          setShowBorders(true);
        }
      }, 55); // 2x szybsza animacja tekstu
    };

    startAnimation();

    return () => {
      clearTimeout(initialDelay);
      clearInterval(part1Interval);
      clearInterval(part2Interval);
    };
  }, [part1, part2]);

  return (
    <Wrapper>
      {/* Ukryty element do pomiaru */}
      <div
        ref={hiddenRef}
        style={{
          position: 'absolute',
          visibility: 'hidden',
          whiteSpace: 'nowrap',
          fontFamily: "'Courier New', monospace",
          fontSize: 'calc(12px + 1.5vw)',
          paddingRight: '0.5em',
        }}
      >
        {part1} {part2}
      </div>

      <SideContainer />
      <TerminalBorder $measuredWidth={measuredWidth}>
        <BorderLeft $animate={animate && showBorders} />
        <BorderBottom $animate={animate && showBorders} />
        <BorderTop $animate={animate && showBorders} />
        <BorderRight $animate={animate && showBorders} />
        <TerminalContent>
          <TextPart>
            {displayedPart1}
            {showCursor1 && <Cursor />}
          </TextPart>
          <TextPart>
            {displayedPart2}
            {showCursor2 && <Cursor />}
          </TextPart>
        </TerminalContent>
      </TerminalBorder>
      <SideContainer />
    </Wrapper>
  );
};

export default TerminalText;
