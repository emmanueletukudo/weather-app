import axios from 'axios';
const base_url = 'http://api.openweathermap.org/data/2.5/';
const apiKey = 'b0795ad46ef3f1ff2abbcacde4f94568';

const WeatherData = {
  getByCity: async city => {
    try {
      const url = `${base_url}/weather?q=${city}&appid=${apiKey}`;
      const options = {
        method: 'get',
        url: url,
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await axios(options);
      console.log(res);
      return res.data;
    } catch (error) {
      return err.response.data;
    }
  },
};

export default WeatherData;
