// import { recipes } from '../data/recipes';

// export function filterRecipes(initialArray = [],filterMode = '', fieldValue = '') {
//     const recipeList = initialArray.filter(recipe => recipe[filterMode] === fieldValue);
//     return recipeList;
// }

export function filterRecipes(recipeList, activeFilters) {
    let filteredRecipes = [...recipeList];
    if(activeFilters.category !== "all") {
        filteredRecipes = filteredRecipes.filter(recipe =>
            recipe.category === activeFilters.category
        );
    }
    if(activeFilters.difficulty !== "all") {
        filteredRecipes = filteredRecipes.filter(recipe =>
            recipe.difficulty === activeFilters.difficulty
        );
    }
    if(activeFilters.cookTime !== "all") {
        filteredRecipes = filteredRecipes.filter(recipe =>
            recipe.cookTime <= Number(activeFilters.cookTime)
        );
    }
    if(activeFilters.searchterm != ""){
        const searchTerm = activeFilters.searchterm.trim().toLowerCase();
        filteredRecipes = filteredRecipes.filter(
            recipe =>{
                return(recipe?.category?.toLowerCase().includes(searchTerm) || recipe?.title?.toLowerCase().includes(searchTerm) || recipe?.description?.toLowerCase().includes(searchTerm) || recipe?.ingredients?.some(ingredient => 
                    ingredient?.toLowerCase().includes(searchTerm)
                ))
            }
        )
    }
    return filteredRecipes;
}

export function getFeaturedRecipes(recipesList){
    const featuredRecipesList = recipesList.filter(recipe => recipe.featured === true);
    return featuredRecipesList;
}