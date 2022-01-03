import axios from 'axios';

const URL = 'http://127.0.0.1:5000';

const options = {
  headers: {
    'Content-Type': 'application/json',
  },
};

class RecipesService {
  getRecipes(userId) {
    return axios.post(
      `${URL}/api/recipe-read`,
      {
        _userId: userId,
      },
      options
    );
  }

  getRecipeById(recipeId) {
    return axios.post(
      `${URL}/api/recipe-by-id`,
      {
        _id: recipeId,
      },
      options
    );
  }

  addFavourite(_id, favourite) {
    const payload = {
      _id,
      favourite,
    };
    return axios.put(`${URL}/api/recipe-update`, payload);
  }

  updateRecipe(recipeId, recipe) {
    const payload = {
      _id: recipeId,
      ...recipe,
    };
    return axios.put(`${URL}/api/recipe-update`, payload);
  }

  deleteRecipe(_id) {
    return fetch(`${URL}/api/recipe-delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: _id }),
    });
  }

  addRecipe(userId, recipe) {
    return axios.post(
      `${URL}/api/recipe-create`,
      {
        _userId: userId,
        ...recipe,
      },
      options
    );
  }

  getFavouriteRecipes(userId) {
    return axios.post(
      `${URL}/api/favourite-read`,
      {
        _userId: userId,
      },
      options
    );
  }
}
export default new RecipesService();
