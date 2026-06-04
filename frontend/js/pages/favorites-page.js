// import { recipes } from '../data/recipes.js';
import { getFavorites,removeFavorite } from '../utils/favorites.js';
import { favoriteRecipeCard } from '../utils/render.js';
const favoritesContainer = document.querySelector('#favorites-container');
import CONFIG from '../common/config.js';
let recipes = [];

import {
    updateFavoriteCount,
    updateCopyrightYear
} from '../common/common-scripts.js';

updateFavoriteCount();
updateCopyrightYear();

async function fetchRecipes() {
    const response = await fetch(`${CONFIG.URI}/api/recipes`);
    if(!response.ok){
        console.log(`Check backend code, inside controller`);
        return;
    }
    const data = await response.json();
    recipes = data.allRecipes;
}

export function displayFavoriteRecipes() {
    const favList = getFavorites();
    console.log(favList);
    if (favList.length === 0) {
        favoritesContainer.innerHTML = `<div class="empty-state text-center py-5">
                <i class="bi bi-heart display-1 text-warning"></i>
                <h2 class="display-5 mt-4">
                    No Favorites Yet
                </h2>
                <p class="lead">
                    Start saving recipes you love and they'll appear here.
                </p>
                <button class="btn btn-warning btn-lg mt-3">
                    Explore Recipes
                </button>
            </div>`;
        return;
    }
    const filteredFavRecipes = recipes.filter(recipe => favList.includes(recipe.id));
    console.log(filteredFavRecipes);    
    const favoriteRecipesCards = filteredFavRecipes.map(favRecipe => favoriteRecipeCard(favRecipe)).join('');
    favoritesContainer.innerHTML = favoriteRecipesCards;
}

favoritesContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('favorite-icon')) {
        event.preventDefault();
        removeFavorite(Number(event.target.dataset.recipeId));
        displayFavoriteRecipes();
    }
})

async function init(){
    await fetchRecipes();        
    displayFavoriteRecipes();
}

init();
