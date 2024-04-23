import axios from 'axios';


const Api = {

    getPersons: async function(){

        let res =  await axios.get(`https://jsonplaceholder.typicode.com/users`);

        let {data} = await res;

        return data;

    },

    GetClima: async function(ValorDigitado){

        let res =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ValorDigitado}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`);

        let {data} = await res;

        return data;

    }

}

export default Api;