// import { recipes } from '../data/recipes.js';
import { createRecipeCard,setOptions } from '../utils/render.js';
import { categoryList } from '../utils/misc.js';
import { filterRecipes } from '../utils/filters.js';
import { toggleFavorite, removeFavorite, getFavorites, isFavorite } from '../utils/favorites.js';
import CONFIG from '../common/config.js';
import {
    updateFavoriteCount,
    updateCopyrightYear
} from '../common/common-scripts.js';

let recipes = [];

const URI = CONFIG.URI;
console.log(URI);

updateFavoriteCount();
updateCopyrightYear();

const recipesContainer = document.querySelector('#recipesContainer');
const recipeSearchFilter = document.querySelector('#recipeSearchFilter');
const recipeCookTimeFilter = document.querySelector('#recipeCookTimeFilter');
const recipeDifficultyFilter = document.querySelector('#recipeDifficultyFilter');
const recipeCategoryFilter = document.querySelector('#recipeCategoryFilter');
const filterWrapper = document.querySelector('.filter-wrapper');
const activeFilters = {
   category: "all",
   difficulty: "all",
   cookTime: "all",
   searchterm: ""
};

async function getRecipes(){
    try{
        const response = await fetch(`${URI}/api/recipes`);
        const recipesData = await response.json();
        if(!response.ok){
            throw new Error(recipesData.errorMessage || "Failed to fetch recipes. Please try again later.");
            return;
        }
        recipes = recipesData.allRecipes;
        return recipes;
    }catch (error) {
        console.log(error);
        recipesContainer.innerHTML = `
        <div class="alert alert-info" role="alert">
            ${error.message}
        </div>`;
    }
}

function displayRecipes(recipeList = recipes,emptyMessage=`Your recipe book is waiting for your culinary magic! Add your favorite dishes and let's get cooking.`) {
    try {
        recipesContainer.innerHTML = "";
        if (recipeList.length === 0) {
            recipesContainer.innerHTML = `<div class="w-100 alert alert-info" role="alert">${emptyMessage}</div>`;
            return;
        } 
        let recipeCards = "";
            recipeList.forEach(recipe => {
                recipeCards += createRecipeCard(recipe);
            });
        recipesContainer.innerHTML = recipeCards;
    } catch (error) {
        console.log(error);
        recipesContainer.innerHTML = `
        <div class="alert alert-info" role="alert">
            ${error.message}
        </div>`;
    }
}

filterWrapper.addEventListener(
    'change',
    handleFilterUpdate
);

filterWrapper.addEventListener(
    'input',
    handleFilterUpdate
);
recipesContainer.addEventListener(
    'click', handleFavUpdate
);
function handleFavUpdate(event) {
    if (event.target.classList.contains('favorite-icon')) {
        event.preventDefault();
        const itemId = Number(event.target.dataset.recipeId)
        toggleFavorite(itemId);
        applyFilters();
        updateFavoriteCount();
    }
}

function handleFilterUpdate(event) {
    const filterMode = event.target.dataset.filter;
    if (!filterMode) return;
    activeFilters[filterMode] = event.target.value;
    applyFilters();
}

function applyFilters(){
    const filteredRecipes = filterRecipes(recipes, activeFilters);
    displayRecipes(
        filteredRecipes,
        "No recipes found for selected filters."
    );
}
function setCategories() {
    const categoriesList =
        setOptions(categoryList(recipes));

    recipeCategoryFilter.innerHTML = `
        <option value="all">All Categories</option>
        ${categoriesList}
    `;
}
async function init() {
    recipes = await getRecipes();
    displayRecipes(recipes);
    setCategories();
}

init();
