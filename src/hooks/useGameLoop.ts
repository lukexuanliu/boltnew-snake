import { useEffect, useRef, useState, useCallback } from 'react';
import { GameState, Direction, Position } from '../types/game';
import { useGameInput } from './useGameInput';
import { moveSnake, GRID_SIZE, isPositionEqual, generateFood, getNextHeadPosition, checkCollision } from '../utils/gameUtils';

const INITIAL_STATE: GameState = {
  snake: [
    { x: 10, y: 10 }, // Head
    { x: 9, y: 10 },  // Body
    { x: 8, y: 10 }   // Tail
  ],
  food: { x: 15, y: 15 },
  direction: 'RIGHT',
  score: 0,
  highScore: 0,
  isGameOver: false,
  isPaused: true
};

const GAME_SPEED = 8; // frames per second
const POINTS_PER_FOOD = 10;

export const useGameLoop = () => {
  const [gameState, setGameState] = useState<GameState>(() => ({
    ...INITIAL_STATE,
    highScore: parseInt(localStorage.getItem('snakeHighScore') || '0')
  }));
  const [frameCount, setFrameCount] = useState(0);
  const frameRef = useRef<number>();
  const lastUpdateTime = useRef<number>(0);

  const handleDirectionChange = useCallback((newDirection: Direction) => {
    setGameState(prev => ({ ...prev, direction: newDirection }));
  }, []);

  const togglePause = useCallback(() => {
    setGameState(prev => {
      if (prev.isGameOver) return prev;
      return { ...prev, isPaused: !prev.isPaused };
    });
  }, []);

  const resetGame = useCallback(() => {
    setGameState(prev => ({
      ...INITIAL_STATE,
      highScore: prev.highScore
    }));
    setFrameCount(0);
    lastUpdateTime.current = 0;
  }, []);

  useGameInput(
    gameState.direction,
    handleDirectionChange,
    !gameState.isPaused && !gameState.isGameOver,
    resetGame,
    togglePause
  );

  const update = useCallback((timestamp: number) => {
    const elapsed = timestamp - lastUpdateTime.current;
    const frameInterval = 1000 / GAME_SPEED;

    if (elapsed > frameInterval) {
      setFrameCount(prev => prev + 1);
      setGameState(prevState => {
        const nextHead = getNextHeadPosition(prevState.snake[0], prevState.direction);
        
        // Check for collisions
        if (checkCollision(nextHead, prevState.snake)) {
          const newHighScore = Math.max(prevState.score, prevState.highScore);
          localStorage.setItem('snakeHighScore', newHighScore.toString());
          return { 
            ...prevState, 
            isGameOver: true, 
            isPaused: true,
            highScore: newHighScore
          };
        }

        const willEatFood = isPositionEqual(nextHead, prevState.food);
        const newSnake = moveSnake(prevState.snake, prevState.direction, willEatFood);
        const newFood = willEatFood ? generateFood(newSnake) : prevState.food;
        const newScore = willEatFood ? prevState.score + POINTS_PER_FOOD : prevState.score;

        return {
          ...prevState,
          snake: newSnake,
          food: newFood,
          score: newScore
        };
      });
      lastUpdateTime.current = timestamp;
    }
  }, []);

  const startGame = () => {
    setGameState(prev => ({ ...prev, isPaused: false }));
  };

  const pauseGame = () => {
    setGameState(prev => ({ ...prev, isPaused: true }));
  };

  useEffect(() => {
    if (gameState.isPaused || gameState.isGameOver) {
      return;
    }

    const loop = (timestamp: number) => {
      update(timestamp);
      frameRef.current = requestAnimationFrame(loop);
    };

    frameRef.current = requestAnimationFrame(loop);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [gameState.isPaused, gameState.isGameOver, update]);

  return {
    gameState,
    frameCount,
    startGame,
    pauseGame,
    resetGame
  };
};