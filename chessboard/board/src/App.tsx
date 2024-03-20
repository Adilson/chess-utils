import Chessboard from '../lib/board'
import  styles from './App.module.css'

function App() {

  return (
    <div className={styles.mainBoard}>
      <Chessboard />
    </div>
  )
}

export default App
