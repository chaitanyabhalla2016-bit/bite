import express from 'express';
import { recipes } from '../data/recipes.js';
import RecipeModel from '../models/Recipe.js';

const getRecipes = async (req, res) => {
    try {
        const action = await RecipeModel.find();
        // console.log(action);
        return res.status(200).json({successMessage:`Recipes data found!`,allRecipes:action});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({errorMessage:'Something went wrong!'})
    }
}
const getRecipeById = async (req, res) => {
    const selectedRecipeId = req.params.id;
    const foundRecipe = await RecipeModel.findById(selectedRecipeId);
    res.status(200).json({recipeFound:foundRecipe});
}

const addRecipe = async (req, res) => {
    try {
        const newRecipe = {
            ...req.body
        }
        const action = await RecipeModel.create(newRecipe);
        res.status(201).json({
            successMessage: 'Recipe added successfully.',
            recipe: newRecipe
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ errorMessage: 'Something went wrong!' });
    }    
}

const removeRecipe = async (req, res) => {
    const recipeId = req.params.id;
    // const recipeIndex = recipes.findIndex(recipe => recipe.id === recipeId);
    // recipes.splice(recipeIndex,1);
    await RecipeModel.findByIdAndDelete(recipeId);
    
    res.status(200).json({
        successMessage: 'Recipe removed successfully.'
    });
}

const updateRecipe = async (req, res) => {
    const recipeId = req.params.id;
    // const recipeIndex = recipes.findIndex(recipe => recipe.id === recipeId);
    const updatedRecipe = {
        ...req.body
    };
    await RecipeModel.findByIdAndUpdate(recipeId,updatedRecipe);
    // recipes[recipeIndex] = updatedRecipe;
    res.status(200).json({
        successMessage: 'Recipe updated successfully.',
        recipe: updatedRecipe
    });
}

const relatedRecipes = async (req, res) => {
    const cateogySelected = req.params.category;
    const itemSelected = req.params.id;
    const selectedCategoryRecipes = await RecipeModel.find({category:cateogySelected,_id:{$ne:itemSelected}}).limit(3);
    // console.log(selectedCategoryRecipes);
    // return;
    res.status(200).json({ selectedCategory: selectedCategoryRecipes });
}

const filteredRecipes = async (req,res) => {
    const paramsObj = req.params.filters;
    console.log(typeof(JSON.parse(paramsObj)));
    // for (let x in req.params.filters){
    //     console.log(`${x}: ${req.params.filters[x]}`);
    // }
    return;
}

export {getRecipes,getRecipeById,addRecipe,removeRecipe,updateRecipe,relatedRecipes,filteredRecipes}