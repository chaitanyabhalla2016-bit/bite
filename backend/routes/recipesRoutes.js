import express from 'express';
const recipeRoutes = express.Router();

import {getRecipes,getRecipeById} from '../controllers/recipesController.js';

recipeRoutes.get('/api/recipes',getRecipes);
recipeRoutes.get('/api/recipes/:id',getRecipeById);

export default recipeRoutes;
