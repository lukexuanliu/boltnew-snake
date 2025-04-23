import React from 'react';
import { GameBoard } from './components/game/GameBoard';
import { Header } from './components/ui/Header';
import { Footer } from './components/ui/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-between">
      <Header />
      <main className="flex-1 flex items-center justify-center w-full">
        <GameBoard />
      </main>
      <Footer />
    </div>
  );
}

export default App;