import axios from 'axios';

const API_KEY = 'IbErSDKHrI5r75t97S2Rn8MoKTXGQjWg';
const client = axios.create({
  baseURL: `https://outside-in-dev-api.herokuapp.com/${API_KEY}`
});

const restaurantsApi = {
  loadRestaurants: () =>
    client.get('/restaurants').then((response) => response.data)
};

export default restaurantsApi;
