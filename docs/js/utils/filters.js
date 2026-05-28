// import { recipes } from '../data/recipes';

export function filterRecipes(initialArray = [],filterMode = '', fieldValue = '') {
    const recipeList = initialArray.filter(recipe => recipe[filterMode] === fieldValue);
    return recipeList;
}

export function applyFilters(allRecipes = [], filterObject = {}) {
    console.log(filterObject);
    
    // const recipeList = allRecipes.filter(recipe => {
    //     return recipe.category === categoryFilter && recipe.difficulty === difficultyFilter && recipe.cookTime <= parseInt(cookTimeFilter)
    // });
    // return recipeList;

    return ("Apply filters working!");
}