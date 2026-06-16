// import { filterRecipes } from './filters';
import { isFavorite } from './favorites.js';

export function createRecipeCard(recipe) {
    const favCheck = isFavorite(recipe._id)?'bi-heart-fill text-warning':'bi-heart'
    
   return `<div class="col">
        <a href="./recipe-details.html?id=${recipe._id}" class="recipe-card card h-100">
            <div class="position-relative">
                <img
                    src="./assets/images/${recipe.image}"
                    class="card-img-top recipe-card-img"
                    alt="${recipe.title}" loading="lazy">
                <div class="w-100 d-flex justify-content-between position-absolute z-3 end-0 top-0 px-4 mt-3">
                    <i class="bi bi-pencil-square edit-icon" data-recipe-id="${recipe._id}"></i>
                    <i class="favorite-icon bi ${favCheck}" data-recipe-id="${recipe._id}"></i>
                </div>
            </div>
            <div class="card-body p-4">
                <div class="d-flex justify-content-between mb-3">
                    <span class="badge text-bg-warning">
                        ${recipe.category}
                    </span>
                    <span class="recipe-rating">
                        <i class="bi bi-star-fill text-warning"></i>
                        ${recipe.rating}
                    </span>
                </div>
                <h3 class="card-title mb-3">
                    ${recipe.title}
                </h3>
                <p class="card-text recipe-description">
                    ${recipe.description}
                </p>
                <div class="recipe-meta d-flex justify-content-between align-items-center gap-4 mt-4">
                    <span>
                        <i class="bi bi-alarm text-info me-2"></i>
                        ${recipe.cookTime} Mins
                    </span>
                    <span>
                        <i class="bi bi-fire text-danger me-2"></i>
                        ${recipe.nutrition.calories} KCal
                    </span>
                    <span class="delete-recipe-btn position-relative z-3">
                        <i data-recipe-id="${recipe._id}" class="bi bi-trash3 text-danger" style="font-size:20px;"></i>
                    </span>
                </div>
            </div>
        </a>
    </div>
    `;
}

export function recipeDetailsOverview(recipeSelected) {
    const favCheck = isFavorite(recipeSelected.id) ? 'bi-heart-fill text-warning' : 'bi-heart';
    const saveBtnText = isFavorite(recipeSelected.id) ? 'Remove Favorite' : 'Save Recipe';
    if (!recipeSelected) return;
    return `<div class="col-lg-6">
        <img
            src="./assets/images/${recipeSelected.image}"
            class="img-fluid recipe-hero-img"
            alt="Creamy Garlic Pasta">
    </div>
    <div class="col-lg-6">
        <span class="badge text-uppercase fw-medium fs-6 text-bg-warning mb-4 px-3 py-2">
            ${recipeSelected.category}
        </span>
        <h1 class="display-2 text-warning mb-4">
            ${recipeSelected.title}
        </h1>
        <p class="lead recipe-description mb-5">
            ${recipeSelected.description}
        </p>
        <!-- META -->
        <div class="recipe-meta d-flex flex-wrap gap-4 mb-5">
            <div class="meta-item">
                <i class="bi bi-star-fill text-warning me-2"></i>
                ${recipeSelected.rating} Rating
                
            </div>
            <div class="meta-item">
                <i class="bi bi-alarm text-info me-2"></i>
                ${recipeSelected.cookTime} mins
            </div>
            <div class="meta-item">
                <i class="bi bi-fire text-danger me-2"></i>
                ${recipeSelected.nutrition.calories} KCal
            </div>
        </div>
        <!-- BUTTONS -->
        <div class="d-flex gap-3 flex-wrap">
            <button class="btn btn-warning btn-lg">
                Start Cooking
            </button>
            <button class="btn btn-outline-warning btn-lg save-recipe-btn" data-recipe-id="${recipeSelected.id}">
                <i class="bi ${favCheck} me-2" data-recipe-id="${recipeSelected.id}"></i>
                ${saveBtnText}
            </button>
        </div>
    </div>`;
}
export function recipeDetailsIngredients(recipeIngredients) {
    if (!recipeIngredients || recipeIngredients.length === 0) return;
    const ingredientsHTML = recipeIngredients.map(ingredient => {
        return `<li>
        <i class="bi bi-check-circle-fill text-warning me-3"></i>
        ${ingredient}
        </li>`;
    }).join('');
    return ingredientsHTML; // 3. Return the final string
}


