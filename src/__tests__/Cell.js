import { render, screen } from '@testing-library/react';
import Cell from '../Components/Cell';

describe("cell renders", () => {
  let cell, x, y;
  let number, value, index, handler, wordDir, direction, setDirection, dimensions, demo, board;

  beforeEach(() => {
    x = 0;
    y = 0;
    board = "this.is.the.crossword.yay";
    dimensions = { width: 5, height: 5 };
    number = 1;
    value = "t";
    index = 0;
    handler = () => { return true }
    wordDir = "both";
    direction = "across";
    setDirection = () => { return true }
    demo = false;

    render(<Cell number={number} value={value} index={index} handler={handler} wordDir={wordDir} direction={direction} setDirection={setDirection} dimensions={dimensions} demo={demo} board={board} />);
  });

  test("cell renders outer div with three children", () => {
    const outerDiv = document.querySelectorAll(".cell")[0];
    expect(outerDiv.children.length).toStrictEqual(3);

    const blackCell = document.querySelector(".black");
    expect(blackCell).toBeNull();
  });

  test("cell bg contains value", () => {
    const cellBg = document.querySelector(".cell-background");
    expect(cellBg.textContent).toStrictEqual("t");
  });

  test("cell gets a label", () => {
    const label = document.querySelector(".label");
    expect(label.textContent).toStrictEqual("1");
  });

  test("cell gets an input", () => {
    const input = document.querySelector(".cell-input");
    expect(input.id).toStrictEqual("cell_0");
    expect(input.type).toStrictEqual("text");
    expect(input.value).toStrictEqual("");
  });

  test("passing '.' as a value renders black cell", () => {
    render(<Cell number={undefined} value="." index={4} handler={handler} wordDir={"across"} direction={"down"} setDirection={setDirection} dimensions={dimensions} demo={demo} board={board} />);
    const outerDiv = document.querySelectorAll(".cell")[1];
    expect(outerDiv.className).toContain("black");
  });

  test("black cell has no children", () => {
    render(<Cell number={undefined} value="." index={4} handler={handler} wordDir={"across"} direction={"down"} setDirection={setDirection} dimensions={dimensions} demo={demo} board={board} />);
    const outerDiv = document.querySelectorAll(".cell")[1];
    expect(outerDiv.children.length).toStrictEqual(0);
    expect(outerDiv.className).toStrictEqual("cell black");
  });
})