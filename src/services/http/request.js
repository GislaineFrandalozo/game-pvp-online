import axios from 'axios';
import { baseURL } from '../baseURL';
import { toastPromise } from '../../utils/toastPromise';

export class request {
    constructor(newBaseURL) {
        this.baseURL = newBaseURL || baseURL;
    }
    post(configRequest, body) {
        const requestPost = axios.post((this.baseURL + configRequest.route), body)
        return toastPromise(requestPost, configRequest)
    }
    get(route, headers) {
        return axios.get((this.baseURL + route), { headers })
    }
}