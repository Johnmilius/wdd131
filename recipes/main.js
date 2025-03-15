//main.js
import {recipes} from './recipes.mjs';

function random(num){ //return a number between 0 and num
   return Math.floor(Math.random() * num);
}

function getRandomListEntry(list){
    const randomItem = list[(random(list.length))];
    return randomItem;
}

function recipeTemplate(recipe){
    return `<section id="main_recipeBox">
        <div id="main_recipeImg">
          <img src="${recipe.image}" alt="${recipe.name}" />
        </div>

        <div id="main_recipeInfo">
          <div id="main_recipeType">
            <p>${tagsTemplate(recipe.tags)}</p>
          </div>

          <div id="main_recipeName">
            <h2>${recipe.name}</h2>
          </div>

          <div id="main_recipeDescription">
            <p>
              ${recipe.description}
            </p>
          </div>

          <div id="main_recipeRating">
            ${ratingTemplate(recipe.rating)}
          </div>
        </div>
      </section>`;
}

function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
    let html = ``;
    tags.forEach(item => {
        html += `${item} `;
    });
	return html.trim();
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
    >`;
    // our ratings are always out of 5, so create a for loop from 1 to 5
    let i = 1;
        while (i <= 5) {
		// check to see if the current index of the loop is less than our rating
		// if so then output a filled star
            if (i <= rating){
                html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
            }
		// else output an empty star
            else{
                html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
            }
            i++;
        }

	// after the loop, add the closing tag to our string
	html += `</span>`;
	// return the html string
	return html
}

function filterRecipes(query, list){

    function searchCallback(item){
        return (  
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.tags.find((tag) => tag.toLowerCase().includes(query.toLowerCase())) ||
        item.recipeIngredient.find((ingredient) => ingredient.toLowerCase().includes(query.toLowerCase()))
        );
    }

    let filteredRecipesList = list.filter(searchCallback);

    let sortedFilteredList = filteredRecipesList.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
          } else if (a.name > b.name) {
            return 1;
          }
        return 0;
    })

    return sortedFilteredList;
}

function searchHandler(){
    const mainContainer = document.getElementById('main_container');
    let searchbarTEXT = document.querySelector("#header_searchBar input").value;

    searchbarTEXT = searchbarTEXT.toLowerCase();
    let filteredRecipes = filterRecipes(searchbarTEXT, recipes);

    let newSearchedHTML = filteredRecipes.map(recipeTemplate).join('');    
    mainContainer.innerHTML = newSearchedHTML;
}

function init() {  
    const mainContainer = document.getElementById('main_container');
    let appendHTML = recipeTemplate(getRandomListEntry(recipes));
    mainContainer.innerHTML += appendHTML;
}

// Wait for the DOM to fully load before calling init
document.addEventListener('DOMContentLoaded', init);
document.querySelector("#header_searchBar button").addEventListener('click', searchHandler);
