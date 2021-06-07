import icons from 'url:../../img/icons.svg';
import PreviewView from './previewView';

class ResultsView extends PreviewView {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No results found for your query';
  _message = '';
}

export default new ResultsView();
