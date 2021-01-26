import View from './view';

import newView from './view.js';
import icons from 'url:../../img/icons.svg';
class ResultView extends newView {
  _parentEle = document.querySelector('.results');
  _errorMessage = 'We could not find recipe ! Please search another one';
  _message = '';

  _generateHtml() {
    //  console.log(this._data);
    return `
    ${this._data.map(this._generateMarkupPreView).join(' ')}
    `;
  }
  _generateMarkupPreView(res) {
    return `<li class="preview">
    <a class="preview__link" href="#${res.id}">
      <figure class="preview__fig">
        <img src="${res.image}" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${res.title}</h4>
        <p class="preview__publisher">${res.publisher}</p>
        
      </div>
    </a>
  </li>`;
  }
}
export default new ResultView();
