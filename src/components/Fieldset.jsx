import './Fieldset.css';

export default function Fildset ({title, children}) {
  
  return (
    <fieldset className="custom-fieldset">
      <legend>{title}</legend>
        <div>
          {children}
        </div>
    </fieldset>
  )
  
}