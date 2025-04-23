import { Position, Direction } from '../types/game';

export const GRID_SIZE = 25; // 400px / 16px per cell = 25 cells

export const getNextHeadPosition = (currentHead: Position, direction: Direction): Position => {
  switch (direction) {
    case 'UP':
      return { x: currentHead.x, y: currentHead.y - 1 };
    case 'DOWN':
      return { x: currentHead.x, y: currentHead.y + 1 };
    case 'LEFT':
      return { x: currentHead.x - 1, y: currentHead.y };
    case 'RIGHT':
      return { x: currentHead.x + 1, y: currentHead.y };
  }
};

export const moveSnake = (snake: Position[], direction: Direction, shouldGrow: boolean = false): Position[] => {
  const newHead = getNextHeadPosition(snake[0], direction);
  return shouldGrow ? [newHead, ...snake] : [newHead, ...snake.slice(0, -1)];
};

export const isPositionEqual = (pos1: Position, pos2: Position): boolean => {
  return pos1.x === pos2.x && pos1.y === pos2.y;
};

export const isPositionOccupied = (position: Position, snake: Position[]): boolean => {
  return snake.some(segment => isPositionEqual(segment, position));
};

export const generateFood = (snake: Position[]): Position => {
  let newFood: Position;
  do {
    newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    };
  } while (isPositionOccupied(newFood, snake));
  return newFood;
};

export const checkCollision = (head: Position, snake: Position[]): boolean => {
  // Check wall collision
  if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
    return true;
  }

  // Check self collision (skip the head)
  return snake.slice(1).some(segment => isPositionEqual(segment, head));
};