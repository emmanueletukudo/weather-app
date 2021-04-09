import axios from "axios";
const base_url = 'http://api.openweathermap.org/data/2.5/';
const apiKey = "b0795ad46ef3f1ff2abbcacde4f94568";

const WeatherData = {
    getByCity: (city) => {
            const url = `${base_url}/weather?q=${city}&appid=${apiKey}`;
            // const options = {
            //     method: "get",
            //     url: url,
            //     headers: {
            //         "Content-Type": "application/json",
            //     }
            // }
         const res =  axios.get(url);
         console.log(res.data);
    }
}

export default WeatherData;