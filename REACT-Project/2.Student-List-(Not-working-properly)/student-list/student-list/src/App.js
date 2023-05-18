import React ,{useState} from 'react';
import Data from './components/data';
import List from './components/list';

function App() {
  const [playerss,setplayers]=useState(Data)

  return (
    <div className='container'>
      <h3>{playerss.length} Cricket Players</h3>
      <List players={playerss}/>
      <button onClick={(setplayers([]))}Clear All></button>
    </div>
  )
}

export default App
