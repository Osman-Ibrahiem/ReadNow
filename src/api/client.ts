import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'https://readnow.free.beeceptor.com',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});