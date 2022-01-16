const Recipe = require("../models/recipe");

/**
 * RecipeAPI
 * Class is responsible for recipe related stuff.
 */
class RecipeAPI {
  /**
   * createRecipe - create new recipie object
   * @param {object} req - request body with the recipie data
   */
  static async createRecipe(req, res) {
    const {
      _userId,
      name,
      description,
      imageURL,
      tags,
      favourite,
      ingredients,
      instructions,
    } = req.body;
    const recipe = new Recipe({
      _userId: _userId,
      name: name,
      description: description,
      imageURL: imageURL,
      tags: tags,
      favourite: favourite,
      ingredients: ingredients,
      instructions: instructions,
    });

    recipe
      .save()
      .then((result) => res.send(result))
      .catch((err) => console.log(err));
  }

  /**
   * readRecipes - return all  recipes for specific user
   * @param {object} req - request body with the user id
   */
  static async readRecipes(req, res) {
    Recipe.find({ _userId: req.body._userId })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => console.log(err));
  }

  /**
   * readRecipe - return specific recipe by it's id
   * @param {object} req - request body with the recipe id
   */
  static async readRecipe(req, res) {
    Recipe.findOne({ _id: req.body._id })
      .then((result) => res.send(result))
      .catch((err) => console.log(err));
  }

  /**
   * updateRecipe - modify existing recipe
   * @param {object} req - request body with the modified recipe object
   */
  static async updateRecipe(req, res) {
    const {
      _id,
      name,
      description,
      imageURL,
      tags,
      favourite,
      ingredients,
      instructions,
    } = req.body;
    Recipe.findByIdAndUpdate(
      { _id },
      {
        name: name,
        description: description,
        imageURL: imageURL,
        tags: tags,
        favourite: favourite,
        ingredients: ingredients,
        instructions: instructions,
      }
    )
      .then((result) =>
        res.send({
          _id,
          name,
          description,
          imageURL,
          tags,
          favourite,
          ingredients,
          instructions,
        })
      )
      .catch((err) => console.log(err));
  }

  /**
   * deleteRecipe - delete recipe
   * @param {object} req - request body with the recipe id we want to delete
   */
  static async deleteRecipe(req, res) {
    console.log(req.body);
    Recipe.findByIdAndDelete({ _id: req.body._id })
      .then((result) => res.send(result))
      .catch((err) => console.log(err));
  }

  /**
   * readFavourites - returns user favourites recipes
   * @param {object} req - request body with the user id
   */
  static async readFavourites(req, res) {
    Recipe.find({ _userId: req.body._userId, favourite: true })
      .then((result) => res.send(result))
      .catch((err) => console.log(err));
  }
}

module.exports = RecipeAPI;
