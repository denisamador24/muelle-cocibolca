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
        {hours.map((hour, index) => {
          if (hourSelected !== undefined){
            return (<li 
            key={index}
          className={hour === hourSelected ? 'schedule-column selected' : 'schedule-column' }
          onClick={ () => changeHour(hour)}
          >{hour}</li>)
          
          } else {
            return (<li key={index} className="schedule-column">{hour}</li>)
          }
        })}
      </ul>
    </article>
  )
}