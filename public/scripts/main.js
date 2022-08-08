import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// Pegar quando o marcar como lido for clicado
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  // Irá percorer todos os botões
  button.addEventListener('click', handleClick)
})

const deleteButton = document.querySelector('.actions a.delete')

deleteButton.forEach(button => {
  button.addEventListener('click', event => handleClick(event, (check = false)))
})

function handleClick(event, check = true) {
  event.preventDefault()
  const text = check ? 'Marcar como lida' : 'Excluir'

  modalTitle.innerHTML = `${text} essa pergunta`
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} essa pergunta?`
  modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

  // Abrir modal
  modal.open()
}
