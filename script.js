document.addEventListener('keydown', function(event) {
    if (event.keyCode === 49) { // Check if key pressed is '1'
        window.location.href = 'C:/Users/panch/Desktop/test/recipe1.html'; // Redirect to recipe1.html
    } else if (event.keyCode === 50) { // Check if key pressed is '2'
        window.location.href = 'recipe2.html'; // Redirect to recipe2.html
    } else if (event.keyCode === 51) { // Check if key pressed is '3'
        window.location.href = 'recipe3.html'; // Redirect to recipe3.html
    }
});


// Add event listener for recipe clicks
document.querySelectorAll('.recipe').forEach(function(recipe) {
    recipe.addEventListener('click', function() {
        
        console.log('Selected Recipe:', recipe.querySelector('h2').textContent);
    });
});
