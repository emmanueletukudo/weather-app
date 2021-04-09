import axios from "axios";

const WeatherData = {
    getByState: async(state) => {
        try {
            const options = {
                method: "get",
                url: "",
                headers: {
                    "Content-Type": "application/json",
                }
            }
            let res =  await axios(options);
        } catch (error) {
            return error.response.data,
        }
    }
}