export default function FormTypeVehicle({vehicle, setVehicle, vehicleList}) {

  return (
    <div>
      <div className="custom-select">
        <select 
        className=""
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
    </div>
  )
}
