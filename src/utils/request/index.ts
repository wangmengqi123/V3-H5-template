import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { showToast } from 'vant';
// 根据环境不同引入不同api地址

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_URL_PREFIX as string,
  withCredentials: false,
  timeout: 10000,
});


service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    if (res.code !== 200) {
      showToast(res.msg);
      return Promise.reject(res.msg || 'Error');
    } else {
      return res;
    }
  },
  (error: AxiosError) => {
    console.log('err' + error);
    showToast(error.message);
    return Promise.reject(error.message);
  },
);

export const get = (url, params={}, config = {}) => {
  return new Promise((resolve, reject) => {
    service({
          method: 'get',
          url,
          params,
          ...config
      }).then(response => {
          resolve(response)
      }).catch(error => {
          reject(error)
      })
  })
}

export const post = (url, data, config = {}) => {
  return new Promise((resolve, reject) => {
    service({
          method: 'post',
          url,
          data,
          ...config
      }).then(response => {
          resolve(response)
      }).catch(error => {
          reject(error)
      })
  })
}
export default service;
