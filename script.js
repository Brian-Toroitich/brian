document.getElementById('addRecipeButton').addEventListener('click', function() {
    const recipeInput = document.getElementById('recipeInput');
    const descriptionInput = document.getElementById('descriptionInput');
    const recipeList = document.getElementById('recipeList');
    
    if (recipeInput.value && descriptionInput.value) {
        const li = document.createElement('li');
        li.innerHTML = <strong>${recipeInput.value}</strong><br>${descriptionInput.value};
        recipeList.appendChild(li);
        recipeInput.value = '';
        descriptionInput.value = '';
    } else {
        alert("Please enter both recipe name and description.");
    }
});