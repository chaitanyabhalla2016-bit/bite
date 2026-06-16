import { updateFavoriteCount, updateCopyrightYear } from '../common/common-scripts.js';
import CONFIG from '../common/config.js';

const URI = CONFIG.URI;

const recipeFormBtn = document.querySelector('#recipeFormBtn');
const formTitle = document.querySelector('h2.card-title');
const addRecipeForm = document.querySelector('#add-recipe-form');

updateCopyrightYear();
updateFavoriteCount();

const params = new URLSearchParams(window.location.search);
const itemIdParam = params.get('id');

const editMode = !!itemIdParam;

let itemId = '';
let currentRecipe = null;

if (editMode) {
    itemId = itemIdParam;
    loadRecipeForEdit();
}

async function loadRecipeForEdit() {
    try {
        const recipeResponse = await fetch(`${URI}/api/recipes/${itemId}`);

        if (!recipeResponse.ok) {
            throw new Error('Failed to fetch recipe details');
        }

        const recipeData = await recipeResponse.json();
        const recipe = recipeData.recipeFound;

        if (!recipe) {
            document.body.innerHTML = `
                <div class="container py-5">
                    <div class="alert alert-danger">
                        Recipe not found.
                    </div>
                </div>
            `;
            return;
        }

        currentRecipe = recipe;

        let element;

        for (const key in recipe) {

            if (key === 'ingredients' || key === 'steps') {

                element = document.querySelector(`#${key}`);

                if (element) {
                    element.value = recipe[key].join('\n');
                }

            } else if (key === 'nutrition') {

                Object.entries(recipe.nutrition).forEach(([nutrient, value]) => {

                    element = document.querySelector(`#${nutrient}`);

                    if (element) {
                        element.value = value;
                    }

                });

            } else {

                element = document.querySelector(`#${key}`);

                if (element) {
                    element.value = recipe[key];
                }

            }
        }

        recipeFormBtn.textContent = 'Update Recipe';
        formTitle.textContent = 'Edit Recipe';

    } catch (error) {
        console.log(error.message);
    }
}

addRecipeForm.addEventListener('submit', addRecipe);

async function addRecipe(event) {

    event.preventDefault();

    try {

        const formData = Object.fromEntries(
            new FormData(addRecipeForm)
        );

        console.log(formData);

        const recipeObject = {
            title: formData.title,
            category: formData.category,
            description: formData.description,
            // featured: formData.featured === 'on',
            cookTime: Number(formData.cookTime),
            servings: Number(formData.servings),

            image: formData.image,

            ingredients: formData.ingredients
                .split('\n')
                .filter(item => item.trim()),

            steps: formData.steps
                .split('\n')
                .filter(item => item.trim()),

            nutrition: {
                calories: Number(formData.calories),
                protein: Number(formData.protein),
                carbs: Number(formData.carbs),
                fat: Number(formData.fat)
            },
            featured: formData.featured === 'on',
            trending: editMode
                ? currentRecipe.trending
                : false,
            rating: editMode
                ? currentRecipe.rating
                : 0
        };
        if (!editMode) {
            const response = await fetch(`${URI}/api/recipes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(recipeObject)
            });

            if (!response.ok) {
                throw new Error('Failed to create recipe');
            }

            const data = await response.json();

            console.log(data.successMessage);

            event.target.reset();

        } else {

            const response = await fetch(`${URI}/api/recipes/${itemId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(recipeObject)
            });

            if (!response.ok) {
                throw new Error('Failed to update recipe');
            }

            const data = await response.json();

            console.log(data.successMessage);

            window.location.href =
                `recipe-details.html?id=${itemId}`;
        }

    } catch (error) {
        console.log(error.message);
    }
}