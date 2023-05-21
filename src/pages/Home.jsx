import '../components/Card.css';
import dataShips from '../utils/dataShips.js';
import './Home.css';
import Header from '../components/Header.jsx';
import SearchBar from '../components/SearchBar.jsx';
import Barco from '../components/Barco.jsx';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home (){
  
  const [searchHour, setSearchHour] = useState('');
  
  const optionsSearchHour = dataShips.map( (ship) => {
    const hours = ship.leaves.map(hour => hour.schedule);
    return hours;
  })
  .flat(2)
  .filter((
    elemento,
    indice,
    arreglo
  ) => {
    return arreglo.indexOf(elemento) === indice;
  });
  
 
  
  const filterDataShips = dataShips.filter((ship) => {
    const hours = ship.leaves.map((it) => it.schedule)
    .flat();
    
    
    let yes = false;
    hours.forEach((it) => {
      
      if (it === searchHour) {
        yes = true;
      } 
      return;
    });
   return yes;
    
  });
  
  
  function makeReservation (id) {
    window.location.href = `/reservacion/${id}`
  }
  
  let shipList;
  if (searchHour === '' || searchHour === null) {
    shipList = dataShips;
  } else {
    shipList = filterDataShips;
  }
  
  return (
    <>
      <Header/>
      <div className="search-container">
        <p>Busca tu hora de salida:</p> 
        <SearchBar
          valueSearch = { searchHour }
          setValueSearch = { setSearchHour }
          options = { optionsSearchHour }
        />
      </div>
      <div>
        <ul className="card-container">
          {
           shipList.map( (item, index) => {
          
            return (
              <li key={index} className="card">
                <Barco 
                  name={item.name}
                  leaves={item.leaves}
                  id={index}
                />
                <div className="button-container">
                    <Button variant="outlined" onClick={() => makeReservation(index)}>
                      Reservar
                    </Button>
            
                </div>
              </li>
            );
          })
            
          }
        </ul>
      </div>
    </>
  );
}

