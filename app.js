const search = document.getElementById('search');
const submit = document.getElementById('submit');

const mealEl = document.getElementById('meals');
const resultHeading = document.getElementsByClassName('result-heading');

// search meal 
function searchMeal(e){
    e.preventDefault();

    // get search meal 
    const term = search.value;

    // check for empty 
    if (term.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            resultHeading.innerHTML = `<h2>Search Result For ${term}`;
            if(data.meals === null){
                resultHeading.innerHTML = `<h2> There Are No Result For ${term} `;
            } else{
                mealEl.innerHTML = data.meals.map(
                    (meal) =>`
                    <div class="meal">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                    <div class="meal-info" data-mealID = "${meal.idMeal}">
                    <h3> ${meal.strMeal}</h3>
                    </div>
                    `
                ).join("");
            }
        });
    } else{
        alert('Please insert a value in search')
    }

}


// event listeners 
submit.addEventListener('submit', searchMeal);