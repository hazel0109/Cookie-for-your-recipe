import axios from 'axios';
class RecipeService {
  static async getRecipes(url) {
    try {
      let result = await axios.get(url);
      return result.data;
    } catch (err) {
      console.log(err);
    }
  }

  static async postRecipes() {
    try {
      let result = await axios.post();
    } catch (err) {
      console.log(err);
    }
  }
}

export default RecipeService;