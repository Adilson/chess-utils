import React from 'react';
import { Piece } from './Pieces';
import { PieceColor, PieceType } from './Props';

interface SquareProps {
  i: number;
  j: number;
  x: number;
  y: number;
  cell: string;
}

const Square: React.FC<SquareProps> = ({ i, j, x, y, cell }) => {
  return (cell !== '  ') ? 
    <svg x={x} y={y} key={`${i}${j}`} width={10} height={10} viewBox='0 0 45 45'> {
      <Piece piece={cell[0] as PieceType} color={cell[1] as PieceColor} />
    } </svg> : null;
}

export { Square }