import View from './view.js';
class AddRecipeView extends View {
  constructor() {
    super();
    this._showAddRecipeForm();
    this._hideAddRecipeForm();
  }
  _parentEle = document.querySelector('.upload');
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  toggleWindow() {
    this._window.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');
  }
  addRecipeHandler(handler) {
    this._parentEle.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }
  _showAddRecipeForm() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }
  _hideAddRecipeForm() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
    console.log('Git Example');
  }
}
export default new AddRecipeView();
