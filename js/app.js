document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-items');
  form.addEventListener('submit', handleSubmitForm)

  const deleteAll = document.querySelector('#delete-all')
  deleteAll.addEventListener('click', handleDeleteAll)

})


const handleSubmitForm = function (evt) {
  evt.preventDefault();

  const resultParagraph = document.querySelector('#game-list')
  const createGame = document.createElement('li')
  createGame.classList.add('game-list-item')

  createGame.textContent = `Name: ${this.name.value}, Genre: ${this.genre.value} Ratings: ${this.rating.value}`
  console.log('Is this working ')

  resultParagraph.appendChild(createGame)

  document.getElementById('new-items').reset();
}


const handleDeleteAll = function (evt) {
  const gameList = document.querySelector('#game-list')
  gameList.textContent = ''
}

