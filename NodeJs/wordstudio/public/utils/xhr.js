/* @flow */

import axios from 'axios';
import qs from 'qs';
import headersApi from './headers-api';
import { API } from './constants';

const xhr = axios.create({
    baseURL: API,
    headers: headersApi(),
    paramsSerializer: qs.stringify,
});

xhr.interceptors.response.use(response => response, (error) => {
    if (error.response && error.response.status === 401) {
        global.location.reload();
    }
    return Promise.reject(error);
});

export default xhr;