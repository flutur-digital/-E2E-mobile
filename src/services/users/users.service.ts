import axios from "axios";

export const getUserProfileById = async (userId: number) => {
  return axios.get(`/user/${userId}`)
    .then(res => {
      return res;
    })
    .catch(e =>{
      return e;
    })
}
