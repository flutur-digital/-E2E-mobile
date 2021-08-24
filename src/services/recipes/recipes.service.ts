import axios from "axios";
import {axiosAuthHeader} from "../../config/axiosConfig";

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

export const getRecipeById = async (id: number) => {
  return axios.get(`/recipe/${id}`)
    .then(res => {
      return res;
    })
    .catch(e =>{
      return e;
    })
}


export const userSaveRecipe = async (formdata : any) => {
  const authheaders = axiosAuthHeader();
  return axios.post(`/add-recipe`,formdata,{
    headers: {
      'Content-Type': 'multipart/form-data',
      ...authheaders.headers
    }
  }).then(res => {
    return res;
  }).catch(e =>{
    return e;
  })
}

export const userSaveRecipeStep = async (formdata : any) => {
  const authheaders = axiosAuthHeader();
  return axios.post(`/add-recipe/step`,formdata,{
    headers: {
      'Content-Type': 'multipart/form-data',
      ...authheaders.headers
    }
  }).then(res => {
    return res;
  }).catch(e =>{
    return e;
  })
}

export const userDeleteRecipe = async (recipeId : number) => {
  return axios.post(`/recipe/${recipeId}/delete`, { },axiosAuthHeader()).then(res => {
    return res;
  }).catch(e =>{
    return e;
  })
}
