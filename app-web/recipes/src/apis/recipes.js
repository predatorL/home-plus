import axios from 'axios';

export const getRecipes = () => {
    return axios.get('http://localhost:1337/api/recipes?populate=coverImage.*')
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const getRecipeDetail = (id) => {
  return axios.get(`http://localhost:1337/api/recipes/${id}?populate=*`)
  .then(function (response) {
    console.log('37/api/recipes', response);
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  });
}

