const form = document.querySelector('form');
const answerBox = document.querySelector('.bottom-box');

const handleFormClick = e => {
  e.preventDefault();
  e.stopPropagation();
  const data = { 'str': form.elements.words.value };
  fetchyFetch(data);
  form.elements.words.value = '';
};

const fetchyFetch = (data) => {
  let url = 'http://localhost:1337/';
  let optionsObj = {
    headers: new Headers({'Content-Type':'application/json'}),
    method: 'POST',
    body: JSON.stringify(data)
  };
  fetch(url, optionsObj)
  .then( res => res.json() )
  .then( data => {
    displayResults(data);
  })
  .catch( err => console.error(err));
};

const displayResults = (data) => {
  console.log(data);
}

form.addEventListener('submit', e => handleFormClick(e), false);