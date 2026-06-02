import { recipes } from '../data/recipes.js';
import { getFavorites,removeFavorite } from '../utils/favorites.js';
import { favoriteRecipeCard } from '../utils/render.js';
const favoritesContainer = document.querySelector('#favorites-container');

import {
    updateFavoriteCount,
    updateCopyrightYear
} from '../common/common-scripts.js';

updateFavoriteCount();
updateCopyrightYear();

export function displayFavoriteRecipes() {
    const favList = getFavorites();
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

displayFavoriteRecipes();