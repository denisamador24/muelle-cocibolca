import './Reservation.css';
import dataShips from '../utils/dataShips.js';
import priceVehicles from '../utils/priceVehicles.js';
import Header from '../components/Header.jsx';
import Button from '@mui/material/Button';
import {Autocomplete, TextField} from '@mui/material';
import Barco from '../components/Barco.jsx';
import FormTypeVehicle from '../components/FormTypeVehicle.jsx';
import FieldSetLoaded from '../components/FieldSetLoaded.jsx';
import Fieldset from '../components/Fieldset.jsx';
import { useParams } from 'react-router-dom';
import { useState } from 'react';


export default function Reservation() {
  const { indexShip } = useParams();
  
  const dataShip = dataShips[indexShip];
  
  const [vehicle, setVehicle] = useState('Motocicleta');
  const [vehicleLoaded, setVehicleLoaded] = useState(false);
  const [hour, setHour] = useState(' initial');
  const itemVehicle = priceVehicles.find(v => v.type === vehicle);
  let priceVehicle;
  
  
  
  const vehicleOptions = priceVehicles.map(v => v.type);
  
  if (vehicleLoaded && itemVehicle.priceLoaded) {
    priceVehicle = itemVehicle.priceLoaded;
  } else {
    priceVehicle = itemVehicle.price;
  }
   
  function askReservation (){
    window.open(`https://api.whatsapp.com/send?phone=+50586513101&text=Quiero hacer una reservación de: ${vehicle},  con hora: ${hour}`, '_blank')
  } 

  return (
    <div >
      <Header/>
      <div className="reservation-container"><p className='reservation-title'>Haz tu reservación en el Ferry</p>
      <Fieldset title="Seleciona la hora:">
        <Barco 
          name={dataShip.name}
          leaves={dataShip.leaves}
          hour={hour}
          setHour={setHour}
        />
      </Fieldset>
      <br/>
      <Autocomplete
        value={vehicle}
        options={vehicleOptions}
        renderInput={(params) => (
          <TextField {...params} label="Vehículo" variant="outlined" />
        )}
        onChange={(event, newVehicle) => setVehicle(newVehicle !== null ? newVehicle : 'Motocicleta')}
      />
      <br/>
      {vehicle === 'Camión' &&<FieldSetLoaded 
        vehicleLoaded={vehicleLoaded}
        setVehicleLoaded={setVehicleLoaded}
      />
     
      }
      <p>El precio estimado es: {priceVehicle} C$</p>
      <br/>
      <div className="button-container">
        <Button variant="contained"onClick={ () => askReservation()
              }>Solicitar reservación
        </Button>
      </div>
    </div>
  </div>
  )
}

