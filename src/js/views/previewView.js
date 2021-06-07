import View from './View.js';
import icons from 'url:../../img/icons.svg';

export default class PreviewView extends View {
  _parentElement;
  _errorMessage = '';
  _message = '';

  _generateMarkup() {
    const id = window.location.hash.slice(1);
    return this._data
      .map(el => {
        return `
          <li class="preview">
          <a class="preview__link ${
            el.id === id ? 'preview__link--active' : ''
          }" href="#${el.id}">
            <figure class="preview__fig">
              <img src="${el.image}" alt="${el.title}" />
            </figure>
            <div class="preview__data">
              <h4 class="preview__title">${el.title}</h4>
              <p class="preview__publisher">${el.publisher}</p>
              <div class="preview__user-generated ${!el.key ? 'hidden' : ''}">
                <svg>
                  <use href="${icons}#icon-user"></use>
                </svg>
              </div>
            </div>
          </a>
        </li>
          `;
      })
      .join('');
  }
}
