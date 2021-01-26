import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime/runtime';
import * as Model from './model.js';
import * as Test from './test.js';
import recipeView from './Views/recipeView.js';
import searchView from './Views/searchView.js';
import resultsView from './Views/resultsView.js';
import paginationView from './Views/paginationView.js';
import addRecipeView from './Views/addRecipeView.js';
// if (module.hot) {
//   module.hot.accept();
// }
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  // Loading Recipe
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    // console.log('Before Spinner');
    recipeView.renderSpinner();
    //console.log('After Spinner');
    await Model.loadRecipe(id);
    // console.log(recipe);
    // console.log('Before Render');
    recipeView.render(Model.state.recipe);
    // console.log('After Update Servings');
    // Rendering Recipe
  } catch (error) {
    console.log(error.message);
    recipeView.renderError();
  }
};

const controlSerachResult = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;
    resultsView.renderSpinner();
    await Model.loadSearchResult(query);
    // console.log(Model.state.search.results);
    Model.state.search.page = 1;
    resultsView.render(Model.searchPerPage());
    paginationView.render(Model.state.search);
  } catch (error) {
    console.error(error);
  }
};
const controlServings = function (updateTo) {
  Model.updateRecipe(updateTo);
  recipeView.render(Model.state.recipe);
  // console.log('Inside Control servings');
};
const controlPagination = function (goToPage) {
  console.log('Inside control pagination');
  resultsView.render(Model.searchPerPage(goToPage));
  paginationView.render(Model.state.search);
};
const controlAddRecipe = async function (data) {
  try {
    await Model.uploadRecipe(data);
  } catch (error) {
    addRecipeView.renderError(error.message);
  }
};
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandler(controlSerachResult);
  paginationView.addHandlerclick(controlPagination);
  recipeView.addHandlerServings(controlServings);
  addRecipeView.addRecipeHandler(controlAddRecipe);
};
init();
//window.addEventListener('hashchange', showRecipe);
