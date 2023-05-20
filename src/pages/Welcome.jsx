import './Welcome.css';
import Header from '../components/Header.jsx'
import Button from '@mui/material/Button';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Welcome = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      //history.push('/home'); // Redirige a la página principal después de la bienvenida
      window.location.href = '/home';
      window.localStorage.setItem('welcomePageVisited', 'visited');
    }
  };

  return (
    <div className="welcome-page">
      <Header/>

      <div className="description">
        <p>Te damos la bienvenida a muelle cocibolca aquí puedes reservar tú espacio para tú vehículo liviano o pesado desde la comodidad de tú casa</p>
      </div>

      <AnimatePresence>
        {step === 1 && (
          <motion.div
            key="step-1"
            className="step"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Paso 1</h2>
            <p>Funcionalidad 1</p>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step-2"
            className="step"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Paso 2</h2>
            <p>Funcionalidad 2</p>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step-3"
            className="step"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Paso 3</h2>
            <p>Funcionalidad 3</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="next-button">
        <Button
           onClick={handleNext}
              variant="contained"
            >
              {step < 3 ? 'Siguiente' : 'Comenzar'}
        </Button>
      </div>
    </div>
  );
};

export default Welcome;