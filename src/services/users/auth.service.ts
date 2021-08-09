import axios from "axios";

export const userLogin = async (accessToken: string, provider: string) => {
  return axios.get(`/login/${provider}/${accessToken}`)
    .then(res => {
      return res;
    })
    .catch(e =>{
      return e;
    })
}
