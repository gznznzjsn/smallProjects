const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const mainBtn = document.querySelector('.main')
const colors = ['Crimson', 'Lime', 'Aqua', 'Gold', 'Orchid']
let time = parseInt(mainBtn.getAttribute('data-time'))
let score = 0

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

mainBtn.addEventListener('click', () => {
    screens[1].classList.add('up')
    startGame()
})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('increase')) {
        if (time != 55) {
            time += 5
            mainBtn.setAttribute('data-time', time)
            mainBtn.innerHTML = `${time} сек<br>запуск`
        }
    }
    if (event.target.classList.contains('decrease')) {
        if (time != 5) {
            time -= 5
            mainBtn.setAttribute('data-time', time)
            mainBtn.innerHTML = `${time} сек<br>запуск`
        }
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame() {
    createRandomCircle()
    if (time <= 10) {
        timeEl.innerHTML = `00:0${time}`
    } else {
        timeEl.innerHTML = `00:${time}`

    }
    setInterval(decreaseTime, 1000)
}

function decreaseTime() {
    if (time != 0) {
        if (time <= 10) {
            timeEl.innerHTML = `00:0${--time}`
        } else {
            timeEl.innerHTML = `00:${--time}`
        }
    } else {
        finishGame()
    }
}

function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1><span class="primary">${(score / mainBtn.getAttribute('data-time')).toFixed(2)}</span><br>попаданий в секунду</h1>`
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const { width, height } = board.getBoundingClientRect()
    const size = getRandomNumber(10, 60)
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.background = ` linear-gradient(135deg, ${getRandomColor()} 0%, #000 80%)`

    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}