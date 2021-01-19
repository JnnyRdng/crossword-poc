import { render, screen } from '@testing-library/react';
import Loader from '../Loader';
import App from "../App";

describe("Loader renders", () => {

  // global.fetch = jest.fn(() =>
  //   Promise.resolve({
  //     json: () => Promise.resolve([
  //       {
  //         dimensions: { width: 13, height: 13 },
  //         board: ".degenerate...e.l.i.e.o.h.cleancut.trot.f.c.k.r.a.b..twig.telling...a.c.a...o..ruleofthumb..e...s.s.p...pastime.edit..s.r.e.s.a.h.soda.tipsters.n.i.i.e.e.o...blackwidow."
  //       },
  //       {
  //         across: [],
  //         down: []
  //       }
  //     ]),
  //   })
  // );
  // beforeEach(() => {

  // });

  // afterEach(() => {

  // })

  // test('renders "Loading..." before fetch', () => {
  //   render(<Loader />);
  //   const pElement = screen.getByRole("div", /Loading/i);
  //   expect(pElement).toBeInTheDocument();
  // });

});

let config, questions;
describe("App loads", () => {

  beforeEach(() => {
    config = { dimensions: { width: 13, height: 13 }, board: "................................................................................." };
    questions = { across: [], down: [] };
    render(<App config={config} questions={questions} />);
  });

  test("App renders click me button", () => {
    const clickMeButton = screen.getByText(/click me/i);
    expect(clickMeButton).toBeInTheDocument();
  });

  test("App renders export button", () => {
    const exportButton = screen.getByText(/export/i);
    expect(exportButton).toBeInTheDocument();
  });

})
