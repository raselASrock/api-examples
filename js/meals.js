const loadMeals = (search) => {
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(URL)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealContainer = document.getElementById('meal-container')
    mealContainer.innerHTML = ''
    meals.forEach(meal => {
        console.log(meal)
        const mealDiv = document.createElement('div')
        mealDiv.classList.add('col')
        mealDiv.innerHTML = `
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
            </div>
        </div>
        `
        mealContainer.appendChild(mealDiv)
    })
}

const searchFood = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value 
    loadMeals(searchText)
    searchField.value = ''
}

// loadMeals('a')