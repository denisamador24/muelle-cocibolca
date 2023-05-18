import './selected.css';
import './Schedule.css';

export default function Schedule ({place, hours,
  hourSelected,
  changeHour
}) {
  
  
  return (
    <article className="schedule-row">
      <p>{place}</p>
      <ul className="schedule-row">
        {hours.map(hour => {
          if (hourSelected !== undefined){
            return (<li 
          className={hour === hourSelected ? 'schedule-column selected' : 'schedule-column' }
          onClick={ () => changeHour(hour)}
          >{hour}</li>)
          
          } else {
            return (<li className="schedule-column">{hour}</li>)
          }
        })}
      </ul>
    </article>
  )
}