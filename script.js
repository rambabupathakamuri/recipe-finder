function searchRecipes() {
    const ingredientInput = document.getElementById('ingredient-input').value;
    const ingredients = ingredientInput.split(',').map(ingredient => ingredient.trim().toLowerCase());
    
    // Indian recipes data
    const recipes = [
        {
            id: "1",
            name: "Chicken Biryani",
            image: "assets/images/chicken_biryani.jpg",
            description: "A flavorful and aromatic rice dish made with basmati rice, spices, and chicken.",
            ingredients: ["chicken", "rice", "yogurt", "onion", "garlic", "ginger", "spices"]
        },
        {
            id: "2",
            name: "Palak Paneer",
            image: "assets/images/palak_paneer.jpg",
            description: "A popular vegetarian dish made with spinach and paneer (Indian cottage cheese).",
            ingredients: ["spinach", "paneer", "onion", "tomato", "garlic", "ginger", "spices"]
        },
        {
            id: "3",
            name: "Masala Dosa",
            image: "assets/images/masala_dosa.jpg",
            description: "A crispy rice and lentil crepe filled with spiced potato filling, served with chutney and sambar.",
            ingredients: ["rice", "lentils", "potato", "onion", "mustard seeds", "turmeric"]
        },
        {
            id: "4",
            name: "Butter Chicken",
            image: "assets/images/butter_chicken.jpg",
            description: "A rich and creamy tomato-based curry made with marinated chicken.",
            ingredients: ["chicken", "tomato", "butter", "cream", "garlic", "ginger", "spices"]
        },
        {
            id: "5",
            name: "Chole Bhature",
            image: "assets/images/chole_bhature.jpg",
            description: "A North Indian dish consisting of spicy chickpeas served with deep-fried bread.",
            ingredients: ["chickpeas", "onion", "tomato", "garlic", "ginger", "spices", "flour"]
        }
    ];

    const filteredRecipes = recipes.filter(recipe => {
        return ingredients.every(ingredient => recipe.ingredients.includes(ingredient));
    });

    displayRecipes(filteredRecipes);
}

function displayRecipes(recipes) {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = ''; // Clear previous results

    if (recipes.length === 0) {
        recipeList.innerHTML = '<p>No recipes found. Try different ingredients.</p>';
    } else {
        recipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');
            recipeCard.innerHTML = `
                <h3>${recipe.name}</h3>
                <img src="${recipe.image}" alt="${recipe.name}" style="width:100%; height:auto;">
                <p>${recipe.description}</p>
                <button onclick="viewRecipe('${recipe.id}')">View Recipe</button>
            `;
            recipeList.appendChild(recipeCard);
        });
    }
}

function viewRecipe(recipeId) {
    alert("You clicked on recipe with ID: " + recipeId);
}
