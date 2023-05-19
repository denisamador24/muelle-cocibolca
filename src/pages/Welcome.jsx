import './Welcome.css';
import { useState } from 'react';
//import { useHistory } from 'react-router-dom';

const Welcome = () => {
  //const history = useHistory();
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      window.localStorage.setItem('welcomePageVisited', 'visited');
      //history.push('/home'); // Redirige a la página principal después de la bienvenida
      window.location.href = '/home';
    }
  };

  return (
    <div className="welcome-page">
      <h1>Muelle Cocibolca</h1>
      <img src="/logo.jpg" alt="Logo" />
      <p>Te damos la bienvenida a muelle cocibolca aquí puedes reservar tú espacio para tú vehículo liviano o pesado desde la comodidad de tú casa
      </p>
      
      <button onClick={handleNext}>Siguiente</button>
      
      {/* Opcional: Mostrar las funcionalidades una por una */}
      {step === 1 && (
        <div className="step">
          <h2>Paso 1</h2>
          <p>Funcionalidad 1</p>
        </div>
      )}
      
      {step === 2 && (
        <div className="step">
          <h2>Paso 2</h2>
          <p>Funcionalidad 2</p>
        </div>
      )}
      
      {step === 3 && (
        <div className="step">
          <h2>Paso 3</h2>
          <p>Funcionalidad 3</p>
        </div>
      )}
    </div>
  );
};

export default Welcome;
