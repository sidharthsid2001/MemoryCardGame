import { useState } from 'react';
import './App.css';
import MemoryGame from './components/MemoryGame';
import Score from './components/Score';

function App ()
{
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <Score/>
      <MemoryGame />
    </div>
  );
}

export default App;
