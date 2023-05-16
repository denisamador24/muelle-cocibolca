import dataShips from '../utils/dataShips.js';
import Barco from '../components/Barco.jsx';
import { useParams } from 'react-router-dom';

export default function Reservation () {
  const {indexShip} = useParams();
  const dataShip = dataShips[indexShip];
  
  return (
    <div >
      <h2>Haz tu reservación en el Ferry</h2>
      <Barco 
        name={dataShip.name}
        leaves={dataShip.leaves}
      />
      <FormTypeVehicle/>
     
    </div>
   )
}

function FormTypeVehicle () {
  
  return (
    <div>
      <p>Seleciona los datos de tu vehículo</p>
      <span>Selecciona tu vehículo: </span> 
      <select name="vehicle">
        <option>Seleciona el vehículo</option>
        <option value="motocicleta">Motocicleta</option>
        <option value="car">Carro</option>
        <option value="van">
      Camioneta
        </option>
        <option value="minibus">Buseta</option>
      </select>
      
    </div>
    
  )
}