import {
    updateFavoriteCount,
    updateCopyrightYear
} from '../common/common-scripts.js';

import { toggleFavorite } from '../utils/favorites.js';
import { homePopularCategories,homeFeaturedRecipes } from '../utils/render.js';
import { getRecipeCategoryCount,categoryList,getTopFeaturedRecipes} from '../utils/misc.js';
import { getFeaturedRecipes } from '../utils/filters.js';
import CONFIG from '../common/config.js';

const URI = CONFIG.URI;
let recipes = [];
const popularCategoriesContainer = document.querySelector('#popularCategoriesContainer');
const featuredRecipesContainer = document.querySelector('#featuredRecipesContainer');
const categoriesCountContainer = document.querySelector('#categoriesCountContainer');
const recipesCountContainer = document.querySelector('#recipesCountContainer');
const featuredCountContainer = document.querySelector('#featuredCountContainer');


updateFavoriteCount();
updateCopyrightYear();

async function getRecipes() {
    const response = await fetch(`${URI}/api/recipes`);
    const data = await response.json();
    return data.allRecipes;
    
}


function displayPopularCategories() {
    const recipeCount = getRecipeCategoryCount(recipes);
    const recipesCard = homePopularCategories(recipeCount);
    popularCategoriesContainer.innerHTML = recipesCard;
    // console.log('Home.js final recipe card',recipesCard);
}

function displayFeaturedRecipes() {
    const featuredRecipes = getFeaturedRecipes(recipes);
    const sortedFtRecipes = getTopFeaturedRecipes(featuredRecipes);
    const featuredRecipesCard = homeFeaturedRecipes(sortedFtRecipes);
    featuredRecipesContainer.innerHTML = featuredRecipesCard;
}

function getStats() {
    const categoriesCount = categoryList(recipes);
    const featuredRecipes = getFeaturedRecipes(recipes);
    categoriesCountContainer.textContent = categoriesCount.length;
    recipesCountContainer.textContent = recipes.length;
    featuredCountContainer.textContent = featuredRecipes.length;
}

featuredRecipesContainer.addEventListener('click', function (event) {
    const item = event.target;
    if (item.classList.contains('favorite-icon')) {
        const itemId = Number(item.dataset.recipeId);
        toggleFavorite(itemId);
        displayFeaturedRecipes();
        updateFavoriteCount();
    }
})

async function init() {
    recipes = await getRecipes();
    // console.log(`Init recipes:`,recipes);
    displayPopularCategories();
    displayFeaturedRecipes();
    getStats();
}

init();
