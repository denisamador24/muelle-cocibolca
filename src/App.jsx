import './App.css'
import Home from './pages/Home.jsx';
import Reservation from './pages/Reservation.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


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
