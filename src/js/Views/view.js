import icons from 'url:../../img/icons.svg';
export default class View {
  _data;
  render(data) {
    this._data = data;
    // console.log('outside if');
    if (!this._data || (Array.isArray(this._data) && this._data.length === 0)) {
      // console.log('Inside No dtaa');
      return this.renderError();
    }
    const markUP = this._generateHtml();
    this._clear();
    this._parentEle.insertAdjacentHTML('afterbegin', markUP);
    // console.log(this._data);
  }
  _clear() {
    this._parentEle.innerHTML = '';
  }

  // Render Spinner
  renderSpinner() {
    const markup = ` <div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>`;
    this._parentEle.innerHTML = '';
    this._parentEle.insertAdjacentHTML('afterbegin', markup);
  }
  //  Render Error
  renderError(errorMessage = this._errorMessage) {
    const markUp = ` <div class="error">
    <div>
      <svg>
        <use href="${icons}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${errorMessage}</p>
  </div>`;
    this._clear();
    this._parentEle.insertAdjacentHTML('afterbegin', markUp);
  }
  renderMessage(message = this._message) {
    const markUp = ` <div class="message">
    <div>
      <svg>
        <use href="${icons}icon-smile"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div>`;
    this._clear();
    this._parentEle.insertAdjacentHTML('afterbegin', markUp);
  }
}
