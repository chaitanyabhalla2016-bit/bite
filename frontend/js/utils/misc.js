export function getRecipeCategoryCount(recipesList) {
    const countList = Object.entries(recipesList.reduce((acc, recipe) => {
        acc[recipe.category] = (acc[recipe.category] || 0) + 1;
        return acc;
    }, {})).map(([category,count])=>({category,count})).sort((a, b) => b['count'] - a['count']).slice(0,6);
    return countList;
}

export function animateCounter(element, targetNumber, suffix = '', duration = 1500) {
    if (!element) return;
    
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentCount = Math.floor(progress * targetNumber);
        
        // Render the current count with commas and its designated suffix
        element.textContent = `${currentCount.toLocaleString()}${suffix}`;

        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            // Guarantee the exact final figure is locked in
            element.textContent = `${targetNumber.toLocaleString()}${suffix}`;
        }
    }

    // Fire animation loop if above 0, otherwise hard-set to 0 immediately
    if (targetNumber > 0) {
        window.requestAnimationFrame(step);
    } else {
        element.textContent = `0${suffix}`;
    }
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