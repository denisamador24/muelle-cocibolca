import './App.css'
import Home from './pages/Home.jsx';
import Reservation from './pages/Reservation.jsx';
import Welcome from './pages/Welcome.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  const welcomePageVisited = window.localStorage.getItem('welcomePageVisited') === 'visited';
  let initPage;
  if (welcomePageVisited) {
    initPage = <Home/>
  } else {
    initPage = <Welcome/>
  }
  return (
    <>
     <Router>
      <Routes>
       
        <Route index path="/" element={initPage}
        />
        <Route path="/home" element={<Home/>}>
        </Route>
        <Route path="/reservacion/:indexShip" element={<Reservation/>}
        />
      </Routes>
     </Router>
    </>
  )
}

export default App
