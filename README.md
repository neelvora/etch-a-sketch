# etch-a-sketch

A browser version of the etch-a-sketch toy. Plain HTML, CSS, and JavaScript, no build step: open `index.html`.

The board is a grid of divs that `makeGrid()` rebuilds whenever the slider moves, anywhere from 1x1 to 64x64, starting at 16x16. You draw on mouseover. Color mode paints with the color picker, randomize mode picks a random hue per cell, eraser paints white. Two more buttons toggle the grid lines and clear the board.

`script.js` still has `testIt()`, a console.log I used while wiring up the event listeners, and an empty `setGridSize()` that nothing calls.
