import dataShips from '../utils/dataShips.js';
import Barco from '../components/Barco.jsx';
import Button from '../components/Button.jsx';
import { Link } from 'react-router-dom';

export default function Home (){
  
  
  function makeReservation (id) {
    
  }
  
  return (
    <>
      <h1>Muelle Ometepe 2</h1>
      
      <ul>
        {dataShips.map( (item, index) => {
        
          return (
            <li key={index}>
              <Barco 
                name={item.name}
                leaves={item.leaves}
                id={index}
              />
              
              <Link to={`/reservacion/${index}`}>
             <Button handleClick={() => makeReservation(index)}>
                Reservar
              </Button>
              </Link>
            </li>
          );
        })
          
        }
      </ul>
    </>
  );
}