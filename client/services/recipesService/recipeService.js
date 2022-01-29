import axios from 'axios';
class RecipeService {
  static async getRecipes() {
    try {
      let result = await axios.get('http://localhost:3000/recipes');
      return result.data;
    } catch (err) {
      console.log(err);
    }
  }

  static async postRecipes(data) {
    try {
      let result = await axios.post('http://localhost:3000/recipes', data);
      console.log(result);
      return result.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default RecipeService;
