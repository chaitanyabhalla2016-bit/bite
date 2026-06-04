import {updateFavoriteCount,updateCopyrightYear} from '../common/common-scripts.js';
import CONFIG from '../common/config.js'

updateCopyrightYear();
updateFavoriteCount();

const addRecipeForm = document.querySelector('#add-recipe-form');

addRecipeForm.addEventListener('submit',addRecipe);

async function addRecipe(event){
    event.preventDefault();
    try{
        const formData = Object.fromEntries(new FormData(addRecipeForm));
        const recipeObject = {
            title: formData.title,
            category: formData.category,
            description: formData.description,
            
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
            
            featured: false,
            trending: false,
            rating: 0
        }
        console.log(formData);
        console.log(recipeObject);
        console.log('Form Submitted...');
        
        const response = await fetch(`${CONFIG.URI}/api/recipes`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(recipeObject)
        })
        if(!response.ok){
            console.log('Check Backend. Form not submitted!')
            return;
        }
        const data = await response.json();
        console.log(data.successMessage);
    }catch(error){
        console.log(error.message);
    }
}