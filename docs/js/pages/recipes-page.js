import { recipes } from '../data/recipes.js';
import { createRecipeCard } from '../utils/render.js';
import { filterRecipes,applyFilters } from '../utils/filters.js';

const recipesContainer = document.querySelector('#recipesContainer');
const recipeSearchFilter = document.querySelector('#recipeSearchFilter');
const recipeCookTimeFilter = document.querySelector('#recipeCookTimeFilter');
const recipeDifficultyFilter = document.querySelector('#recipeDifficultyFilter');
const recipeCategoryFilter = document.querySelector('#recipeCategoryFilter');
const filterWrapper = document.querySelector('.filter-wrapper');
const activeFilters = {
   category: "all",
   difficulty: "all",
   cookTime: "all"
};

function displayRecipes(recipeList = recipes, emptyMessage=`Your recipe book is waiting for your culinary magic! Add your favorite dishes and let's get cooking.`) {
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
        recipesContainer.innerHTML = `
        <div class="alert alert-info" role="alert">
            ${error.message}
        </div>`;
    }
}

// recipeSearchFilter.addEventListener('keyup', (event) => {
//     console.log(event.target.value); 
// });

filterWrapper.addEventListener('change', (event) => {
    const filterConstraint = event.target.dataset.filter;
    const filterConstraintValue = event.target.value;
    // console.log(filterConstraint);
    activeFilters[filterConstraint] = filterConstraintValue;
    // console.log(activeFilters);
    // return;
    
    if (activeFilters.category === "all" && activeFilters.cookTime === "all" && activeFilters.difficulty === "all") {
        displayRecipes();
    } else {
        // const filteredRecipes = filterRecipes(recipes, filterModeInput, fieldValueInput);
        // console.log(filteredRecipes);
        // displayRecipes(filteredRecipes,"No recipes found for this filter.");
        const filteredRecipes = applyFilters(recipes,activeFilters);
        console.log(filteredRecipes);
        displayRecipes(filteredRecipes,"No recipes found for this filter.");
    }
});

displayRecipes();
