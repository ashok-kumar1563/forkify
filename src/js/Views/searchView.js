class SearchView {
  _parentEle = document.querySelector('.search');
  getQuery() {
    const query = this._parentEle.querySelector('.search__field').value;
    this._clear();
    return query;
  }

  _clear() {
    this._parentEle.querySelector('.search__field').value = '';
  }
  addHandler(handler) {
    this._parentEle.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}
export default new SearchView();
