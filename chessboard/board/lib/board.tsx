import React from 'react';
import styles from './board.module.css';
import { Baseboard } from './Baseboard';
import { ChessboardProps } from './Props';
import { SquaresLayer } from './SquaresLayer';

export const rowNames = "abcdefgh";
const Chessboard: React.FC<ChessboardProps> = ({ reversed, printCellNames, boardState }) => {
  return (
    <svg className={styles.board} viewBox="0 0 80 80">
      <Baseboard reversed={reversed} printCellNames={printCellNames} />
      <SquaresLayer reversed={reversed} board={boardState.board} />
    </svg>
  );
};

export default Chessboard;