<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recipe Finder</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Recipe Finder</h1>
        <nav>
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
        </nav>
    </header>

    <main>
        <section id="search">
            <h2>Find Recipes by Dish Name</h2>
            <input type="text" id="dish-input" placeholder="Enter dish name">
            <button onclick="searchRecipes()">Search</button>
        </section>

        <section id="menu">
            <h2>Menu</h2>
            <div id="menu-list"></div>
        </section>

        <section id="results">
            <h2>Recipe Results</h2>
            <div id="recipe-list"></div>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Recipe Finder. All Rights Reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
