import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    cookTime: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    servings: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true,
        default: []
    },
    steps: {
        type: [String],
        required: true
    },
    nutrition: {
        calories: {
            type: Number,
            required: true
        },
        protein: {
            type: Number,
            required: true
        },
        carbs: {
            type: Number,
            required: true
        },
        fat: {
            type: Number,
            required: true
        }
    },
    featured: {
        type: Boolean,
        default: false
    },
    trending: {
        type: Boolean,
        default: false
    }
},{timestamps:true});

const RecipeModel = mongoose.model('Recipe', RecipeSchema);

export default RecipeModel;