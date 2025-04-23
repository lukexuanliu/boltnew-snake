import React from 'react';
import { TowerControl as GameController } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-6 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GameController className="h-6 w-6 text-green-400" />
          <h1 className="text-xl font-bold">Snake Game</h1>
        </div>
        <nav>
          <ul className="flex gap-4">
            <li>
              <button className="hover:text-green-400 transition-colors">
                How to Play
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};