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
    'click', handleRecipeActions
);
function handleRecipeActions(event) {
    if (event.target.classList.contains('favorite-icon')) {
        event.preventDefault();
        const itemId = event.target.dataset.recipeId;
        toggleFavorite(itemId);
        applyFilters();
        updateFavoriteCount();
    }
    if (event.target.classList.contains('edit-icon')) {
        event.preventDefault();
        const itemId = event.target.dataset.recipeId;
        window.location.assign(`./add-recipe.html?id=${itemId}`);
    }
    if (event.target.closest('.delete-recipe-btn')) {
        event.preventDefault();
        console.log(event.target.dataset.recipeId);
        const itemId = event.target.dataset.recipeId;
        window.confirm('Do you want to delete the recipe');
        if (window.confirm('Do you want to delete the recipe?')) {
            deleteRecipe(itemId);
            updateFavoriteCount();
        }
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
async function deleteRecipe(rId){
    console.log(rId);
    if (localStorage.getItem('favorites').includes(rId)) {
        if (isFavorite(rId)) {
            removeFavorite(rId);
        }
        const response = await fetch(`${URI}/api/recipes/${rId}`, {
            method: "DELETE"
        });
        if (!response.ok) {
            console.log('Something went wrong!');
            return;
        }
        const data = await response.json();
        console.log(data.successMessage);
        init();
    }
}
async function init() {
    recipes = await getRecipes();
    displayRecipes(recipes);
    setCategories();
}

init();
