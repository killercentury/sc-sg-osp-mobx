
import React from 'react';
import axios from 'axios';
import config from 'config';
import cookie from 'react-cookie';


const ShouldAuthenticate = function(Component){
    const ROOT_URL = config.api_url;
    const auth_token = cookie.load('auth_token');
    const axiosProvider = axios.create({
          baseURL:  `${ROOT_URL}`,
          timeout: 5000
          // Remove below for api to work
          //,headers: {'Authorization': `Bearer ${auth_token}`}
        });

    axiosProvider.interceptors.response.use(function (response) {
        // Do something with response data
        return response;
      }, function (error) {
         console.log('in interceptors', err);
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          // we could refresh token and set it
          // but for test
          cookie.save('auth_token', '');
        }
        return Promise.reject(error);
      });

    return (() => <Component axiosProvider={axiosProvider} />)
}

export default ShouldAuthenticate;
