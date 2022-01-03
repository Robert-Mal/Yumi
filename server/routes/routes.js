const express = require("express");
const router = express.Router();
const UserAPI = require("../apis/users");
const RecipeAPI = require("../apis/recipes");

router.put("/user-update", UserAPI.updateUser);
router.delete("/user-delete", UserAPI.deleteUser);

router.post("/recipe-create", RecipeAPI.createRecipe);
router.post("/recipe-read", RecipeAPI.readRecipes);
router.put("/recipe-update", RecipeAPI.updateRecipe);
router.delete("/recipe-delete", RecipeAPI.deleteRecipe);
router.post("/recipe-by-id", RecipeAPI.readRecipe);

router.post("/favourite-read", RecipeAPI.readFavourites);

module.exports = router;
