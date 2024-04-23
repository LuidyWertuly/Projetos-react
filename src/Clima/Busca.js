import {useState} from 'react';
import Api from '../Api';

function Busca(Props){

    const [Clima, SetClima] = useState(null);
    const [Erro, SetErro] = useState(null);

    function LerInput(){

        let ValorDigitado = document.querySelector('input[name=InputBusca]').value;

        Api.GetClima(ValorDigitado)
        .then(data => {
            SetClima(data);
            SetErro(null);
        })

        .catch(Error => {
            SetErro(Error);
            SetClima(null);
        }) 

    }

    function formatarHora(timestamp){
        const data = new Date(timestamp * 1000);
        const horas = String(data.getHours()).padStart(2, '0');
        const minutos = String(data.getMinutes()).padStart(2, '0');
        return `${horas}:${minutos}`;
    }

    return(
        <div className='teste'>

            <div className='Buscas'>

                <h1>Consultar Clima</h1>
                <input type="text"  placeholder={Props.placeholder} name="InputBusca" />
                <input type="button" value="Buscar" name="BotaoBusca" onClick={LerInput}/>

            </div>

            {Clima &&(
                <div className='Clima'>

                    <p>{`${Clima.name} - ${Clima.sys.country}`}</p>

                    <div className='divisor'></div>

                    <h3 id='temp'>{`${Clima.main.temp} °C`}</h3>

                    <img src={`http://openweathermap.org/img/w/${Clima.weather[0].icon}.png`} alt="Imagem" />

                    <p id='sensacao'>Sensação: {`${Clima.main.feels_like} °C`}</p>
                    <div className='divisor'></div>

                    <p id=''>Mín: {`${Clima.main.temp_min} °C | Máx: ${Clima.main.temp_max} °C`}</p>

                    <div className='espacador'></div>

                    <p>Última Coleta: {formatarHora(Clima.dt)}</p>
                    
                </div>
            )}
            
            {Erro &&(
                <div className='Clima'>
                    <p>Erro ao obter o clima: {Erro.message}</p>
                </div>
            )}

        </div>
    )

}

export default Busca;