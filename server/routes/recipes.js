const express = require('express');
const { recipeController } = require('../controllers/recipeController');
const router = express.Router();

router.get('/', recipeController.getRecipes, (req, res) => {
  return res.status(200).send(res.recipes);
});

router.post(
  '/',
  recipeController.storeRecipe,
  recipeController.getRecipes,
  (req, res) => {
    res.status(200).send(res.recipes);
  }
);

module.exports = router;
