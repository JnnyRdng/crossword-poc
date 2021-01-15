
export const moveCellDown = (x, y, board, dimensions) => {
    const newIndex = getIndex(x, y + 1, dimensions.width);
    const nextCell = getCell(x, y + 1, board, dimensions);
    if (cellFilled(nextCell)) {
        document.getElementById(`cell_${newIndex}`).focus();
    }
}

export const moveCellRight = (x, y, board, dimensions) => {
    const newIndex = getIndex(x + 1, y, dimensions.width);
    const nextCell = getCell(x + 1, y, board, dimensions);
    if (cellFilled(nextCell)) {
        document.getElementById(`cell_${newIndex}`).focus();
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

export function cellFilled(val) {
    return val === undefined ? false : val.match(/[a-zA-Z]/) !== null;
}
export function cellEmpty(val) {
    return val === "." || val === undefined;
}
