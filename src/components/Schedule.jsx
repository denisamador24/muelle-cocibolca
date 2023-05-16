export default function Schedule ({place, hours}) {
  
  
  return (
    <article>
      <p>{place}</p>
      <ul>
        {hours.map(hour => 
          <li>{hour}</li>
        )}
      </ul>
    </article>
  )
}