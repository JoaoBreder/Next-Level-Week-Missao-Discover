import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Função de abertura da modal
function handleClick(event, check = true){
    event.preventDefault()

    const slug = check ? 'check' : 'delete'
    const roomId = document.querySelector('#room-id').dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector('.modal form')
    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

    //Modificando a modal
    const text = check ? 'Marcar como lida' : 'Excluir'

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`

    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

    //Abrir a modal
    modal.open()
}

//Pegar todos os botões que existe com a classe 'check'
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
    //Adicionar a escuta
    button.addEventListener('click', handleClick)
})

//Pegar todos os botões que existe com a classe 'delete'
const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
    //Adicionar a escuta
    button.addEventListener('click', (event) => handleClick(event, false))
})