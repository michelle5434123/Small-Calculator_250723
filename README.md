# 🧮 Small Calculator_0723
It allows users to click number and operator buttons to perform simple arithmetic calculations. When the = button is clicked, the expression is evaluated and the result is displayed.


## Features
- Buttons for digits `0–9`
- Arithmetic operators: `+`, `-`, `*`, `/`
- `=` button to evaluate the expression
- Dynamic creation of buttons using JavaScript
- Input validation and error handling with `try-catch`


## How It Works
- **Dynamic Button Creation**: JavaScript loops through arrays to create number and operator buttons dynamically. No manual HTML buttons are written.
- **User Input Collection**: Each button press adds a number or operator to a `calculating[]` array, which stores the full expression in sequence.
- **Display Update**: Each press updates the display so the user sees the expression they're building.
- **Evaluation**: When `=` is clicked:
  - The array is joined into a string (e.g., `["1", "+", "2"]` → `"1+2"`).
  - The expression is evaluated using `eval()`.
  - The result is shown on screen.
  - Errors are caught and shown as `"Error"`.
