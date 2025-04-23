import { useEffect, useCallback } from 'react';
import { Direction } from '../types/game';

const ARROW_KEYS: Record<string, Direction> = {
  'ArrowUp': 'UP',
  'ArrowDown': 'DOWN',
  'ArrowLeft': 'LEFT',
  'ArrowRight': 'RIGHT',
};

const WASD_KEYS: Record<string, Direction> = {
  'w': 'UP',
  's': 'DOWN',
  'a': 'LEFT',
  'd': 'RIGHT',
};

const OPPOSITE_DIRECTIONS: Record<Direction, Direction> = {
  'UP': 'DOWN',
  'DOWN': 'UP',
  'LEFT': 'RIGHT',
  'RIGHT': 'LEFT',
};

export const useGameInput = (
  currentDirection: Direction,
  onDirectionChange: (newDirection: Direction) => void,
  isGameActive: boolean,
  onRestart?: () => void,
  onPauseToggle?: () => void
) => {
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    const key = event.key.toLowerCase();

    // Handle restart with 'R' key
    if (key === 'r') {
      onRestart?.();
      return;
    }

    // Handle pause with space bar
    if (key === ' ') {
      event.preventDefault();
      onPauseToggle?.();
      return;
    }

    if (!isGameActive) return;

    const newDirection = ARROW_KEYS[event.key] || WASD_KEYS[key];
    if (newDirection && OPPOSITE_DIRECTIONS[newDirection] !== currentDirection) {
      onDirectionChange(newDirection);
    }
  }, [currentDirection, onDirectionChange, isGameActive, onRestart, onPauseToggle]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);
};