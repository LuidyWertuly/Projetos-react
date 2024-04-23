import React, { useState, useEffect } from 'react';
import './Css/App.css';
import Api from './Api';

function App2() {

  const [nomes, setnomes] = useState([]);

  async function initApi(){

    let pegarNomes = await Api.getPersons();
    setnomes(pegarNomes);
  }

  useEffect(() => {
    initApi()
  }, []);

  return (
    <div className='App2'>

        <div className='borda'>

            <h1>Teste API</h1>
            <br />
            
            {
                nomes.map(function(data, index){ 
                    return (
                    <div key={index}>
                        {data.name} | {data.email}
                        <br />
                        <br />
                    </div>
                    );
                })
            }

        </div>

    </div>
  );
}

export default App2;
