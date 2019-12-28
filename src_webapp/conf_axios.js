import axios from 'axios';
// 拦截器
axios.interceptors.request
  .use(function(config) {
    //配置发送请求的信息
    return config;
  }, function(error) {
    return Promise.reject(error);
  });

axios.interceptors.response
  .use(function(response) {
    //配置请求回来的信息
    return response;
  }, function(error) {
    return Promise.reject(error);
  });