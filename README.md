# RSS Nonograms Project

## Description

In this project, I implemented a classic Nonograms puzzle game using HTML, CSS, and JavaScript. Nonograms is a puzzle game where players reveal a hidden picture based on numerical clues provided at the top and left sides of a grid.

## Features

1. **Dynamic HTML Generation**:
   - The game board is dynamically generated using JavaScript, with an initially empty HTML body.

2. **Responsive Design**:
   - The game design is adaptive for screens with a width of 500px and above, ensuring a responsive UI for different devices.

3. **Default Grid Size**:
   - The default grid size is 5x5, with logical numerical clues provided to help players solve the puzzle.

4. **Grid and Clues Division**:
   - Every 5 cells in rows and columns are divided by bold lines, and clues are separated from the game field by a bold line for clarity.

5. **Cell Interaction**:
   - Players can left-click to fill a cell (turn black) and left-click again to clear it (turn white).

6. **End Game Condition**:
   - Upon correctly solving the puzzle, a message "Great! You have solved the nonogram!" is displayed.
  
7. **Multiple Templates**:
   - Included at least 5 templates for the easy level (5x5) with an interface to select the desired puzzle template.

8. **Right-Click Functionality**:
   - Right-clicking a cell marks it with an 'X' (indicating a crossed-out cell) without triggering the context menu.

9. **Game Reset**:
   - A reset button clears the grid without reloading the page, retaining the current template and level.

10. **Game Duration**:
    - A stopwatch displays the game duration in the format XX:XX, starting from the first click on the grid. Upon winning, the message includes the time taken.

11. **Sound Effects**:
    - Sound effects are added for marking cells, crossing cells, clearing cells, and winning the game.

12. **Game State Saving**:
    - Implemented saving and continuing the game state using "Save game" and "Continue last game" buttons.

13. **Dark/Light Themes**:
    - Implemented theme switching between dark and light modes.

14. **Difficulty Levels**:
    - Added three difficulty levels: easy (5x5), medium (10x10), and hard (15x15), each with at least 5 templates.

15. **High Score Table**:
    - A high score table saves the latest 5 win results, sorted by time and includes puzzle details and completion time.

16. **Random Game**:
    - A "random game" button selects a random template and level for a new game.

17. **Solution Button**:
    - A "Solution" button fills the grid with the correct solution without marking it as a win.
