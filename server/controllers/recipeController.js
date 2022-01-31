const MongoDb = require('mongodb');
const { db } = require('../database/database');

const recipeController = {};

recipeController.getRecipes = async (req, res, next) => {
  try {
    const result = await db.db.collection('recipes').find({}).toArray();
    res.recipes = result;
    next();
  } catch (err) {
    console.log(err);
  }
};

recipeController.storeRecipe = async (req, res, next) => {
  try {
    const document = {
      title: req.body.title,
      instructions: req.body.instructions,
      ingredients: req.body.ingredients,
    };
    await db.db.collection('recipes').insertOne(document);
    next();
  } catch (err) {
    console.log(err);
  }
};

recipeController.updateRecipes = async (req, res, next) => {
  try {
    const document = {
      title: req.body.title,
      instructions: req.body.instructions,
      ingredients: req.body.ingredients,
    };
    const result = await db.db
      .collection('recipes')
      .updateOne({ _id: MongoDb.ObjectId(req.body._id) }, { $set: document });
    res.updateResult = result;
    next();
  } catch (err) {
    console.log(err);
  }
};

recipeController.deleteRecipes = async (req, res, next) => {
  try {
    const result = await db.db
      .collection('recipes')
      .deleteOne({ _id: MongoDb.ObjectId(req.body._id) });
    res.deleteResult = result;
    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = { recipeController };
