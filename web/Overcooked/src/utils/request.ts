import axios from 'axios';

const instance = axios.create({
    baseURL: '/api/',
    timeout: 3000,
});

instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    const { status, data, statusText } = response;
    if(status >= 200) {
        return data;
    }
    else {
        return {
            ...data,
            status,
            statusText
        }
    }
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance;

export interface ICommonListParam {
    pageSize: number;
    pageNum: number;
}

