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

router.put('/', recipeController.updateRecipes, (req, res) => {
  res.status(200).send(res.updateResult);
});

router.delete('/delete', recipeController.deleteRecipes, (req, res) => {
  res.status(200).send(res.deleteResult);
});

module.exports = router;
