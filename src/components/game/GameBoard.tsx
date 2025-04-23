import React from 'react';

export const GameBoard: React.FC = () => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl flex flex-col items-center">
      <h2 className="text-3xl font-bold text-white mb-6">Snake Game</h2>
      <div className="bg-gray-700 rounded-md p-6 flex flex-col items-center justify-center">
        <p className="text-green-400 text-xl mb-4">Hello, Snake World!</p>
        <p className="text-white mb-6">
          The game board will appear here in the next module.
        </p>
        <div className="flex flex-col gap-2 text-gray-300 text-sm">
          <p>• Use arrow keys or WASD to control the snake</p>
          <p>• Eat food to grow and earn points</p>
          <p>• Avoid hitting walls or yourself</p>
        </div>
      </div>
      <div className="mt-6 flex gap-4">
        <button 
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded transition-colors"
          disabled
        >
          Start Game
        </button>
      </div>
    </div>
  );
};