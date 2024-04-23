import { useState, useEffect } from 'react';
import './Css/App.css';

function App() {

  const [hora, sethora] = useState(19);
  const [minutos, setminutos] = useState(36)
  const [segundos, setsegundos] = useState(0)

  useEffect(() => {
    const intervalo = setInterval(() => {

      setsegundos(segundos + 1);

      if(hora == 24){
        sethora(0);
      }

      else if(minutos == 60){
        sethora(hora + 1);
        setminutos(0);
      }

      else if(segundos == 60){
        setminutos(minutos + 1);
        setsegundos(0);
      }

    }, 1000);

    return () => clearInterval(intervalo);
  });

  const formatNumber = (number) => {
    return number.toString().padStart(2, '0');
  };


  return (
    <div className="App">

      <div className='borda'>

        <h1>Horário atual</h1>
        <h2>{formatNumber(hora)} horas {formatNumber(minutos)} minutos e {formatNumber(segundos)} segundos</h2>

      </div>

    </div>
  );

}

export default App;