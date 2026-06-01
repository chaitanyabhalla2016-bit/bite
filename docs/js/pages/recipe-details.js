import {recipes} from '../data/recipes.js';
import {recipeDetailsOverview,recipeDetailsIngredients,recipeDetailsSteps,recipeDetailsRelatedRecipes,recipeDetailsNutritions} from '../utils/render.js';

const itemId = new URLSearchParams(window.location.search).get('id');
const recipe = recipes.find(recipe => recipe.id === Number(itemId));

const recipeOverview = document.getElementById('recipe-details-overview');
const recipeIngredients = document.getElementById('recipe-details-ingredients');
const recipeSteps = document.getElementById('recipe-details-steps');
const recipeNutritions = document.getElementById('recipe-details-nutritions');
const relatedRecipesStrip = document.getElementById('recipe-details-related-recipes');

function showFullRecipeDetails(){
        if (!recipe) {
        document.body.innerHTML = `
            <div class="container py-5">
                <div class="alert alert-danger">
                    Recipe not found.
                </div>
            </div>
        `;
        return;
    }
    const currentCategory = recipe.category;
    const recipeOverviewCard = recipeDetailsOverview(recipe);
    recipeOverview.innerHTML = recipeOverviewCard;
    const recipeIngredientsCard = recipeDetailsIngredients(recipe.ingredients);
    recipeIngredients.innerHTML = recipeIngredientsCard;
    const recipeDetailsStepsCard = recipeDetailsSteps(recipe.steps)
    recipeSteps.innerHTML = recipeDetailsStepsCard;
    const recipeDetailsNutritionsCard = recipeDetailsNutritions(recipe)
    recipeNutritions.innerHTML = recipeDetailsNutritionsCard;

    const relatedRecipes = recipes.filter(reRecipe => reRecipe.category === currentCategory && reRecipe.id != recipe.id);

    const recipeDetailsRelatedRecipesCard = recipeDetailsRelatedRecipes(relatedRecipes);
    relatedRecipesStrip.innerHTML = recipeDetailsRelatedRecipesCard;
}

showFullRecipeDetails();