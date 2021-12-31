const toggleButton = document.getElementsByClassName('toggle-button')[0]
const headerMenu = document.getElementsByClassName('header__menu')[0]

toggleButton.addEventListener('click', () => {
    headerMenu.classList.toggle('active')
})