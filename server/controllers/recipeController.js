const MongoDb = require('mongodb');
const { db } = require('../database/database');

const recipeController = {};

recipeController.storeRecipe = async (req, res, next) => {};

recipeController.getRecipes = async (req, res, next) => {
  try {
    // console.log('error');
    // console.log(`db: ${db.db}`);
    const result = await db.db.collection('recipes').find({}).toArray();
    // const result = await db.db.getCollection('recipes');
    console.log(result);
    res.recipes = result;
    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = { recipeController };
