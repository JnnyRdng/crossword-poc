export const moveCellUp = (x, y, board, dimensions) => {
  const newIndex = getIndex(x, y - 1, dimensions.width);
  const nextCell = getCell(x, y - 1, board, dimensions);
  focusCell(nextCell, newIndex);
}

export const moveCellDown = (x, y, board, dimensions) => {
  const newIndex = getIndex(x, y + 1, dimensions.width);
  const nextCell = getCell(x, y + 1, board, dimensions);
  focusCell(nextCell, newIndex);
}

export const moveCellLeft = (x, y, board, dimensions) => {
  const newIndex = getIndex(x - 1, y, dimensions.width);
  const nextCell = getCell(x - 1, y, board, dimensions);
  focusCell(nextCell, newIndex);
}

export const moveCellRight = (x, y, board, dimensions) => {
  const newIndex = getIndex(x + 1, y, dimensions.width);
  const nextCell = getCell(x + 1, y, board, dimensions);
  focusCell(nextCell, newIndex);
}

const focusCell = (cell, index) => {
  if (cellFilled(cell)) {
    document.getElementById(`cell_${index}`).focus();
  }
}

export function getCell(x, y, board, dimensions) {
  if (x >= dimensions.width || y >= dimensions.height || x < 0 || y < 0) {
    return undefined;
  }
  const index = (dimensions.width * y) + x;
  return board[index];
}
export function getIndex(x, y, width) {
  return (width * y) + x;
}

export function getCoords(index, dimensions) {
  const x = index % dimensions.width;
  const y = (index - x) / dimensions.height;
  return { x: x, y: y };
}

export function cellFilled(val) {
  return val === undefined ? false : val.match(/[a-zA-Z\s]/) !== null;
}
export function cellEmpty(val) {
  return val === "." || val === undefined;
}

export const getWordLength = (index, dir, board, dimensions) => {
  let count = [];
  let current = { value: board[index], index: index };
  const coords = getCoords(index, dimensions);
  let i = 1;
  while (current.value !== "." && current.value !== undefined) {
    count.push(current);
    if (i > Math.max(dimensions.width, dimensions.height)) {
      break;
    }
    if (dir === "across") {
      current = {
        value: getCell(coords.x + i, coords.y, board, dimensions),
        index: getIndex(coords.x + i, coords.y, dimensions.width)
      };
    } else {
      current = {
        value: getCell(coords.x, coords.y + i, board, dimensions),
        index: getIndex(coords.x, coords.y + i, dimensions.width)
      };
    }
    i++;
  }
  return count;
}
