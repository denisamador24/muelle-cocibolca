import './Button.css';

export default function Button ({children, handleClick}) {
  
  
  return (
    <>
      <button className="primary-button" onClick={handleClick}>
        {children}
      </button>
    </>
  )
}