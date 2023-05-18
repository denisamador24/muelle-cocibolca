import './Barco.css';
import './Schedule.css';
import Schedule from './Schedule.jsx';


export default function Barco ({
  name,
  leaves,
  hour,
  setHour
}) {
 
  return (
    <div className="barco">
      <p className="barco__title">{name}</p>
      <div className="schedule-container">
        <Schedule 
          
          place={leaves[0].place}
          hours={leaves[0].schedule}
          hourSelected={hour}
          changeHour={setHour}
        />
        <Schedule 
          
          place={leaves[1].place}
          hours={leaves[1].schedule}
          hourSelected={ hour }
          changeHour={ setHour }
        />
      </div>
    </div>
  );
}
 