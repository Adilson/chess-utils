import { InitialBoardState } from "../lib/InitialBoardState";
import Chessboard from '../lib/board'
import styles from './App.module.css'

function App() {
return (
  <div className={styles.mainBoard}>
    <Chessboard printCellNames={true} reversed={true} boardState={InitialBoardState} />
  </div>
)
}

export default App
