import express from 'express';
import {recipes} from '../data/recipes.js';

const getRecipes = async (req,res) =>{
    return res.status(200).json({successMessage:`Recipes data found!`,allRecipes:recipes});
}
const getRecipeById = async (req,res) =>{
    const selectedRecipeId = Number(req.params.id);
    const foundRecipe = recipes.find(recipe =>recipe.id === selectedRecipeId);
    res.status(200).json({recipeFound:foundRecipe});
}
const addRecipe = async (req, res) => {
    const newRecipe = {
        id: recipes.length + 1,
        ...req.body
    }
    recipes.push(newRecipe);
    
    res.status(201).json({
        successMessage: 'Recipe added successfully.',
        recipe: newRecipe
    });
}

const removeRecipe = async (req, res) => {
    const recipeId = Number(req.params.id);
    const recipeIndex = recipes.findIndex(recipe => recipe.id === recipeId);
    recipes.splice(recipeIndex,1);
    
    res.status(200).json({
        successMessage: 'Recipe removed successfully.'
    });
}

const updateRecipe = async (req, res) => {
    const recipeId = Number(req.params.id);
    const recipeIndex = recipes.findIndex(recipe => recipe.id === recipeId);
    const updatedRecipe = {
        id:recipeId,
        ...req.body
    }
    recipes[recipeIndex] = updatedRecipe;
    res.status(200).json({
        successMessage: 'Recipe updated successfully.',
        recipe: updatedRecipe
    });
}

const relatedRecipes = async (req, res) => {
    const cateogySelected = req.params.category;
    const itemSelected = Number(req.params.id);
    const selectedCategoryRecipes = recipes.filter(recipe => recipe.category === cateogySelected && recipe.id !== itemSelected);
    // console.log(selectedCategoryRecipes);
    // return;
    res.status(200).json({ selectedCategory: selectedCategoryRecipes });
}

export {getRecipes,getRecipeById,addRecipe,removeRecipe,updateRecipe,relatedRecipes}