export function recipeDetailsSteps(recipeSteps){
    if (!recipeSteps || recipeSteps.length === 0) return '';
    const stepsHTML = recipeSteps.map((step,index) => {
        return `
            <div class="step-card d-flex gap-4">
                <div class="step-number">
                    ${index+1}
                </div>
                <div>
                    <h4 class="mb-3">
                        ${step}
                    </h4>
                </div>
            </div>
        `;
    }).join(``);
    return stepsHTML;
}
export function recipeDetailsNutritions(recipe) {

    if (!recipe || !recipe.nutrition) return '';
    let nutritionHTML = '';
    let measurementsIn = '';
    nutritionHTML += Object.entries(recipe.nutrition)
        .map(([key, value]) => {
            measurementsIn = (key === 'calories') ? 'KCal' : 'g';
            return `
            <div class="col">
                <div class="nutrition-card text-center">
                    <h3 class="text-warning mb-3">
                        ${value} ${measurementsIn}
                    </h3>
                    <p class="mb-0">
                        ${key.charAt(0).toUpperCase() + key.slice(1)}
                    </p>
                </div>
            </div>
        `})
        .join('');

    return nutritionHTML;
}

export function recipeDetailsRelatedRecipes(filteredRecipes){
    
    if (!filteredRecipes || filteredRecipes.length === 0) return '';
    let relatedRecipesHTML = filteredRecipes.slice(0, 3).map( fRecipe => 
    `<div class="col">
        <a href="./recipe-details.html?id=${fRecipe._id}" class="recipe-card card h-100">
            <img
                src="./assets/images/${fRecipe.image}"
                class="card-img-top recipe-card-img"
                alt="${fRecipe.title}">
            <div class="card-body p-4">
                <h3 class="card-title mb-3">
                    ${fRecipe.title}
                </h3>
                <p class="recipe-description">
                    ${fRecipe.description}
                </p>
            </div>
        </a>
    </div>`).join('');
    return relatedRecipesHTML;
}

export function favoriteRecipeCard(favRecipe) {
    return `<div class="col">
        <a class="recipe-card card h-100" href="./recipe-details.html?id=${favRecipe._id}">
            <img src="./assets/images/${favRecipe.image}"
                class="card-img-top recipe-card-img"
                alt="${favRecipe.title}}">
            <div class="card-body p-4">
                <div class="d-flex justify-content-between mb-3">
                    <span class="badge text-bg-warning">
                        ${favRecipe.category}
                    </span>
                    <i class="favorite-icon position-relative z-3 bi  bi-heart-fill text-danger" data-recipe-id="${favRecipe._id}"></i>
                </div>
                <h3 class="card-title mb-3">
                    ${favRecipe.title}
                </h3>
                <p class="recipe-description">
                    ${favRecipe.description}
                </p>
            </div>
        </a>
    </div>`
}

export function homePopularCategories(recipesList) {

    let popularRecipesCard = '';

    recipesList.forEach(recipe => {
        popularRecipesCard += `<div class="col">
            <div class="card">
                <img src="./assets/images/category_${recipe.category}.jpg" class="card-img-top" alt="${recipe.category} food">
                <div class="card-body">
                    <h3 class="card-title text-warning">${recipe.category}</h3>
                    <p class="card-text">${recipe.count} Recipes</p>
                </div>
            </div>
        </div>`;
    });
    return popularRecipesCard;
}

export function homeFeaturedRecipes(recipesList) {
    let featuredRecipesCard = '';
    recipesList.forEach(recipe => {
        const favCheck = isFavorite(recipe._id)?'bi-heart-fill text-warning':'bi-heart'
        featuredRecipesCard += `<div class="col">
            <div class="card featured-card position-relative" style="max-width: 540px;">
                <div class="row g-0 h-100">
                    <div class="col-md-4 h-100">
                    <img src="./assets/images/${recipe.image}" class="img-fluid featured-card-img rounded-start" alt="${recipe.title}">
                    </div>
                    <div class="col-md-8 h-100">
                    <div class="card-body justify-content-center d-flex flex-column h-100 p-2">
                        <div class="position-absolute z-3 end-0 top-0 me-3 mt-3">
                            <i class="favorite-icon bi ${favCheck}" data-recipe-id="${recipe._id}"></i>
                        </div>
                        <h3 class="card-title text-warning">${recipe.title}</h3>
                        <p class="card-text">${recipe.description}</p>
                        <p class="card-text mb-0"><small class="text-body-secondary"><i class="bi bi-star-fill text-warning me-2"></i>${recipe.rating}</small></p>
                        <p class="card-text"><small class="text-body-secondary"><i class="bi bi-alarm text-bite-primary me-2"></i>${recipe.cookTime}</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>`
    });
    return featuredRecipesCard;
}

export function setOptions(list) {
    return list.map(li => `<option value="${li}">${li}</option>`).join('');
}