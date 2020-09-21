const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7ffb834bc0f2298805965773e2244c7e&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}