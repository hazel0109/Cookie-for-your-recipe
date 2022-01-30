import axios from 'axios';
class RecipeService {
  static async getRecipes() {
    try {
      let result = await axios.get('http://localhost:3000/recipes');
      return result.data;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async postRecipes(data) {
    try {
      let result = await axios.post('http://localhost:3000/recipes', data);
      return result.data;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default RecipeService;
