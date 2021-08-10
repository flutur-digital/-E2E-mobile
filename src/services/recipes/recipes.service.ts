import axios from "axios";

export const searchRecipes = async (ingredients: Array<number>) => {
  return axios.post(`/search`,{
    ingredients: ingredients
  })
    .then(res => {
      return res;
    })
    .catch(e =>{
      return e;
    })
}
