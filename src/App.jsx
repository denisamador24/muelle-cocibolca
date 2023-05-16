
import './App.css'
import Home from './pages/Home.jsx';
import Reservation from './pages/Reservation.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


function Hi (){
  return <h2> Hello Denis</h2>
}

function App() {
 

  return (
    <>
     <Router>
      <Routes>
       
        <Route index path="/" element={<Home/>}/>
        <Route path="/reservacion/:indexShip" element={<Reservation/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
