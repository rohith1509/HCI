document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.recipe img').forEach(function(img) {
        img.addEventListener('click', function() {
            var recipeNumber = this.parentElement.id.replace('recipe', '');
            window.location.href = 'C:/Users/panch/Desktop/test/recipe1.html';
        });
    });
});
