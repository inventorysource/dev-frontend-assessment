import axios from 'axios';
import interceptors from './AxiosInterceptors';

export default (uri, params = {}) => {
    const api = axios.create({
        baseURL : uri,
        ...params
    });
    api.interceptors.response.use(interceptors.success, interceptors.error);
    return api;
};

