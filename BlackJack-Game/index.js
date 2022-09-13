let cards = []
let message = ""
let sum = 0
let isAlive = true
let hasBlackJack = false
let player = []

let titleEl = document.getElementById("title-el")
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

let playerNameEl = document.getElementById("playerName-el")
let submitNameEl = document.getElementById("submitName-el")

titleEl.textContent = "Blackjack Game!!"
cardsEl.textContent = "Your Cards: "


submitNameEl.addEventListener("click", function () {
    player.push(playerNameEl.value)
    for (let i = 0; i < player.length; i++) {
        document.getElementById("greeting-el").textContent = "Hello " + ", " + player[i] + " !"

    }
})



function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}
function renderGame() {
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function startGame() {
    isAlive = true
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    cards.push(firstCard, secondCard)
    sum = firstCard + secondCard
    renderGame()

}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomNumber()
        sum += card
        cards.push(card)
        renderGame()
    }

}