import React from 'react';
import { rowNames } from './board';
import { BaseboardProps } from './Props';

export const Baseboard: React.FC<BaseboardProps> = ({ reversed, printCellNames }) => {
  const board = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const cellName = `${rowNames[j]}${i + 1}`;
      const x = !reversed ? j : 7 - j;
      const y = !reversed ? 7 - i : i;
      const cellFill = (x + y) % 2 === 0 ? '#f0d080' : '#008060';

      var cell = <rect
        x={x * 10}
        y={y * 10}
        width="10"
        height="10"
        fill={cellFill}
        key={`cell_${cellName}`} />;
      board.push(cell);

      if (printCellNames) {
        //Adds to SVG board the cellname
        var cellNameText = <text
          x={x * 10 + 1}
          y={y * 10 + 9}
          fontSize="2px"
          fill="black"
          style={{ userSelect: 'none' }}
          key={`text_${cellName}`}>{cellName}</text>;
        board.push(cellNameText);
      }
    }
  }
  return <>{board}</>;
};
