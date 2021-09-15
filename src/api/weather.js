import axios from '../core/axios';

class WeatherAPI {
  async getByCity(city) {
    const { data } = await axios.get(`/weather?q=${city}&appid=9dadc0bdca73e856dec3ee4297334764&lang=ru&units=metric`);
    return data;
  }
}

export default new WeatherAPI();
