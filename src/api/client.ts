import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'https://readnow.free.beeceptor.com',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use(
    (config) => {
        if (__DEV__) {
            console.log(
                `--> [Request] ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`,
                config.data ?? ''
            );
        }
        return config;
    },
    (error) => {
        if (__DEV__) {
            console.log('--> [Request Error]', error.message);
        }
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => {
        if (__DEV__) {
            console.log(
                `<-- [Response Success] ${response.status} ${response.config.url}`,
                response.data
            );
        }
        return response;
    },
    (error) => {
        if (__DEV__) {
            console.log(
                `<-- [Response Error] ${error.response?.status ?? 'NETWORK'} ${error.config?.url}`,
                error.response?.data ?? error.message
            );
        }
        return Promise.reject(error);
    }
);