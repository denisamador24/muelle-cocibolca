import './Fieldset.css';

export default function FieldSetLoaded({vehicleLoaded, setVehicleLoaded}) {


  return (
    <fieldset className="custom-fieldset">
      <legend>El camión vá cargado?: </legend>
        <div>
          <label >
            <input 
              type="radio"
              name="camion" 
              value="without"
              onChange={(e) => setVehicleLoaded(!e.target.value)}
              />Sin carga
          </label>
  
          <label>
            <input 
              type="radio"
              name="camion" 
              value="loaded"
              onChange={(e) => setVehicleLoaded(e.target.value)}
             />Con Carga
          </label>
  
        </div>
      </fieldset>
  )
}