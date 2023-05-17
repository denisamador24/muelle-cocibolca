import dataShips from '../utils/dataShips.js';
import priceVehicles from '../utils/priceVehicles.js';
import Barco from '../components/Barco.jsx';
import FormTypeVehicle from '../components/FormTypeVehicle.jsx';
import FieldSetLoaded from '../components/FieldSetLoaded.jsx';
import { useParams } from 'react-router-dom';
import { useState } from 'react';


export default function Reservation() {
  const { indexShip } = useParams();
  const dataShip = dataShips[indexShip];
  const [vehicle, setVehicle] = useState('');
  const [vehicleLoaded, setVehicleLoaded] = useState(false);


  return (
    <div >
      <h2>Haz tu reservación en el Ferry</h2>
      <Barco 
        name={dataShip.name}
        leaves={dataShip.leaves}
      />
      
       <FormTypeVehicle 
        vehicle={vehicle} 
        setVehicle={setVehicle}
        vehicleList={priceVehicles}
      /> 
      
      { vehicle === 'Camión' &&<FieldSetLoaded 
        vehicleLoaded={vehicleLoaded}
        setVehicleLoaded={setVehicleLoaded}
      />
     }
     
    </div>
  )
}

