function searchRecipes() {
    const ingredientInput = document.getElementById('ingredient-input').value;
    const ingredients = ingredientInput.split(',').map(ingredient => ingredient.trim().toLowerCase());
    fetch('recipes.json')
        .then(response => response.json())
        .then(data => {
            const filteredRecipes = data.recipes.filter(recipe => {
                return ingredients.every(ingredient => recipe.ingredients.includes(ingredient));
            });
            displayRecipes(filteredRecipes);
        });
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
                <img src="${recipe.image}" alt="${recipe.name}">
                <p>${recipe.description}</p>
                <button onclick="viewRecipe('${recipe.id}')">View Recipe</button>
            `;
            recipeList.appendChild(recipeCard);
        });
    }
}

function viewRecipe(recipeId) {
    // Logic to display recipe details or navigate to a detailed recipe page
}
