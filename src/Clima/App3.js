import { useState, useEffect } from 'react';
import '../Css/App.css';
import Busca from './Busca';

function App3() {

  return (
    <div className="App">

      <div className='borda'>
        <Busca placeholder="Digite a Cidade..." />
      </div>

    </div>
  );

}

export default App3;