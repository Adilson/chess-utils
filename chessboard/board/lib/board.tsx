import styles from './board.module.css';

const Chessboard = () => {
  const board = [];

  for (let i = 0; i < 8; i++) {
    const row = [];
    for (let j = 0; j < 8; j++) {
      const cellClass = (i + j) % 2 === 0 ? `${styles.white}` : `${styles.black}`;
      row.push(<div key={`${i}-${j}`} className={`${styles.cell} ${cellClass}`} />);
    }
    board.push(<div key={i} className={styles.row}>{row}</div>);
  }

  return (
    <div className={styles.chessboard}>
      {board}
    </div>
  );
};

export default Chessboard;