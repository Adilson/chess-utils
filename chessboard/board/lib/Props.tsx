export interface BaseboardProps {
  reversed?: boolean;
  printCellNames?: boolean;
}

export interface ChessboardProps {
  reversed?: boolean;
  printCellNames?: boolean;
  boardState: BoardState;
}

export interface PiecesProps {
  reversed?: boolean;
  board: Board;
}

export type PieceType = 'P' | 'N' | 'B' | 'R' | 'Q' | 'K';
export type PieceColor = 'w' | 'b';
export type Square = `${PieceType}${PieceColor}` | '  ';
export type File = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';
export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type SquareName = `${File}${Rank}`;
export type Board = Square[][];
export type Move = [string, string];
export type MoveList = Move[];
export const EightyFalse = [false, false, false, false, false, false, false, false];
export const DoubleTrue = [true, true];
export const DoubleFalse = [false, false];

export interface BoardState {
  board: Board;
  turn: PieceColor;
  selectedSquare?: SquareName;
  check: boolean[];
  mate: boolean[];
  legalMoves?: string[];
  enPassant: [boolean[], boolean[]];
  kingCastling: boolean[];
  queenCastling: boolean[];
}


