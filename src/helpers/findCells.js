export const questions = {
    across: [
        { num: 2, question: "Actor in Lawrence of Arabia" },
        { num: 9, question: "Tim was nice but a bit what?" },
        { num: 10, question: "Actress famous for playing Katniss Everdeen in the Hunger Games films, also 30 across" },
        { num: 11, question: "Not on time" },
        { num: 13, question: "A poem should always --" },
        { num: 15, question: "A level paved area next to a building" },
        { num: 17, question: "Proper nativity stuff, a word you sadly never hear any more" },
        { num: 18, question: "Cranky granny character invented by Jonathan Winters" },
        { num: 22, question: "-- Murray, pub landlord" },
        { num: 23, question: "Not wet any more because it --" },
        { num: 26, question: "Mr -- was always causing chaos" },
        { num: 28, question: "Put a babby in it" },
        { num: 30, question: "Surname of 10 across" },
        { num: 32, question: "What an actor does" },
        { num: 34, question: "McKinley Morganfield is better known by what name?" },
    ],
    down: [
        { num: 1, question: "Army rank" },
        { num: 2, question: "For frying in" },
        { num: 3, question: "A bit like string" },
        { num: 4, question: "The other half of American comedy due starring Charles Lincoln \"Link\" Neal III" },
        { num: 5, question: "A member of the Irish parliament" },
        { num: 6, question: "Doesn't mix with water" },
        { num: 7, question: "A Nebraskan city on the Missouri river" },
        { num: 8, question: "Things in the periodic table" },
        { num: 12, question: "Informal crocodile" },
        { num: 14, question: "Not me" },
        { num: 16, question: "A priest who acted as a teacher to the prophet Samuel" },
        { num: 18, question: "A small quantity of a particular thing" },
        { num: 19, question: "Heads without the H" },
        { num: 20, question: "A bit like COVID" },
        { num: 21, question: "What came first? Not the chicken" },
        { num: 24, question: "Greek epic poem" },
        { num: 25, question: "A public square" },
        { num: 26, question: "Bring two or more things together into one" },
        { num: 27, question: "The Phantom of" },
        { num: 29, question: "Binary Coded Decimal" },
        { num: 31, question: "Hippy crack" },
        { num: 33, question: "Creators of the Beanie Baby" },
    ],
    board: "m.peterotoolea.a.w.h.dim.ljennifer.lateo...n.t.c.h.mrhyme.terrace..o....lo...nmaudefrickerto...al....g..driedup.magooi.l.s.l.e...pcrib.lawrenceu.act.z.g.o.rmuddywaters.a",
};

const config = {
    width: 13,
    height: 13,
};

export const moveCellDown = (x, y) => {
    const newIndex = getIndex(x, y + 1);
    const nextCell = getCell(x, y + 1);
    if (cellFilled(nextCell)) {
        document.getElementById(`cell_${newIndex}`).focus();
    }
}

export const moveCellRight = (x, y) => {
    const newIndex = getIndex(x + 1, y);
    const nextCell = getCell(x + 1, y);
    if (cellFilled(nextCell)) {
        document.getElementById(`cell_${newIndex}`).focus();
    }
}

export function getCell(x, y) {
    if (x >= config.width || y >= config.height || x < 0 || y < 0) {
        return undefined;
    }
    return questions.board[(config.width * y) + x];
}
export function getIndex(x, y) {
    return (config.width * y) + x;
}

export function cellFilled(val) {
    return val === undefined ? false : val.match(/[a-zA-Z]/) !== null;
}
export function cellEmpty(val) {
    return val === "." || val === undefined;
}
