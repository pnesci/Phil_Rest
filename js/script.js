const myFoodElement = document.createElement('img'); //data.url
myFoodElement.id = 'foodImage';
const myNameElement = document.createElement('h3'); //data.url
const myrecipeElement = document.createElement('h4'); //data.url


fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then(response => response.json())
  .then(data => {
     myFoodElement.src = data.meals[0].strMealThumb;
     myNameElement.innerText = `${data.meals[0].strMeal}`;
     myrecipeElement.innerText = `${data.meals[0].strInstructions}`;

     document.body.appendChild(myFoodElement);
     document.body.appendChild(myNameElement);
    document.body.appendChild(myrecipeElement);
  })
