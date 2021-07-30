import axios, {AxiosResponse} from "axios";

import {config} from "./config";

export const configureAxiosErrorHandler = () => {

  axios.defaults.baseURL = config.API_URL;

  axios.interceptors.response.use(undefined, error => {

    // if (error.message === 'Network Error' && !error.response) {
    //   toast.error('Network error!');
    // }
    //
    // // console.log(error.response);
    //
    // const {status, data, config} = error.response;
    //
    // if (status === 404) {
    //   toast.error(data.error);
    // }
    //
    // if (status === 410) {
    //   toast.error(data.message);
    // }
    //
    // if (status === 403) {
    //   toast.error(data.message);
    // }
    //
    // if (status === 500) {
    //   console.log("problem")
    //   toast.error('500 Server error!');
    // }
    //
    // if (status === 400) {
    //   toast.error('400 error!');
    // }

    return Promise.reject(error);
  });
}
