import Schedule from './Schedule.jsx';

export default function Barco ({
  name,
  leaves
}) {
 
  return (
    <div className="barco">
      <p className="barco__title">{name}</p>
      <div className="barco__schedules">
        <Schedule 
          place={leaves[0].place}
          hours={leaves[0].schedule}
        />
        <Schedule 
          place={leaves[1].place}
          hours={leaves[1].schedule}
        />
      </div>
    </div>
  );
}
 