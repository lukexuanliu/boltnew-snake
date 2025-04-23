# Snake Game

A classic Snake game built with React, TypeScript, and Tailwind CSS.

## Features

- 🎮 Classic Snake gameplay mechanics
- 🎯 Score tracking with high score persistence
- 🔄 Smooth animations and responsive controls
- ⌨️ Multiple control schemes (Arrow keys or WASD)
- ⏸️ Pause/Resume functionality
- 🏆 High score system with local storage
- 💥 Collision detection (walls and self)
- 🎨 Modern, responsive UI with Tailwind CSS

## Project Description

This is a modern implementation of the classic Snake game where players control a snake that grows longer as it consumes food. The game features wall and self-collision detection, score tracking, and a persistent high score system.

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
- R to restart after game over

## Game Rules

1. Control the snake to eat the red food dots
2. Each food eaten increases your score and makes the snake longer
3. Game ends if the snake:
   - Hits the walls
   - Collides with itself
4. Try to beat your high score!

## Project Structure

```
src/
├── components/     # React components
│   ├── game/      # Game-related components
│   └── ui/        # UI components
├── hooks/         # Custom React hooks
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
└── App.tsx        # Main application component
```

## Technical Details

- Built with React 18 and TypeScript
- Styled with Tailwind CSS
- Uses React hooks for state management
- Implements game loop using requestAnimationFrame
- Persists high scores using localStorage

## Project Development Prompt

This project was developed following a modular approach guided by the following O4-mini generated prompt:

### Module 1: Basic Setup
- Set up React project with TypeScript and Tailwind
- Create basic game board component
- Implement snake rendering

### Module 2: Snake Movement
- Add directional movement
- Implement continuous motion
- Handle keyboard input

### Module 3: Food Generation
- Add food placement logic
- Implement snake growth
- Handle food collection

### Module 4: Game Loop
- Create game loop with RAF
- Add pause/resume functionality
- Implement speed control

### Module 5: Score System
- Add scoring mechanism
- Implement high score tracking
- Add score display

### Module 6: Collision Detection
- Implement wall collision
- Add self-collision detection
- Handle game over state

### Module 7: Scoring & Restart
- Display final score
- Add restart functionality
- Show game over screen

### Module 8: Polish & Refinement
- Add visual feedback
- Implement smooth animations
- Add sound effects
- Polish UI/UX