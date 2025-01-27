
# [CMT Board Game](https://szludora.github.io/CMT-Table/)

This is a web-based implementation of the CMT (C, M, T) board game that runs in your browser. The game provides an interactive 5x5 grid where you can place the characters "C", "M", and "T" in a round-robin order. The goal of the game is to align three or more consecutive identical characters either horizontally, vertically, or diagonally. Once a line is formed, it changes color to indicate the alignment, with green for "C", blue for "M", and red for "T".

You can try out the [game here](https://szludora.github.io/CMT-Table/).

![cmtDark](https://github.com/user-attachments/assets/8d6e2cc5-8475-4b49-a943-c9b7f63961ce)
![cmtLight](https://github.com/user-attachments/assets/a3537466-d286-4c5a-815a-faeab7e11401)


## Features

- **Round-robin placement:** The game cycles between "C", "M", and "T" as you click on the cells.
- **Line detection:** Three or more identical characters aligned in a row, column, or diagonal will change color to indicate a line.
- **Score display:** Once the board is full, the game will display how many lines you have formed, or if you have no lines at all.
- **Reset button:** You can reset the game at any time to clear the board and start over.
- **Theme toggle:** Switch between different visual themes to customize your playing experience.
- **Snapshot/ Screenshot:** Capture the current state of the game with a screenshot functionality.
- **Sound effects:** Enjoy sound effects for different actions in the game, including:
  - Clicking on the cells.
  - Successful line formation (successful feedback).
  - Failed attempt (failed feedback).
  - Camera action sounds when taking a snapshot.
- **Enable/disable sounds:** You can turn the sound on or off using the sound icon.

## Installation

To run the game locally:

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/szludora/CMT-Table.git
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the game in your browser:
   - Press `o` in the terminal and press enter

### Testing

For testing purposes, you can use the `src/models/CMTModel.js` file, which contains test fields for verifying the success or failure of line formation. This helps to simplify the testing process of the game’s mechanics.

## Built With

- **Vite** + **React**
- **React Bootstrap** (for styling)
- **html2canvas** (for taking screenshots)

Enjoy the game, and feel free to contribute or report any issues!


