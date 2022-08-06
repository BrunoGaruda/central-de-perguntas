import Modal from './modal.js'

const modal = Modal()

// Pegar quando o marcar como lido for clicado
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  // Irá percorer todos os botões
  button.addEventListener('click', event => {
    modal.open()
  })
})

const deleteButton = document.querySelector('.actions a.delete')

deleteButton.forEach(button => {
  button.addEventListener('click', events => {
    modal.open()
  })
})
