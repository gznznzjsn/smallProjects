const board = document.querySelector('#board')
const btn = document.querySelector('.reset-button')
const colors = ['Crimson', 'Lime', 'Aqua', 'Gold', 'Orchid']
const SQUARES_NUMBER = 100

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)

    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)

    })

    board.append(square)
}

btn.addEventListener('click', () => { location.href = location.href; })

function setColor(element) {

    if (element.innerHTML === '') {
        const color = getRandomColor()
        element.innerHTML = color

    }
    element.style.color = `#eee`
    btn.style.backgroundColor = element.innerHTML
    element.style.backgroundColor = element.innerHTML
    element.style.boxShadow = `0 0 2px ${element.innerHTML},0 0 10px ${element.innerHTML}`
    btn.style.boxShadow = `0 0 2px ${element.innerHTML},0 0 10px ${element.innerHTML}`

}

function removeColor(element) {
    element.style.color = `${element.style.backgroundColor}`
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}