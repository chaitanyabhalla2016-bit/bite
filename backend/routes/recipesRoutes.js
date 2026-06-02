import express from 'express';
const recipeRoutes = express.Router();

import {getRecipes,getRecipeById,addRecipe,removeRecipe,updateRecipe,relatedRecipes} from '../controllers/recipesController.js';

recipeRoutes.get('/api/recipes',getRecipes);
recipeRoutes.get('/api/recipes/:id',getRecipeById);
recipeRoutes.get('/api/recipes/related/:category',relatedRecipes);
recipeRoutes.post('/api/recipes/',addRecipe);
recipeRoutes.delete('/api/recipes/:id',removeRecipe);
recipeRoutes.put('/api/recipes/:id',updateRecipe);

export default recipeRoutes;
