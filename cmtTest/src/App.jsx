import { useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';
import CMTTable from '../components/CMTTable';


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <h3 style={{marginBottom: "2em" }}>CMT Table Game</h3>
    <CMTTable>

    </CMTTable>
   
   <Button variant="primary" style={{marginBottom: "4em" }}>Reset</Button>
   <p>Készítette: Szlucska Dóra</p>
   </>
  )
}

export default App
