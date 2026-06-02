import { recipeDetailsOverview, recipeDetailsIngredients, recipeDetailsSteps, recipeDetailsRelatedRecipes, recipeDetailsNutritions } from '../utils/render.js';
import {
    updateFavoriteCount,
    updateCopyrightYear
} from '../common/common-scripts.js';
import CONFIG from '../common/config.js';
const URI = CONFIG.URI;

updateFavoriteCount();
updateCopyrightYear();

const itemId = new URLSearchParams(window.location.search).get('id') || 1;

const recipeOverview = document.getElementById('recipe-details-overview');
const recipeIngredients = document.getElementById('recipe-details-ingredients');
const recipeSteps = document.getElementById('recipe-details-steps');
const recipeNutritions = document.getElementById('recipe-details-nutritions');
const relatedRecipesStrip = document.getElementById('recipe-details-related-recipes');

async function showFullRecipeDetails(){
        const recipesResponse = await fetch(`${URI}/api/recipes`);
        if(!recipesResponse.ok){
            console.log(`Something went wrong. Check backend!`);
            return;
        }
        const recipiesData  = await recipesResponse.json();
        const recipes = recipiesData .allRecipes;

        const response = await fetch(`${URI}/api/recipes/${Number(itemId)}`);
        if(!response.ok){
            console.log(`Something went wrong. Check backend!`);
            return;
        }
        const data = await response.json();
        const recipe = data.recipeFound;
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