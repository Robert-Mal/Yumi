import axios from 'axios';

const URL = 'http://127.0.0.1:5000';

const options = {
  headers: {
    'Content-Type': 'application/json',
  },
};

/**
 * Recipes related API
 * This class is responsible for making calls to server via axios for recipes related stuff.
 */

class RecipesService {
  /**
   * getRecipes - get all recipes related for provided user
   * @param {string} userId current user id
   * @return {promise}
   */
  getRecipes(userId) {
    return axios.post(
      `${URL}/api/recipe-read`,
      {
        _userId: userId,
      },
      options
    );
  }
  /**
   * getRecipeById - get recipe details by it's id
   * @param {string} recipeId
   * @return {promise}
   */
  getRecipeById(recipeId) {
    return axios.post(
      `${URL}/api/recipe-by-id`,
      {
        _id: recipeId,
      },
      options
    );
  }

  /**
   * addFavourite -add recipe to favourites
   * @param {string} _id - recipe id
   * @param {boolean} favourite - is recipe currently favourite
   * @return {promise}
   */
  addFavourite(_id, favourite) {
    const payload = {
      _id,
      favourite,
    };
    return axios.put(`${URL}/api/recipe-update`, payload);
  }

  /**
   * updateRecipe - modify existing recipe
   * @param {string} recipeId - chosen recipe id
   * @param {object} recipe - full recipe object
   * @return {promise}
   */
  updateRecipe(recipeId, recipe) {
    const payload = {
      _id: recipeId,
      ...recipe,
    };
    return axios.put(`${URL}/api/recipe-update`, payload);
  }

  /**
   * deleteRecipe - delete existing recipe
   * @param {string} _id - chosen recipe id
   * @return {promise}
   */
  deleteRecipe(_id) {
    return fetch(`${URL}/api/recipe-delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: _id }),
    });
  }

  /**
   * addRecipe - add new recipe
   * @param {string} userId - user id for which we are adding new recipe
   * @param {object} recipe - full recipe object
   * @return {promise}
   */
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

  /**
   * getFavouriteRecipes
   * @param {string} userId - user id for which we are getting fav recipes
   * @return {promise}
   */
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
