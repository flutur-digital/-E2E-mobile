import axios from "axios";

export const getAllIngredients = async () => {
  return axios.get(`/get-all-ingredients`)
    .then(res => {
      return res;
    })
    .catch(e =>{
      return e;
    })
}
