export default function FieldSetLoaded({vehicleLoaded, setVehicleLoaded}) {


  return (
    <fieldset>
      <legend>El camión vá cargado?: </legend>
        <div>
          <label >
            <input 
              type="radio"
              name="camion" 
              value="without"
              />Sin carga
          </label>
  
          <label>
            <input 
              type="radio"
              name="camion" 
              value="loaded"
             />Con Carga
          </label>
  
        </div>
      </fieldset>
  )
}