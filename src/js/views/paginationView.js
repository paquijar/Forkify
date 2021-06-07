import icons from 'url:../../img/icons.svg';
import View from './View.js';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerPageChange(handler) {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      handler(+btn.dataset.goto);
    });
  }

  _generateButtonMarkup(page, type) {
    const icon = type === 'next' ? 'right' : 'left';
    return `
    <button data-goto="${page}" class="btn--inline pagination__btn--${type}">
      <span>Page ${page}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-${icon}"></use>
      </svg>
    </button>
`;
  }

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const curPage = this._data.page;

    //Page 1
    if (curPage === 1 && numPages > 1) {
      return this._generateButtonMarkup(curPage + 1, 'next');
    }

    //Last Page
    if (curPage === numPages && numPages > 1) {
      return this._generateButtonMarkup(curPage - 1, 'prev');
    }

    //Other page
    if (curPage < numPages) {
      const markup =
        this._generateButtonMarkup(curPage - 1, 'prev') +
        this._generateButtonMarkup(curPage + 1, 'next');
      return markup;
    }

    return '';
  }
}

export default new PaginationView();
