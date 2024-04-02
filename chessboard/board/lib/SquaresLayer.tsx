import React from 'react';
import { PiecesProps } from './Props';
import { Square } from './Square';

export const SquaresLayer: React.FC<PiecesProps> = ({ reversed, board }) => {
  return (
    board.map((row, i) => {
      return row.map((cell, j) => {
        const x = (!reversed ? j * 10 : 70 - j * 10);
        const y = (!reversed ? i * 10 : 70 - i * 10);
        return <Square key={`${i}${j}`} i={i} j={j} x={x} y={y} cell={cell} />;
      });
    })
  );
};


