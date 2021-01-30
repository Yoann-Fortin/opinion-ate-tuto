import axios from 'axios';

const client = axios.create({
    baseURL: 'https://outside-in-dev-api.herokuapp.com/bYct7X4hdezWB0ZXD9y0fK6UOzZC5FS7',
});

const api = {
    loadRestaurants() {
        return client.get('/restaurants').then(response => response.data);
    },
};
  
export default api;