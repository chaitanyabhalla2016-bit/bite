import express from 'express';
import {recipes} from '../data/recipes.js';

const getRecipes = async (req,res) =>{
    return res.status(200).json({successMessage:`Recipes data found!`,allRecipes:recipes});
}
const getRecipeById = async (req,res) =>{
    const selectedRecipeId = Number(req.params.id);
    const foundRecipe = recipes.find(recipe =>recipe.id === selectedRecipeId);
    return res.status(200).json({recipeFound:foundRecipe});
}
const addRecipe = async (req,res) => 

export {getRecipes,getRecipeById}