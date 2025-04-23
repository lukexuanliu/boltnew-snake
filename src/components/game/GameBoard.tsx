import React from 'react';
import { useGameLoop } from '../../hooks/useGameLoop';
import { Play, Pause, RefreshCw } from 'lucide-react';

export const GameBoard: React.FC = () => {
  const { gameState, frameCount, startGame, pauseGame, resetGame } = useGameLoop();

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl flex flex-col items-center">
      <h2 className="text-3xl font-bold text-white mb-6">Snake Game</h2>
      <div className="bg-gray-700 rounded-md p-6 flex flex-col items-center justify-center">
        <div className="mb-4 flex items-center gap-4">
          <p className="text-green-400 text-xl">Frame: {frameCount}</p>
          <p className="text-yellow-400 text-xl">Score: {gameState.score}</p>
          <p className="text-blue-400 text-xl">High Score: {gameState.highScore}</p>
        </div>
        <div className="w-[400px] h-[400px] bg-gray-900 rounded-lg border-2 border-gray-600 relative">
          {/* Snake body segments */}
          {gameState.snake.map((segment, index) => (
            <div
              key={index}
              className={`absolute w-4 h-4 rounded-sm transition-all duration-100 ${
                index === 0 
                  ? 'bg-green-400' // Head
                  : 'bg-green-600' // Body
              }`}
              style={{
                left: `${segment.x * 16}px`,
                top: `${segment.y * 16}px`,
                transform: index === 0 ? `rotate(${
                  gameState.direction === 'UP' ? '-90deg' :
                  gameState.direction === 'DOWN' ? '90deg' :
                  gameState.direction === 'LEFT' ? '180deg' :
                  '0deg'
                })` : 'none',
              }}
            />
          ))}
          {/* Food */}
          <div
            className="absolute w-4 h-4 bg-red-500 rounded-full"
            style={{
              left: `${gameState.food.x * 16}px`,
              top: `${gameState.food.y * 16}px`,
            }}
          />
          {/* Game Over Overlay */}
          {gameState.isGameOver && (
            <div className="absolute inset-0 bg-black/75 flex items-center justify-center flex-col gap-4">
              <h3 className="text-3xl font-bold text-red-500">Game Over!</h3>
              <p className="text-xl text-white">Final Score: {gameState.score}</p>
              {gameState.score === gameState.highScore && (
                <p className="text-lg text-yellow-400">New High Score!</p>
              )}
              <div className="text-gray-300 text-sm mb-4">
                <p>Press 'R' to restart</p>
                <p>Press 'Space' to pause/resume</p>
              </div>
              <button 
                onClick={resetGame}
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-colors flex items-center gap-2"
              >
                <RefreshCw size={20} /> Play Again
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2 text-gray-300 text-sm mt-4">
          <p>• Use arrow keys or WASD to control the snake</p>
          <p>• Eat food to grow and earn points</p>
          <p>• Avoid hitting walls or yourself</p>
        </div>
      </div>
      <div className="mt-6 flex gap-4">
        {!gameState.isGameOver && (
          gameState.isPaused ? (
            <button 
              onClick={startGame}
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded transition-colors flex items-center gap-2"
            >
              <Play size={16} /> Start Game
            </button>
          ) : (
            <button 
              onClick={pauseGame}
              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded transition-colors flex items-center gap-2"
            >
              <Pause size={16} /> Pause
            </button>
          )
        )}
        <button 
          onClick={resetGame}
          className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded transition-colors flex items-center gap-2"
        >
          <RefreshCw size={16} /> Reset
        </button>
      </div>
    </div>
  );
};