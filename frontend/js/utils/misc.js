export function getRecipeCategoryCount(recipesList) {
    const countList = Object.entries(recipesList.reduce((acc, recipe) => {
        acc[recipe.category] = (acc[recipe.category] || 0) + 1;
        return acc;
    }, {})).map(([category,count])=>({category,count})).sort((a, b) => b['count'] - a['count']).slice(0,6);
    return countList;
}

export function getTopFeaturedRecipes(recipesList) {
    const featuredList = recipesList.toSorted((a, b) => b.rating - a.rating).slice(0,3);
    return featuredList;
}
export function categoryList(recipeList) {
    return [...new Set(recipeList.map(recipe => recipe.category))];
}

// export function getCount(recipesList,prop) {
//     const propertyCount = recipesList.reduce((acc, recipe) => { 
//         recipe.category === prop
//         acc[prop] = (acc[recipe[prop]] || 0) + 1;
//     })
// }