# Snake Game

A classic Snake game built with React, TypeScript, and Tailwind CSS.
Built via Bolt.new, with step by step prompts prepared by o4-mini: see below.

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

'''
**Project:** Snake Game (functional incremental spec)

You are an AI coding agent. For each module below, generate code, tests, and minimal documentation so that it’s verifiable, then await confirmation before moving to the next module. You may choose any language, framework, or tools you like.

---

### Module 1: Project Bootstrap  
- **Goal:** Create a runnable project scaffold.  
- **Deliverables:**  
  1. Project folder structure with clear entry points (e.g. a README, source folder, test folder).  
  2. A “Hello, world” output in whatever form you choose (CLI print, browser page, etc.) that proves the scaffold works.  
  3. Instructions in the README for running the project.  

*After Module 1 succeeds, proceed to Module 2.*

---

### Module 2: Game Loop  
- **Goal:** Implement a continuous update/render loop.  
- **Deliverables:**  
  1. Initialization of game state.  
  2. A recurring loop (e.g. `update()` → `render()` → repeat) at a fixed or configurable interval.  
  3. A visual or logged indicator each cycle (e.g. frame count or timestamp).  

*Await confirmation before Module 3.*

---

### Module 3: Input Handling  
- **Goal:** Capture user direction commands.  
- **Deliverables:**  
  1. Detect four directional inputs (up/down/left/right).  
  2. Prevent immediate 180° reversals.  
  3. Log or display the current chosen direction.  

*Await confirmation before Module 4.*

---

### Module 4: Snake Representation & Movement  
- **Goal:** Model the snake and move it each tick.  
- **Deliverables:**  
  1. Data structure for the snake’s segments.  
  2. Movement logic that shifts head and body per the current direction.  
  3. Visual or logged proof of movement over time.  

*Await confirmation before Module 5.*

---

### Module 5: Food Spawning & Consumption  
- **Goal:** Place consumable items and grow the snake.  
- **Deliverables:**  
  1. Randomly spawn a single “food” in an unoccupied location.  
  2. Detect when the snake’s head reaches the food.  
  3. Grow the snake by one segment and respawn food.  
  4. Proof via visual change or log.  

*Await confirmation before Module 6.*

---

### Module 6: Collision Detection  
- **Goal:** End the game on wall or self‐collision.  
- **Deliverables:**  
  1. Detect when the snake crosses the play boundary or intersects itself.  
  2. Trigger a clear “Game Over” state.  
  3. Proof via UI or log.  

*Await confirmation before Module 7.*

---

### Module 7: Scoring & Restart  
- **Goal:** Track score and allow restart.  
- **Deliverables:**  
  1. Score increments for each food eaten.  
  2. Display score and “Press key to restart.”  
  3. Reset the game on input.  

*Await confirmation before Module 8.*

---

### Module 8 (Optional): Persistence & Extras  
- **Goal:** Add high‐score storage or difficulty scaling.  
- **Deliverables:**  
  1. Save/load high score.  
  2. Increase speed after X foods.  
  3. Any extra polish.  

---

**Instructions:**  
- Only implement one module at a time.  
- After each module, provide a clear “how to run” and simple proof.  
- Do **not** proceed until each step is verified.

'''
