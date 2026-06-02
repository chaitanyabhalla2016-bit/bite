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

async function showFullRecipeDetails() {
    try {
        // 1. Fetch the primary recipe data first to determine its category
        const recipeResponse = await fetch(`${URI}/api/recipes/${Number(itemId)}`);
        if (!recipeResponse.ok) {
            throw new Error('Failed to fetch primary recipe details');
        }
        
        const recipeData = await recipeResponse.json();
        const recipe = recipeData.recipeFound;

        // Handle case where recipe search yields no results
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

        // 2. Fetch the related recipes concurrently with parsing the original payload
        // This keeps performance fast without needing the category upfront at initiation
        const relatedRecipesResponse = await fetch(`${URI}/api/recipes/related/${recipe.category}`);
        if (!relatedRecipesResponse.ok) {
            throw new Error('Failed to fetch related recipes');
        }
        
        const relatedRecipesData = await relatedRecipesResponse.json();
        const relatedRecipes = relatedRecipesData.selectedCategory;

        // 3. Render Component UIs
        const recipeOverviewCard = recipeDetailsOverview(recipe);
        recipeOverview.innerHTML = recipeOverviewCard;
        
        const recipeIngredientsCard = recipeDetailsIngredients(recipe.ingredients);
        recipeIngredients.innerHTML = recipeIngredientsCard;
        
        const recipeDetailsStepsCard = recipeDetailsSteps(recipe.steps);
        recipeSteps.innerHTML = recipeDetailsStepsCard;
        
        const recipeDetailsNutritionsCard = recipeDetailsNutritions(recipe);
        recipeNutritions.innerHTML = recipeDetailsNutritionsCard;
        
        // Render related recipes strip
        if (!relatedRecipes || relatedRecipes.length === 0) {
            relatedRecipesStrip.innerHTML = `
                <div class="container py-5">
                    <div class="alert alert-danger">
                        No related recipes found.
                    </div>
                </div>`;  
        } else {
            const recipeDetailsRelatedRecipesCard = recipeDetailsRelatedRecipes(relatedRecipes);
            relatedRecipesStrip.innerHTML = recipeDetailsRelatedRecipesCard;
        }

    } catch (error) {
        console.error("Error updating UI:", error.message);
    }
}

showFullRecipeDetails();
