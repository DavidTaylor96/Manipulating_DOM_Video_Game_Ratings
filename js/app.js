document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-items');
  form.addEventListener('submit', handleSubmitForm)

  const deleteAll = document.querySelector('#delete-all')
  deleteAll.addEventListener('click', handleDeleteAll)

  const body = document.querySelector('game-list-item')
  const createButton = document.querySelector('#create-button')
  createButton.addEventListener('click', () => {
    handleSubmitForm(body)
  })
})


const handleSubmitForm = function (evt) {
  evt.preventDefault();

  const resultParagraph = document.querySelector('#game-list')
  const createGame = document.createElement('li')
  createGame.classList.add('game-list-item')

  createGame.textContent = `Name: ${evt.target.name.value}, Genre: ${evt.target.genre.value} Ratings: ${evt.target.rating.value}`

  resultParagraph.appendChild(createGame)

  document.getElementById('new-items').reset();
}


const handleDeleteAll = function (evt) {
  const gameList = document.querySelector('#game-list')
  gameList.textContent = ''
}

const createNewButton = (parentElement) => {
  const newButton = document.createElement('button')
  newButton.textContent = "Delete"
  parentElement.appendChild(newButton)
  console.log(newButton)
  console.log(parentElement)
}
