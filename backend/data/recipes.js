export const recipes = [
  {
    id: 1,
    title: "Creamy Garlic Pasta",
    description: "Rich and creamy pasta tossed with roasted garlic sauce and herbs.",
    category: "Italian",
    difficulty: "Easy",
    image: "pasta_recipe.jpg",
    cookTime: 25,
    rating: 4.7,
    servings: 2,
    ingredients: [
      "200g pasta",
      "4 garlic cloves",
      "1 cup heavy cream",
      "Parmesan cheese",
      "Fresh parsley"
    ],
    steps: [
      "Boil pasta.",
      "Cook garlic in olive oil.",
      "Add cream and parmesan.",
      "Mix pasta into sauce.",
      "Serve hot."
    ],
    nutrition: {
      calories: 520,
      protein: 18,
      carbs: 64,
      fat: 22
    },
    featured: true
  },

  {
    id: 2,
    title: "Chicken Biryani",
    description: "Aromatic basmati rice cooked with spicy chicken and Indian spices.",
    category: "Indian",
    difficulty: "Hard",
    image: "chicken_biryani_recipe.jpg",
    cookTime: 50,
    rating: 4.9,
    servings: 4,
    ingredients: [
      "500g chicken",
      "2 cups basmati rice",
      "Biryani masala",
      "Onions",
      "Mint leaves"
    ],
    steps: [
      "Marinate chicken.",
      "Cook rice separately.",
      "Layer rice and chicken.",
      "Cook on dum.",
      "Serve hot."
    ],
    nutrition: {
      calories: 680,
      protein: 34,
      carbs: 72,
      fat: 28
    },
    featured: true
  },

  {
    id: 3,
    title: "Veggie Burger",
    description: "Loaded vegetable burger with crispy patty and fresh lettuce.",
    category: "American",
    difficulty: "Easy",
    image: "veggie_burger_recipe.jpg",
    cookTime: 20,
    rating: 4.5,
    servings: 1,
    ingredients: [
      "Burger buns",
      "Veggie patty",
      "Cheese slice",
      "Lettuce",
      "Tomato"
    ],
    steps: [
      "Toast buns.",
      "Cook patty.",
      "Add vegetables.",
      "Assemble burger.",
      "Serve fresh."
    ],
    nutrition: {
      calories: 430,
      protein: 12,
      carbs: 40,
      fat: 16
    },
    featured: false
  },

  {
    id: 4,
    title: "Paneer Butter Masala",
    description: "Soft paneer cubes simmered in creamy tomato butter gravy.",
    category: "Indian",
    difficulty: "Medium",
    image: "paneer_butter_masala_recipe.jpg",
    cookTime: 35,
    rating: 4.8,
    servings: 3,
    ingredients: [
      "Paneer",
      "Tomatoes",
      "Butter",
      "Cream",
      "Indian spices"
    ],
    steps: [
      "Cook tomato gravy.",
      "Add spices.",
      "Add paneer cubes.",
      "Mix cream.",
      "Serve hot."
    ],
    nutrition: {
      calories: 610,
      protein: 20,
      carbs: 24,
      fat: 34
    },
    featured: true
  },
  
  {
    id: 5,
    title: "Sushi Rolls",
    description: "Fresh sushi rolls filled with vegetables and seafood flavors.",
    category: "Japanese",
    difficulty: "Hard",
    image: "sushi_rolls_recipe.jpg",
    cookTime: 45,
    rating: 4.6,
    servings: 2,
    ingredients: [
      "Sushi rice",
      "Nori sheets",
      "Salmon",
      "Cucumber",
      "Avocado"
    ],
    steps: [
      "Prepare rice.",
      "Place nori sheet.",
      "Add fillings.",
      "Roll tightly.",
      "Slice and serve."
    ],
    nutrition: {
      calories: 390,
      protein: 22,
      carbs: 42,
      fat: 10
    },
    featured: false
  },

  {
    id: 6,
    title: "Margherita Pizza",
    description: "Classic pizza topped with mozzarella, basil, and tomato sauce.",
    category: "Italian",
    difficulty: "Medium",
    image: "margherita_pizza_recipe.jpg",
    cookTime: 30,
    rating: 4.8,
    servings: 2,
    ingredients: [
      "Pizza dough",
      "Mozzarella",
      "Tomato sauce",
      "Basil",
      "Olive oil"
    ],
    steps: [
      "Prepare dough.",
      "Spread sauce.",
      "Add toppings.",
      "Bake pizza.",
      "Serve hot."
    ],
    nutrition: {
      calories: 700,
      protein: 24,
      carbs: 82,
      fat: 30
    },
    featured: true
  },

  {
    id: 7,
    title: "Grilled Salmon",
    description: "Perfectly grilled salmon fillet with lemon herb seasoning.",
    category: "Seafood",
    difficulty: "Medium",
    image: "grilled_salmon_recipe.jpg",
    cookTime: 25,
    rating: 4.7,
   
    servings: 2,
    ingredients: [
      "Salmon fillet",
      "Lemon",
      "Garlic",
      "Olive oil",
      "Herbs"
    ],
    steps: [
      "Season salmon.",
      "Heat grill.",
      "Cook salmon.",
      "Add lemon juice.",
      "Serve warm."
    ],
    nutrition: {
       calories: 450,
      protein: 38,
      carbs: 4,
      fat: 24
    },
    featured: false
  },

  {
    id: 8,
    title: "Chocolate Pancakes",
    description: "Fluffy chocolate pancakes topped with syrup and berries.",
    category: "Dessert",
    difficulty: "Easy",
    image: "chocolate_pancakes_recipe.jpg",
    cookTime: 15,
    rating: 4.9,
    
    servings: 2,
    ingredients: [
      "Flour",
      "Cocoa powder",
      "Milk",
      "Eggs",
      "Chocolate syrup"
    ],
    steps: [
      "Prepare batter.",
      "Heat pan.",
      "Cook pancakes.",
      "Add toppings.",
      "Serve warm."
    ],
    nutrition: {
      calories: 540,
      protein: 10,
      carbs: 68,
      fat: 22
    },
    featured: true
  },

  {
    id: 9,
    title: "Caesar Salad",
    description: "Fresh romaine lettuce with creamy Caesar dressing and croutons.",
    category: "Healthy",
    difficulty: "Easy",
    image: "caesar_salad_recipe.jpg",
    cookTime: 10,
    rating: 4.4,
    
    servings: 2,
    ingredients: [
      "Romaine lettuce",
      "Croutons",
      "Parmesan",
      "Caesar dressing"
    ],
    steps: [
      "Wash lettuce.",
      "Prepare dressing.",
      "Mix ingredients.",
      "Add croutons.",
      "Serve chilled."
    ],
    nutrition: {
      calories: 280,
      protein: 8,
      carbs: 18,
      fat: 14
    },
    featured: false
  },

  {
    id: 10,
    title: "Beef Tacos",
    description: "Crunchy tacos stuffed with spicy beef and fresh vegetables.",
    category: "Mexican",
    difficulty: "Easy",
    image: "beef_tacos_recipe.jpg",
    cookTime: 20,
    rating: 4.6,
    
    servings: 3,
    ingredients: [
      "Taco shells",
      "Beef",
      "Lettuce",
      "Cheese",
      "Tomatoes"
    ],
    steps: [
      "Cook beef.",
      "Prepare vegetables.",
      "Fill taco shells.",
      "Add toppings.",
      "Serve immediately."
    ],
    nutrition: {
      calories: 510,
      protein: 26,
      carbs: 36,
      fat: 20
    },
    featured: false
  },

  {
    id: 11,
    title: "Butter Croissant",
    description: "Flaky French croissant baked with rich buttery layers.",
    category: "French",
    difficulty: "Hard",
    image: "butter_croissant_recipe.jpg",
    cookTime: 40,
    rating: 4.5,
    
    servings: 2,
    ingredients: [
      "Flour",
      "Butter",
      "Yeast",
      "Milk",
      "Sugar"
    ],
    steps: [
      "Prepare dough.",
      "Layer butter.",
      "Fold repeatedly.",
      "Bake croissants.",
      "Serve fresh."
    ],
    nutrition: {
      calories: 320,
      protein: 6,
      carbs: 34,
      fat: 18
    },
    featured: false
  },

  {
    id: 12,
    title: "Thai Green Curry",
    description: "Spicy and creamy Thai curry with vegetables and coconut milk.",
    category: "Thai",
    difficulty: "Medium",
    image: "thai_green_curry_recipe.jpg",
    cookTime: 35,
    rating: 4.8,
    
    servings: 3,
    ingredients: [
      "Green curry paste",
      "Coconut milk",
      "Vegetables",
      "Chicken",
      "Basil"
    ],
    steps: [
      "Cook curry paste.",
      "Add coconut milk.",
      "Cook vegetables.",
      "Add chicken.",
      "Serve hot."
    ],
    nutrition: {
      calories: 590,
      protein: 28,
      carbs: 26,
      fat: 32
    },
    featured: true
  },

  {
    id: 13,
    title: "Mango Smoothie Bowl",
    description: "Refreshing mango smoothie bowl topped with fruits and seeds.",
    category: "Healthy",
    difficulty: "Easy",
    image: "mango_smoothie_bowl_recipe.jpg",
    cookTime: 8,
    rating: 4.7,
    
    servings: 1,
    ingredients: [
      "Mango",
      "Banana",
      "Yogurt",
      "Chia seeds",
      "Berries"
    ],
    steps: [
      "Blend fruits.",
      "Pour into bowl.",
      "Add toppings.",
      "Serve chilled."
    ],
    nutrition: {
      calories: 260,
      protein: 6,
      carbs: 42,
      fat: 8
    },
    featured: false
  },

  {
    id: 14,
    title: "BBQ Chicken Wings",
    description: "Smoky barbecue chicken wings glazed with spicy BBQ sauce.",
    category: "American",
    difficulty: "Medium",
    image: "bbq_chicken_wings_recipe.jpg",
    cookTime: 40,
    rating: 4.9,
    
    servings: 3,
    ingredients: [
      "Chicken wings",
      "BBQ sauce",
      "Garlic powder",
      "Paprika"
    ],
    steps: [
      "Season wings.",
      "Bake chicken.",
      "Add BBQ sauce.",
      "Cook until glazed.",
      "Serve hot."
    ],
    nutrition: {
      calories: 640,
      protein: 40,
      carbs: 18,
      fat: 36
    },
    featured: true
  },

  {
    id: 15,
    title: "Ramen Noodles",
    description: "Hot Japanese ramen noodles served in savory broth.",
    category: "Japanese",
    difficulty: "Medium",
    image: "ramen_noodles_recipe.jpg",
    cookTime: 30,
    rating: 4.8,
    
    servings: 2,
    ingredients: [
      "Ramen noodles",
      "Broth",
      "Eggs",
      "Mushrooms",
      "Spring onions"
    ],
    steps: [
      "Prepare broth.",
      "Cook noodles.",
      "Add toppings.",
      "Assemble bowl.",
      "Serve hot."
    ],
    nutrition: {
      calories: 560,
      protein: 22,
      carbs: 58,
      fat: 20
    },
    featured: true
  }
];