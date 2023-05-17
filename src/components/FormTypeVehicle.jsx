export default function FormTypeVehicle({vehicle, setVehicle, vehicleList}) {

  return (
    <div>
      <p>Seleciona los datos de tu vehículo</p>
      <span>Selecciona tu vehículo: </span> 
      <select 
        name="vehicle" 
        value={vehicle}
        onChange={(e) => {
          setVehicle(e.target.value);
        }}
      >
        {vehicleList.map((v) =>
          <option 
          value={v.type}
          >
          {v.type}
          </option>
        )}
        
      </select>
    </div>
  )
}
