import '../components/Card.css';
import dataShips from '../utils/dataShips.js';
import './Home.css';
import Header from '../components/Header.jsx';
import Barco from '../components/Barco.jsx';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Home (){
  
  
  function makeReservation (id) {
    window.location.href = `/reservacion/${id}`
  }
  
  return (
    <>
      <Header/>
      <ul class="card-container">
        {dataShips.map( (item, index) => {
        
          return (
            <li key={index} class="card">
              <Barco 
                name={item.name}
                leaves={item.leaves}
                id={index}
              />
              <div class="button-container">
                  <Button variant="outlined" onClick={() => makeReservation(index)}>
                    Reservar
                  </Button>
          
              </div>
            </li>
          );
        })
          
        }
      </ul>
    </>
  );
}

