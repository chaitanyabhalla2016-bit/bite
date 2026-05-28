// import { filterRecipes } from './filters';

export function createRecipeCard(recipe) {
   return `<div class="col">
        <div class="recipe-card card h-100">
            <div class="position-relative">
                <img
                    src="./assets/images/${recipe.image}"
                    class="card-img-top recipe-card-img"
                    alt="${recipe.title}" loading="lazy">
                <div class="favorite-icon position-absolute end-0 top-0 me-3 mt-3">
                    <i class="bi bi-heart"></i>
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
                <div class="recipe-meta d-flex gap-4 mt-4">
                    <span>
                        <i class="bi bi-alarm text-info me-2"></i>
                        ${recipe.cookTime}
                    </span>
                    <span>
                        <i class="bi bi-fire text-danger me-2"></i>
                        ${recipe.calories} kcal
                    </span>
                </div>
            </div>
        </div>
    </div>
    `;
}