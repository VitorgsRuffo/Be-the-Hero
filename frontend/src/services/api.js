//services paste: holds all files that provide some sort of integration of some external feature.

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
});

export default api;