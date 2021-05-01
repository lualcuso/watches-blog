import axios from 'axios';

const api = {
    get: async (url) => {
        const response = await axios.get(url);
        return response;
    }
}

export default api;