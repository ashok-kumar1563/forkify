import icons from 'url:../../img/icons.svg';
import New1View from './view.js';
class PaginationView extends New1View {
  _parentEle = document.querySelector('.pagination');
  _generateHtml() {
    const currentPage = this._data.page;
    //console.log(this._parentEle);
    const numofPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numofPages);
    // User is on first page and there are more pages
    if (currentPage === 1 && numofPages > 1)
      return `<button data-goto = "${
        currentPage + 1
      }" class="btn--inline pagination__btn--next">
      <span>${currentPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>`;
    // User is on between page
    if (currentPage > 1 && numofPages > currentPage)
      return `
      <button data-goto = "${
        currentPage - 1
      }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>${currentPage - 1}</span>
          </button>
      <button data-goto = "${
        currentPage + 1
      }" class="btn--inline pagination__btn--next">
      <span>${currentPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>`;

    // User is on last page
    if (currentPage > 1 && currentPage === numofPages)
      return `<button data-goto = "${
        currentPage - 1
      }"class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>${currentPage - 1}</span>
  </button>`;
    // User is on first page and there is no other pages
    if (currentPage === numofPages) return ' ';
  }
  addHandlerclick(handler) {
    this._parentEle.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      console.log(btn);
      const value = +btn.dataset.goto;
      console.log(value);
      handler(value);
    });
  }
}

export default new PaginationView();
