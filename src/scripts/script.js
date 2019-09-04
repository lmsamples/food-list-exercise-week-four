var content = document.querySelector(".foodList")
fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {

        parsedFoods.forEach(food => {
        document.querySelector(".foodList").innerHTML += `<div id="box">
        <h2>${food.name}</h2>
        <p>${food.category}</p>
        <p>${food.ethnicity}</p>
        </div>`
    })
})