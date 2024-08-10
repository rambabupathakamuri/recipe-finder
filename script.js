function searchRecipes() {
    const ingredientInput = document.getElementById('ingredient-input').value;
    const ingredients = ingredientInput.split(',').map(ingredient => ingredient.trim().toLowerCase());
    
    // Mock data for demonstration purposes
    const recipes = [
        {
            id: "1",
            name: "Spaghetti Carbonara",
            image: "assets/images/carbonara.jpg",
            description: "A classic Italian pasta dish.",
            ingredients: ["spaghetti", "eggs", "parmesan", "pancetta"]
        },
        {
            id: "2",
            name: "Vegetable Stir Fry",
            image: "assets/images/stirfry.jpg",
            description: "A quick and easy vegetable stir fry.",
            ingredients: ["broccoli", "carrot", "bell pepper", "soy sauce"]
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
