const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedUrl}.json?access_token=pk.eyJ1IjoidmlueW9yIiwiYSI6ImNrZmNxdnp5bDFpZXYyc2xjYmxsNGJveHcifQ.yeg_LW4TOaR0_52FG3Zs0g`
    });

    const resp = await instance.get();

    if (resp.data.features.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.features[0];
    const direccion = data.text; // Probar con place_name
    const lat = data.center[1];
    const lng = data.center[0];

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}