import { BoardState, DoubleFalse, DoubleTrue, EightyFalse } from "./Props";


export const InitialBoardState: BoardState = {
  board: [
    ['Rb', 'Nb', 'Bb', 'Qb', 'Kb', 'Bb', 'Nb', 'Rb'],
    ['Pb', 'Pb', 'Pb', 'Pb', 'Pb', 'Pb', 'Pb', 'Pb'],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['Pw', 'Pw', 'Pw', 'Pw', 'Pw', 'Pw', 'Pw', 'Pw'],
    ['Rw', 'Nw', 'Bw', 'Qw', 'Kw', 'Bw', 'Nw', 'Rw']
  ],
  check: DoubleFalse,
  mate: DoubleFalse,
  turn: 'w',
  enPassant: [EightyFalse, EightyFalse],
  kingCastling: DoubleTrue,
  queenCastling: DoubleTrue,
};

export const EmptyBoardState: BoardState = {
  board: [
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ']
  ],
  check: DoubleFalse,
  mate: DoubleFalse,
  turn: 'w',
  enPassant: [EightyFalse, EightyFalse],
  kingCastling: DoubleTrue,
  queenCastling: DoubleTrue,
};