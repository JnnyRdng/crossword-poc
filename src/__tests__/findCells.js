import { render, screen } from '@testing-library/react';
import {
  moveCellDown,
  moveCellUp,
  moveCellRight,
  moveCellLeft,
  getCell,
  getCoords,
  getIndex,
  cellFilled,
  cellEmpty,
  getWordLength
} from "../helpers/findCells.js";

describe("Helper functions do the right things", () => {

  let x, y, board, dimensions;

  beforeEach(() => {
    x = 0;
    y = 0;
    board = "this.is.the.crossword.yay";
    dimensions = { width: 5, height: 5 };
  });

  test("sanity check", () => {
    expect(x).toStrictEqual(0);
    expect(y).toStrictEqual(0);
    expect(board).toStrictEqual("this.is.the.crossword.yay");
    expect(dimensions.width).toStrictEqual(5);
    expect(dimensions.height).toStrictEqual(5);
  });

  test("first cell is 't'", () => {
    const cell = getCell(x, y, board, dimensions);
    expect(cell).toStrictEqual("t");
  });
  test("last cell is 'y'", () => {
    x = y = 4;
    const cell = getCell(x, y, board, dimensions);
    expect(cell).toStrictEqual("y");
  });
  test("fifth cell is '.'", () => {
    x = 4;
    const cell = getCell(x, y, board, dimensions);
    expect(cell).toStrictEqual(".");
  });
  test("cell out of range returns undefined", () => {
    x = 5;
    const cell = getCell(x, y, board, dimensions);
    expect(cell).toBeUndefined();
  });

  test("first cell is filled", () => {
    const cell = getCell(x, y, board, dimensions);
    const filled = cellFilled(cell);
    expect(filled).toStrictEqual(true);
  });
  test("fifth cell is not filled", () => {
    x = 4;
    const cell = getCell(x, y, board, dimensions);
    const filled = cellFilled(cell);
    expect(filled).toStrictEqual(false);
  });
  test("out of range cell is not filled", () => {
    x = 5;
    const cell = getCell(x, y, board, dimensions);
    const filled = cellFilled(cell);
    expect(filled).toStrictEqual(false);
  });

  test("first cell is not empty", () => {
    const cell = getCell(x, y, board, dimensions);
    const empty = cellEmpty(cell);
    expect(empty).toStrictEqual(false);
  });
  test("fifth cell is empty", () => {
    x = 4;
    const cell = getCell(x, y, board, dimensions);
    const empty = cellEmpty(cell);
    expect(empty).toStrictEqual(true);
  });
  test("out of range cell is empty", () => {
    x = 5;
    const cell = getCell(x, y, board, dimensions);
    const empty = cellEmpty(cell);
    expect(empty).toStrictEqual(true);
  });

  test("get index 0 from coordinates 0,0", () => {
    const index = getIndex(x, y, dimensions);
    expect(index).toStrictEqual(0);
  });
  test("get index 8 from coordinates 3,1", () => {
    const index = getIndex(3, 1, dimensions);
    expect(index).toStrictEqual(8);
  });

  test("get coords 3,3 from index 12", () => {
    const coords = getCoords(12, dimensions);
    expect(coords).toStrictEqual({ x: 2, y: 2 });
  });
  test("get coords 4,3 from index 19", () => {
    const coords = getCoords(19, dimensions);
    expect(coords).toStrictEqual({ x: 4, y: 3 });
  });

  test("word length is correct length", () => {
    const word = getWordLength(0, "across", board, dimensions);
    expect(word.length).toStrictEqual(4);
  });
  test("word length returns word as array of letter objects", () => {
    const word = getWordLength(0, "down", board, dimensions);
    const test = [
      { index: 0, value: "t" },
      { index: 5, value: "i" },
      { index: 10, value: "e" },
      { index: 15, value: "s" },
      { index: 20, value: "d" },
    ];
    expect(word).toStrictEqual(test);
  });
  test("second letter of 7 across is 'r'", () => {
    const index = getIndex(2, 2, dimensions);
    const word = getWordLength(index, "across", board, dimensions);
    expect(word[1].value).toStrictEqual("r");
  });

  test("moveCellRight focuses cell index 1 from 0,0", () => {
    render(<input id="cell_1" />);
    moveCellRight(0, 0, board, dimensions);
    const textInput = screen.getByRole("textbox");
    expect(textInput).toStrictEqual(document.activeElement);
  });
  test("moveCellRight doesn't focus black cell", () => {
    render(<input id="cell_4" />);
    moveCellRight(3, 0, board, dimensions);
    const textInput = screen.getByRole("textbox");
    expect(textInput).not.toStrictEqual(document.activeElement);
  });
  test("moveCellLeft focuses cell index 0 from 1,0", () => {
    render(<input id="cell_0" />);
    moveCellLeft(1, 0, board, dimensions);
    const textInput = screen.getByRole("textbox");
    expect(textInput).toStrictEqual(document.activeElement);
  });
  test("moveCellLeft doesn't focus black cell", () => {
    render(<input id="cell_7" />);
    moveCellLeft(3, 1, board, dimensions);
    const textInput = screen.getByRole("textbox");
    expect(textInput).not.toStrictEqual(document.activeElement);
  });
  test("moveCellDown focuses cell index 5 from 0,0", () => {
    render(<input id="cell_5" />);
    moveCellDown(0, 0, board, dimensions);
    const textInput = screen.getByRole("textbox");
    expect(textInput).toStrictEqual(document.activeElement);
  });
  test("moveCellDown doesn't focus black cell", () => {
    render(<input id="cell_11" />);
    moveCellDown(1, 1, board, dimensions);
    const textInput = screen.getByRole("textbox");
    expect(textInput).not.toStrictEqual(document.activeElement);
  });
  test("moveCellUp focuses cell index 0 from 0,1", () => {
    render(<input id="cell_0" />);
    moveCellUp(0, 1, board, dimensions);
    const textInput = screen.getByRole("textbox");
    expect(textInput).toStrictEqual(document.activeElement);
  });
  test("moveCellUp doesn't focus black cell", () => {
    render(<input id="cell_7" />);
    moveCellUp(2, 2, board, dimensions);
    const textInput = screen.getByRole("textbox");
    expect(textInput).not.toStrictEqual(document.activeElement);
  });
});