# Snake Game

A classic Snake game built with React, TypeScript, and Tailwind CSS.

## Project Description

This is a modern implementation of the classic Snake game where players control a snake that grows longer as it consumes food. The game ends when the snake collides with the walls or itself.

## How to Run

1. Make sure you have Node.js installed on your system
2. Clone this repository
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```
5. Open your browser and navigate to the provided local URL (usually http://localhost:5173)

## Game Controls

- Arrow keys or WASD to control the snake
- Space to pause/resume the game
- R to restart the game after game over

## Project Structure

```
src/
├── components/     # React components
│   ├── game/       # Game-related components
│   └── ui/         # UI components
├── hooks/          # Custom React hooks
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
└── App.tsx         # Main application component
```